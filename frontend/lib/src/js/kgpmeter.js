import {kgpSetLanguageEvent, kgpSetSourceEvent, kgpSetIframeMaxDimensionEvent} from "../../../app/src/js/KgpIframeInterface.js"


class KgpMeter{
  constructor(divId, apiUrl, lang, maxHeight){
    this.divId = divId
    this.apiUrl = apiUrl
    this.lang = lang
    let self = this

    this.div = document.getElementById(divId)
    this.div.innerHTML = "<iframe src='{src}/app/'></iframe>".replace("{src}",this.apiUrl)
    this.iframe = this.div.getElementsByTagName("iframe")[0]
    this.iframe.setAttribute("style",'border:none; width:100%; height:100%;')

    console.log("this.lang", self.lang)

    // ======== send data to iframe ========
    this.iframe.contentWindow.addEventListener("load",()=>{
      setTimeout(() => {
        console.log("self.iframe.contentWindow LOADED!!")
        // set language
        let setLanguageEvent = kgpSetLanguageEvent(self.lang)
        self.iframe.contentDocument.dispatchEvent(setLanguageEvent)
        // set source
        let setSourceEvent = kgpSetSourceEvent(document.URL)
        self.iframe.contentDocument.dispatchEvent(setSourceEvent)
        // set max height
        let setIframeMaxDimensionEvent = kgpSetIframeMaxDimensionEvent(maxHeight)
        self.iframe.contentDocument.dispatchEvent(setIframeMaxDimensionEvent)
        console.log("KgpMeter: downwards events sent")
      }, 500);
    })
    // =================================== TEST iframe to parent communication and vice-versa ===================================
    console.log("huhuhaha")
    // parent to iframe:
    setTimeout(() => {
      var data = { orientation: 'down' }
      var event = new CustomEvent('myCustomEvent', { detail: data })
      self.iframe.contentDocument.dispatchEvent(event)
    }, 500);

    // iframe to parent
    function handleEvent(e) {
      console.log("Communication kgp-iframe to kgpmeter success! detail:", e.detail) // outputs: {foo: 'bar'}
    }
    window.document.addEventListener('myCustomEvent', handleEvent, false)
  }
}
// export KgpMeter to glboal namespace
window.KgpMeter = KgpMeter
    