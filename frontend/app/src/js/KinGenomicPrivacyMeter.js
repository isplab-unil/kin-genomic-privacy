import {iframeLocalStorage} from "./lib/iframeCookiesLocalStorage.js"
import {FamilyTreeLayout} from "./FamilyTreeLayout.js"
import {FamilyTreeArtist} from "./FamilyTreeArtist.js"
import {KgpScoreJsCache} from "./KgpScoreJsCache.js"
import {KgpScoreRequestHandler} from "./KgpScoreRequestHandler.js"
import {KgpSurvey} from "./KgpSurvey.js"
import {KgpBackendStatus} from "./KgpBackendStatus.js"
import {KgpScoreNumberExplainer} from "./KgpScoreNumberExplainer.js"
import {KgpWordedScore} from "./KgpWordedScore.js"
import {KgpPrivacyBar} from "./KgpPrivacyBar.js"
import {kgpSetSourceEvent, kgpSetHeightEvent} from "./KgpIframeInterface"
import {TrashButton} from "./TrashButton.js"
import {KgpTutorialButton, kgpTutorial} from "./KgpTutorial.js"
import {detectIE11, detectMobile, onWindowResize} from "./utils.js"
import { GedcomImportButton } from "./GedcomImport.js"

export class KinGenomicPrivacyMeter{
  constructor(api_base_url, svgId, youNodeId, i18n, localStoragePrefix="kgpmeter-", options={}){
    this.setOptions(options)
    let self = this
    this.i18n = i18n

    this.svg = d3.select("#"+svgId)
    this.svgHeight = parseInt(this.svg.attr("height"))
    this.svgOriginalHeight = this.svgHeight
    this.nonSvgElementsHeight=190 + (window.innerWidth<700? 80:0)
    this.updateSvgHeight(this.svgHeight, 800, true)

    this.youNodeId = youNodeId // "@I1@"
    this.privacyMetric = 1
    this.relationships = KinGenomicPrivacyMeter.getRelationships()

    this.indiNodeSize = {width:100,height:100}
    this.famNodeSize = {width:7,height:7}

    this.updateSvgWidth()



    // set language event
    function setLanguage(e){
      i18n.changeLanguage(e.data.lng)
    }

    // set max dimensions event
    function setIframeMaxDimensionEvent(e){
      self.options.svgMaxHeight = e.data.maxHeight-self.nonSvgElementsHeight
      if(self.familyTreeArtist && (self.familyTreeArtist.scaleFactor!=1 || self.familyTreeArtist.heightFtree>self.options.svgMaxHeight)){
        self.resizeSvg()
        self.updateSvgHeight(self.heightFtree*self.familyTreeArtist.scaleFactor, 0, true)
      }
    }

    // user id&source + source event
    let idLSkey = localStoragePrefix+"user-id"
    let sourceLSkey = localStoragePrefix+"user-source"

    iframeLocalStorage.getItem(idLSkey).then(
      function(userId){
        self.userId = userId
        if(!self.userId){
          self.userId = (+new Date())+"-"+Math.random()
          iframeLocalStorage.setItem(idLSkey,self.userId,1 *24*60*60*1000)
        }
      }
    )
    iframeLocalStorage.getItem(sourceLSkey).then(
      function(userSource){
        if(userSource){
          self.userSource = userSource
        }
      }
    )
    function setSource(e){
      if(!self.userSource){
        // if no source: init user source
        self.userSource = e.data.source? e.data.source : document.URL
        // TODO: remove or refine ?test
        if(Boolean(self.userSource.match(/\/privacy-dev\//))){
          self.userSource = self.userSource+"?test"
        }
        iframeLocalStorage.setItem(sourceLSkey,self.userSource,1 *24*60*60*1000)

        // send init request
        self.scoreRequestHandler.requestScore(
          "i1",
          [["i1","f1"],["f1","i2"]], [],
          self.userId, self.userSource, self.i18n.lng,
          true // silent request
        )
      }
    }

    // if app not enclosed in an iframe: set source as current URL after 1sec
    setTimeout(function createUserAfterTimeout(){
      let event = kgpSetSourceEvent(document.URL)
      window.postMessage(event, "*")
    },1000)

    // tutorial button
    function createTutorialButton(){
      if(!self.tutorialButton){
        self.tutorialButton = new KgpTutorialButton("tutorial-button", self, {"click.tutorial": d=>kgpTutorial(self.i18n)})
      }
    }
    function removeTutorialButton(){
      if(self.tutorialButton){
        self.tutorialButton.remove()
      }
    }
    function setTutorialButton(e){
      if(e.data.showTutorialButton){
        createTutorialButton()
      }else{
        removeTutorialButton()
      }
    }
    createTutorialButton()

    // upload gedcom button
    this.gedcomImport = new GedcomImportButton("gedcom-import","load-gedcom",this)

    // api urls
    this.setApiUrl(api_base_url)

    this.kgpsurvey = new KgpSurvey(this.surveyApiEndpoint, this.userId, this.i18n)
    const surveyScoreListener = (...args) => self.kgpsurvey.awaitScore(...args)

    // privacy bar
    let privacyBarWidth = 30
    let privacyBarStrokeWidth = 4
    this.privacyBar = new KgpPrivacyBar(
      this.svg.attr("id"),
      "privacy-bar-g",
      this.svgWidth - privacyBarWidth - privacyBarStrokeWidth, 30, 
      30, 400, 5,
      d3.interpolateRgbBasis(["rgb(255,0,0)","rgb(255,125,0)","rgb(255,255,0)","rgb(0,195,0)"]),
      self.i18n, false,true, false, false,4
    )
    this.privacyBar.init(false, false)
    this.privacyBar.reset(0)

    // privacy worded score
    this.privacyWordedScore = new KgpWordedScore(
      this.privacyBar.g.attr("id"),
      "privacy-bar-title",
      this.privacyBar.width, -16, 20,
      this.privacyBar.colorScale,
      self.i18n,
      "privacy-bar-title"
    )

    // backend status
    const faqUrl = (window.location+"").match(/\/privacy-dev\//)? "/privacy-dev/faq" : "/privacy/faq"
    this.backendStatus = new KgpBackendStatus("kgp-backend-status", self.i18n, faqUrl)

    // explainer
    this.scoreNumberExplainer = new KgpScoreNumberExplainer("kgp-explainer-container", self.i18n, "explainer-text")

    // js score cach
    const kgpScoreCacheLSkey = false //localStoragePrefix+"score-cache"
    const kgpScoreSaveUrl = false //"../save-cache"
    const scoreCache = new KgpScoreJsCache(null, this.scoreJsCacheApiEndpoint, kgpScoreSaveUrl, kgpScoreCacheLSkey)

    // request handler
    this.scoreRequestHandler = new KgpScoreRequestHandler(this.privacyScoreApiEndpoint, scoreCache)
    // update privacyMetric
    this.scoreRequestHandler.addListener(kgpPromise => {
      kgpPromise.then(
        kgpSuccess => self.privacyMetric = kgpSuccess.result.privacy_metric,
        ()=>{}
      )
    })
    // update cursor <- for tutorial videos, comment following listener
    this.scoreRequestHandler.addListener(kgpPromise => {
      $("body").css({'cursor':'progress'})
      kgpPromise.then(
        kgpSuccess => $("body").css({'cursor':'auto'}),
        kgpError => $("body").css({'cursor':'auto'}))
    })
    // ...other listeners
    this.scoreRequestHandler.addListener((...args) => self.privacyBar.awaitScore(...args))
    if(this.privacyWordedScore){
      this.scoreRequestHandler.addListener((...args) => self.privacyWordedScore.awaitScore(...args))
    }
    this.scoreRequestHandler.addListener((...args) => self.backendStatus.awaitScore(...args))
    this.scoreRequestHandler.addListener((...args) => self.scoreNumberExplainer.awaitScore(...args))
    this.scoreRequestHandler.addListener(surveyScoreListener)
    
    function removeSurvey(){
      self.kgpsurvey.remove()
      self.scoreRequestHandler.removeListener(surveyScoreListener)
    }

    //handles messages received from parent window
    function dispatchKgpParentMessage(e){
      if(e.data.type){
        switch(e.data.type){
          case "KgpSetLanguageEvent":
            setLanguage(e)
            break
          case "KgpSetIframeMaxDimensionEvent":
            setIframeMaxDimensionEvent(e)
            break
          case "KgpSetSourceEvent":
            setSource(e)
            break
          case "KgpLaunchTutorialEvent":
            $("#tuto-modal").modal("show")
            kgpTutorial(self.i18n)
            break
          case "KgpToggleTutorialButtonEvent":
            setTutorialButton(e)
            break
          case "KgpRemoveSurveyEvent":
            removeSurvey(e)
            break
          case "KgpSetHeightEvent":
            break
          default:
        }
      }
    }
    window.addEventListener('message', dispatchKgpParentMessage, false)

    // trash button
    this.trashButton = new TrashButton("trash-button", this, {"click.trash": d=>self.reset()})

    onWindowResize(()=>self.resizeSvg())
    window.addEventListener("orientationchange", ()=>{
      self.resizeSvg()
    }, false);
    //onWindowResize(()=>d3.range(1000)) // hack with an astonishing effect: fixes problems with privacyBar&target on window resize...
    
    this.loadFamilyTreeFromLocalStorage().then(ftree=>{
      let savedFtree = Boolean(ftree)
      if(!savedFtree){
        self.ftree = KinGenomicPrivacyMeter.getEmptyFamilyTree()
      }

      self.familyTreeArtist = new FamilyTreeArtist(self, self.i18n)

      if(self.target){
        let waitTime = 200
        setTimeout(()=>self.selectTarget(self.target, true), waitTime)
      }
      if(savedFtree && self.ftree.nodesArray().filter(n=>n.sequencedDNA).length>0){
        self.scoreRequestHandler.requestScore(
          self.target?self.target.id:"",
          self.ftree.getLinksAsIds(), self.ftree.nodesArray().filter(n=>n.sequencedDNA).map(n=>n.id),
          self.userId, self.userSource, self.i18n.lng
        )
      }

      self.mobileBlock()
      self.IEBlock()
    });

  }

  /** Resets the family tree in a pleasant way */
  reset(transitionDuration=800, newFtree = null, transitionDurationNewTree=0, newYouNodeId = null){
    
    let self = this
    // delete all nodes except you
    this.ftree.nodesArray().forEach(n =>{
      if(n.id!=self.youNodeId){
        self.ftree.deleteNode(n.id,self.youNodeId)
    }})
    this.familyTreeArtist.nodeButtons.hide()
    // set privacy score back to 1:
    self.privacyMetric = 1
    self.target = null
    this.privacyBar.reset()
    this.backendStatus.hide()
    if(this.privacyWordedScore){
      this.privacyWordedScore.hide()
    }
    this.scoreNumberExplainer.hide()

    // smoothly transition back to original position
    this.familyTreeArtist.update(transitionDuration)

    // once this is done (after 800ms), reset to the empty ftree
    setTimeout(function(){
      if(!newFtree){
        newFtree = KinGenomicPrivacyMeter.getEmptyFamilyTree()
      }
      self.ftree = newFtree

      // if need be: update youNodeId
      if(newFtree.nodes[newYouNodeId]){
        self.youNodeId = newYouNodeId
      }
      else if(!newFtree.nodes[self.youNodeId]){
        let minIndiNodeId = newFtree.nodesArray().filter(n=>n.tag=="INDI").map(n=>n.id).sort()[0]
        self.youNodeId = minIndiNodeId
      }

      d3.select("#familytree-g").remove()
      self.familyTreeArtist.init(transitionDurationNewTree, {x:null,y:80})
      self.saveFamilyTreeToLocalStorage()
    },transitionDuration+2)
  }

  resetOptions(){
    this.options = {
      svgMaxHeight:1000,
      maxFamilyTreeDepth:5
    }
  }
  setOptions(options){
    this.resetOptions()
    this.addOptions(options)
  }
  addOptions(options){
    Object.assign(this.options, options)
  }

  saveFamilyTreeToLocalStorage(familyTreeKey="kgp-familyTree", targetKey="kgp-targetId"){
    let durationMsec = 2*3600*1000
    iframeLocalStorage.setItem(familyTreeKey,JSON.stringify(this.ftree.serialize(["sequencedDNA","lastSequencedDNA","i18nName"])), durationMsec)
    if(this.target){
      iframeLocalStorage.setItem(targetKey, this.target.id, durationMsec)
    }else{
      iframeLocalStorage.setItem(targetKey,null, durationMsec)
    }
  }

  loadFamilyTreeFromLocalStorage(familyTreeKey="kgp-familyTree", targetKey="kgp-targetId"){
    let self = this
    return Promise.all([
      iframeLocalStorage.getItem(familyTreeKey),
      iframeLocalStorage.getItem(targetKey)
    ]).then(function(values) {
      let [ftl, targetId] = values
      if(Boolean(ftl) ){
        self.ftree = FamilyTreeLayout.unserialize(ftl)
        self.target = targetId? self.ftree.nodes[targetId] : null
      }
      return self.ftree
    })
  }

  selectTarget(newTarget, forceUpdate=false){
    let self = this
    if(!newTarget.id){
      newTarget = this.ftree.nodesArray().filter(n =>n.id==newTarget)[0]
    }
    if( forceUpdate || (!this.target) || newTarget.id!=this.target.id){
      let oldTarget = self.target
      this.target = newTarget
      this.familyTreeArtist.setAsTarget(newTarget, oldTarget)
      this.scoreRequestHandler.requestScore(
        self.target?self.target.id:"",
        this.ftree.getLinksAsIds(), this.ftree.nodesArray().filter(n=>n.sequencedDNA).map(n=>n.id),
        self.userId, self.userSource, self.i18n.lng
      )
      self.saveFamilyTreeToLocalStorage()
    }
  }

  setApiUrl(api_base_url){
    this.api_base_url = api_base_url
    let separator = this.api_base_url.endsWith("/")? "" : "/"
    this.privacyScoreApiEndpoint = (this.api_base_url+ separator + "privacy-score")
    this.surveyApiEndpoint = this.api_base_url+separator+"survey"
    this.scoreJsCacheApiEndpoint = this.api_base_url+separator+"app/jscache/cache.json"
  }

  updateSvgHeight(heightFtree, transitionsDuration = 800, forceEnclosingHeightUpdate=false){
    let newSvgHeight = this.svgHeight
    if(heightFtree<this.svgOriginalHeight){ //tree height smaller than minimum
      newSvgHeight = this.svgOriginalHeight
    }
    // tree height between minimum and max
    if(heightFtree>=this.svgOriginalHeight && heightFtree<= this.options.svgMaxHeight){
      newSvgHeight = heightFtree
    }
    // tree height taller than maximum
    if(heightFtree>this.options.svgMaxHeight){
      newSvgHeight = this.options.svgMaxHeight
    }
    // if needed -> change it
    if(newSvgHeight!=this.svgHeight || forceEnclosingHeightUpdate){
      let newBodyHeight = newSvgHeight + this.nonSvgElementsHeight
      this.svgHeight = newSvgHeight
      this.svg.transition()
        .duration(transitionsDuration)
        .attr("height",newSvgHeight)
      let event = kgpSetHeightEvent(newBodyHeight, transitionsDuration)
      window.parent.postMessage(event, "*")
    }
  }

  /** Update the svg width, called on window resizes */
  updateSvgWidth(){
    this.svgWidth = this.svg.node().parentNode.clientWidth
    this.svg.attr("width",this.svgWidth)
  }

  /**
  * function correctly resizing svg, family tree and privacy bar according to svg's parent node
  */
  resizeSvg(){
    let self = this
    // remove all children of svg
    let svgNode = this.svg.node()
    while (svgNode.firstChild) {svgNode.removeChild(svgNode.firstChild);}
    // resize svg
    this.updateSvgWidth()
    // redraw tree&privacy bar
    this.privacyBar.init( self.svgWidth - this.privacyBar.width - this.privacyBar.strokeWidth, this.privacyBar.y, 0)
    if(this.privacyWordedScore){
      this.privacyWordedScore.init()
      this.privacyWordedScore.hide()
    }
    this.trashButton.init()
    this.tutorialButton.init()
    this.gedcomImport.init()

    if(this.target && self.ftree.nodesArray().filter(n=>n.sequencedDNA).length>0){
      this.privacyBar.update(this.privacyMetric, 0)
      if(this.privacyWordedScore){
        this.privacyWordedScore.update(this.privacyMetric, 0)
      }
    }else{
      this.privacyBar.reset(0)
    }
    this.familyTreeArtist.init(0)
    this.mobileBlock()
    this.IEBlock()
  }

  /** Returns the family relation to center node ("you") of target relation
   * 
   * for rexample relationToYou("father", "son") will return "brother" (the "son" of your "father" is your "brother")
  */
  relationToYou(sourceRelation,targetRelation){
    if( this.relationships[sourceRelation] && this.relationships[sourceRelation][targetRelation] ){
      return this.relationships[sourceRelation][targetRelation]
    }

    let sex = KinGenomicPrivacyMeter.getSex(targetRelation,sourceRelation)
    if(sex=="F"){return "woman"}
    if(sex=="M"){return "man"}
    return undefined
  }


  /** use by TrashButton, TrashButtonWithConfirmation */
  addSvgButton(FAunicode,gId,i18nKey,x=0,y=0,tooltipX=22,tooltipY=0,tooltipWidth=80,tooltipHeight=50){
    let button = this.svg.append("g")
        .attr("id",gId)
        .attr("transform","translate("+x+","+y+")")
        .attr("style","cursor:pointer;")
        .classed("button-with-tooltip",true)
    button.append("rect")
        .classed("svg-button",true)
        .attr("width",60) // big width to allow button to reduce tooltip hide sensitivity
        .attr("height",25)
        .attr("fill","white")
        .attr("opacity",0)

    button.append("text")
        .attr("class","fas svg-button-fas")
        .attr("y",20)
        .text(FAunicode)
    button.append("foreignObject")
        .attr("x",tooltipX)
        .attr("y",tooltipY)
        .attr("width",tooltipWidth)
        .attr("height",tooltipHeight)
        .classed("tooltip",true)
      .append("xhtml:div").append("span")
        .classed("tooltip-text",true)
        .attr(this.i18n.keyAttr,i18nKey)

    return button
  }

  /** block IE if detected, not the same as mobile as foreignObject not supported */
  IEBlock(){
    let self = this
    if(detectIE11()){
      self.svg.append("rect")
          .attr("width",self.svgWidth)
          .attr("height",self.svgHeight)
          .attr("fill","white")
          .attr("opacity","0.8")

      this.backendStatus.displayDanger("IE-block-error",10000000000)
    }
  }

  /** Block mobile browsers when detected, not the same as IE as foreignObject allows text to wrap in multiple lines on small screens. */
  mobileBlock(){
    let self = this
    if(detectMobile() && false){
      self.svg.append("rect")
          .attr("width",self.svgWidth)
          .attr("height",self.svgHeight)
          .attr("fill","white")
          .attr("opacity","0.8")
      
      self.svg.append("foreignObject")
          .attr("y",self.svgHeight/4)
          .attr("width",self.svgWidth)
          .attr("height",self.svgHeight)
        .append("xhtml:div")
          .attr("style","max:width:100%;")
          .attr("data-i18n","mobile-block")
      
      this.backendStatus.displayDanger("mobile-block",10000000000)
    }
  }

  /** Debugging: show node ids on hover */
  showNodesIds(){
    this.svg.selectAll(".nodeg")
      .append('text')
        .text(d => d.id)
        //.attr("class","node-id")
        .attr("transform","translate("+-50+",0)");
  }

  /** Creates a depth 2 dictionary to encode relationships in a family
   * 
   * index1 represents "source relation" and index2 "target relation"
   * It is not complete, hence relationToYou(source, target) should be used to find a relation*/
  static getRelationships(){
    // handling family relationships
    let relationships= {
      "grandmother":{
        "partner":"grandfather",
        "daughter":"aunt",
        "son":"uncle"
      },
      "mother":{
        "father":"grandfather",
        "mother":"grandmother",
        "partner":"father",
        "daughter":"sister",
        "son":"brother"
      },
      "motherinlaw":{
        "partner":"fatherinlaw",
        "daughter":"sisterinlaw",
        "son":"brotherinlaw",
      },
      "aunt":{
        "partner":"uncleinlaw",
        "daughter":"cousinf",
        "son":"cousinm"
      },
      "auntinlaw":{
        "partner":"uncle",
        "daughter":"cousinf",
        "son":"cousinm"
      },
      "you":{
        "father":"father",
        "mother":"mother",
        "partner":"partner",
        "daughter":"daughter",
        "son":"son"
      },
      "partner":{
        "father":"fatherinlaw",
        "mother":"motherinlaw",
        "partner":"you",
        "daughter":"daughter",
        "son":"son"
      },
      "sister":{
        "father":"father",
        "mother":"mother",
        "partner":"brotherinlaw",
        "daughter":"niece",
        "son":"nephew"
      },
      "sisterinlaw":{
        "daughter":"niece",
        "son":"nephew"
      },
      "daughter":{
        "father":"partner",
        "mother":"partner",
        "partner":"soninlaw",
        "daughter":"granddaughter",
        "son":"grandson"
      },
      "daughterinlaw":{
        "partner":"son",
        "daughter":"granddaughter",
        "son":"grandson"
      },
      "granddaughter":{
        "father":"soninlaw",
        "mother":"daughterinlaw",
      }
    }
    //translating for males
    let relationshipsEquiv= [
    ["grandfather","grandmother","grandmother"],
    ["father","mother","mother"],
    ["fatherinlaw","motherinlaw","motherinlaw"],
    ["uncle","aunt","auntinlaw"],
    ["uncleinlaw","auntinlaw","aunt"],
    ["brother","sister","sisterinlaw"],
    ["brotherinlaw","sisterinlaw","woman"],
    ["son","daughter","daughterinlaw"],
    ["soninlaw","daughterinlaw","daughter"],
    ["grandson","granddaughter","woman"],
    ]
    relationshipsEquiv.forEach(tuple=>{
      relationships[tuple[0]] = JSON.parse(JSON.stringify(relationships[tuple[1]]))
      relationships[tuple[0]]["partner"] = tuple[2]
    })
    return relationships
  }

  static getEmptyFamilyTree(){
    let emptyFamilyTree = {
      "class": "FamilyTreeLayout",
      "nodes": [
        {
          "id": "@I1@",
          "sex": "F",
          "tag": "INDI",
          "fams": [],
          "famc": null,
          "chil": [],
          "wife": null,
          "husb": null,
          "sequencedDNA": false,
          "i18nName": "you"
        }
      ],
      "properties": [
        "id", "name", "sex", "tag", "fams", "famc", "chil", "wife",
        "husb", "sequencedDNA", "lastSequencedDNA", "i18nName"
      ],
      "centerNodeId": 0
    }
    return FamilyTreeLayout.unserialize(JSON.stringify(emptyFamilyTree))
  }

  /** getSex() returns "F" if given relation is female, "M" if male */
  static getSex(relation,partnerRelation=false){
    let males = ["man","grandfather", "father", "fatherinlaw", "uncle", "uncleinlaw", "brother", "brotherinlaw","cousinm", "son","soninlaw","nephew","grandson"]
    let females = ["woman","grandmother", "mother", "motherinlaw", "aunt","auntinlaw", "sister", "sisterinlaw","cousinf", "daughter","daughterinlaw","niece","granddaughter"]
    if( males.findIndex(r=>r==relation)!=-1 ){return "M"}
    if( females.findIndex(r=>r==relation)!=-1 ){return "F"}
    if( males.findIndex(r=>r==partnerRelation)!=-1 ){return "F"}
    if( females.findIndex(r=>r==partnerRelation)!=-1 ){return "M"}
  
    return undefined
  }
}



