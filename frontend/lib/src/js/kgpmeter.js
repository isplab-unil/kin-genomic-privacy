import {kgpSetLanguageEvent, kgpSetSourceEvent, kgpSetIframeMaxDimensionEvent, kgpLaunchTutorialEvent} from "../../../app/src/js/KgpIframeInterface.js"
import {IframeCookieActionListener, IframeLocalStorageActionListener} from "../../../app/src/js/lib/iframeCookiesLocalStorage.js"


class KgpMeter{
  constructor(divId, apiUrl, lng, maxHeight){
    console.log("HOLAAAA")
    let self = this
    this.divId = divId
    this.div = document.getElementById(divId)

    this.apiUrl = apiUrl
    if(!this.apiUrl){
      throw "KgpMeter error: API url missing. API url provided: "+apiUrl
    }
    let urlSeparator = this.apiUrl.endsWith("/")? "" : "/"
    this.lng = lng? lng : "en" // default
    this.maxHeight = maxHeight? maxHeight : 2000 // default
    this.height = 0

    this.div.innerHTML = "<iframe src='{src}app/'></iframe>".replace("{src}",this.apiUrl+urlSeparator)
    this.iframe = this.div.getElementsByTagName("iframe")[0]
    this.iframe.setAttribute("style",'border:none; width:100%; height:100%')
    this.cookieActionListener = new IframeCookieActionListener(this.iframe, "KgpMeter")
    this.localStorageActionListener = new IframeLocalStorageActionListener(this.iframe, "KgpMeter")
    this.setDivStyle(this.div.scrollHeight+"px")

    // ======== send data to iframe ========

    this.iframe.onload = ()=>{
      setTimeout(() => {
        // set language
        self.setLanguage(self.lng)
        // set source
        self.setSource(document.URL)
        // set max height
        self.setMaxheight(self.maxHeight)
      }, 50);
    }

    // ======== handle height updates ========
    function dispatchKgpIframeMessage(e) {
      console.log("kgpmeter dispatchKgpIframeMessage() e.source==this.iframe.contentWindow: ", e.source==self.iframe.contentWindow, ", e:", e)
      if( e.source==self.iframe.contentWindow &&  e.data.type){
        switch(e.data.type){
          case "KgpSetHeightEvent":
            self.setHeight(e.data.height, e.data.transitionDuration)
            break
          default:
            //console.log("kgpmeter.js: unknown type of message received from KGPMeter iFrame:", e)
        }
      }
    }
    window.addEventListener('message', dispatchKgpIframeMessage, false)
  }

  setLanguage(lng){
    this.lng = lng
    let setLanguageEvent = kgpSetLanguageEvent(lng)
    this.iframe.contentWindow.postMessage(setLanguageEvent, this.apiUrl)
  }
  setSource(source){
    let setSourceEvent = kgpSetSourceEvent(source)
    this.iframe.contentWindow.postMessage(setSourceEvent, this.apiUrl)
  }
  setMaxheight(maxHeight){
    this.maxHeight = maxHeight
    let setIframeMaxDimensionEvent = kgpSetIframeMaxDimensionEvent(maxHeight)
    this.iframe.contentWindow.postMessage(setIframeMaxDimensionEvent, this.apiUrl)
  }
  launchTutorial(){
    this.iframe.contentWindow.postMessage(kgpLaunchTutorialEvent(), this.apiUrl)
  }

  setHeight(height, transitionDuration){
    transitionDuration = transitionDuration * (height>this.height? 0.9:2) / 1000
    this.setDivStyle(this.height+"px", height+"px", transitionDuration)
    this.height = height
  }
  setDivStyle(oldHeightstr, heightStr, transitionDuration){
    let divStyle = 'border:none; width:100%; height: '+oldHeightstr+'; transition-property: height; transition-duration: '+transitionDuration+'s; transition-timing-function: ease;'
    this.div.setAttribute("style",divStyle)
    divStyle = 'border:none; width:100%; height: '+heightStr+'; transition-property: height; transition-duration: '+transitionDuration+'s; transition-timing-function: ease;'
    this.div.setAttribute("style",divStyle)
  }
}
// export KgpMeter to global namespace
window.KgpMeter = KgpMeter

// create default kgpmeter if div#kin-genomic-privacy-meter exists
let defaultKgpmeterDivId = "kin-genomic-privacy-meter"
let div = document.getElementById(defaultKgpmeterDivId)
let kgpmeter
if(div){
  let apiUrl = div.getAttribute("data-kgpmeter-api-url")
  apiUrl = apiUrl? apiUrl : "https://santeperso.unil.ch/api-dev/"
  let lng = div.getAttribute("data-kgpmeter-lng")
  let maxHeight = div.getAttribute("data-kgpmeter-max-height")
  kgpmeter = new KgpMeter(defaultKgpmeterDivId, apiUrl, lng, maxHeight)
  window.kgpmeter = kgpmeter
}
    