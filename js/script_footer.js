"use strict";
(function(e){
    var t={
        languages:{
            en:{
                lang:"EN",
                content:{
                    copyright:"Copyright. All rights reserved.",
                    links:[
                        '<a href="terms.html" target="_blank">Terms & Conditions</a><span> | </span>','<a href="privacy_ro.html" target="_blank">Privacy Policy</a><span> | </span>','<a class="footer__feedback-btn" href="feedback.html" target="_blank">Feedback</a>'
                    ],
                    copyname:"<span>&copy;&nbsp;TacticPants</span>",
                    confirmMassage:'By clicking the «order» button you confirm that you have read <a href="privacy_ro.html" target="_blank">Privacy Policy</a> and give your consent to the procession of your personal data.'
                }
            }
        },
        getLang:function(e){
            for(var t="",n=document.getElementsByTagName("script"),i=0;i<n.length;i++)
                if(n[i].src.indexOf(e)>-1){
                    var a=n[i].src;
                    t=a.match(/country_code=([A-Za-z]+)/)
                }
            return t?t[1].toUpperCase():"EN"
        },
        getYear:function(e){ return(new Date).toLocaleString(e||"EN",{year:"numeric"}).replace(/\D/gi,"") },
        getStyle:function(e){ return window.getComputedStyle?getComputedStyle(e,""):e.currentStyle },
        createElement:function(t,n){
            t=t||"DIV",n=n||"default-class";
            var i=e.createElement(t);
            return i.className=n,i
        },
        appendElement:function(t,n){ var i=e.querySelector(n); i.appendChild(t) },
        showElement:function(e){ e.style.display="block" },
        hideElement:function(e){ e.style.display="none" },
        init:function(){
            var t=this.appendElement,
                n=(this.getStyle,this.getLang("script_footer")),  i=null,a=this.languages,
                r=this.createElement("DIV","footer"),o=this.createElement("DIV","footer__list"),c=this.createElement("DIV","footer__t"),
                l=this.createElement("DIV","footer__copyright"),A=this.createElement("P","footer__cm");
            for(var s in t(r,"BODY"),  r.innerHTML='<div class="footer__in"></div>',t(l,".footer__in"),t(o,".footer__in"),t(c,".footer__in"),t(A,".footer__in"),a) a[s].lang===n&&(i=a[s].content);
            for(var g in i||(i=a.en.content),i){
                if("copyright"===g){ var d=i[g]; l.innerHTML=this.getYear(n)+" "+d }
                if("links"===g){ var h=i[g].join("");o.innerHTML=h }
                if("copyname"===g){var p=i[g];c.innerHTML=p}
                if("confirmMassage"===g){var m=i[g];A.innerHTML=m}
            }
            var y=e.querySelectorAll(".footer a"),I=e.querySelector(".footer__feedback-btn");
            o.style.cssText="padding:0 0 20px;margin:13px 0 0;font:inherit;text-align: center;",
                r.style.cssText="font:normal 400 16px/1 Helvetica,Arial,sans-serif;max-width:100%;width:100%;text-align:center;color:#474747;padding:40px 0;margin:0 auto;background:#fff;direction:ltr;text-transform:none;height:auto;text-indent:initial;",
                y.forEach(function(e){e.style.cssText="display:inline-block;vertical-align:bottom;padding:0 5px;font:inherit;color:inherit;text-decoration:none;"}),
                I.style.cssText='display:inline-block;text-align:center;font:inherit;color:inherit;text-decoration:none;padding-left:27px;cursor:pointer;background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAMCAYAAAHzImYpAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTExIDc5LjE1ODMyNSwgMjAxNS8wOS8xMC0wMToxMDoyMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo0NmFlN2NhOS0yMDM3LWJkNDYtOTlmMi0yMjI1ZjJjZDM4YmYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6ODU0RUNENzAxRUUwMTFFOEIyODRFMEU4NzMyRTQ4NEQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ODU0RUNENkYxRUUwMTFFOEIyODRFMEU4NzMyRTQ4NEQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OTA3NzI0NjctNmFmMy00MGFjLWIyNDktNjlkNmQ4NTcyZDhlIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6YTBhMTc2ZDgtNjRiNC04MTRhLWI5ZjctMTQxNjY3YjYzMTcyIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+89GJJAAAAVpJREFUeNpibGqbPJuBgeEvEDOzAIkXQPwciCUBAogRKDMDyGAAiWaAGAABxAhVex6IpwFxLhDrAQQQXBkMgJQvA+JDUL4dE5CYgKRgAkAAgbTcBTIMgfgTAybgA9kB0rUfqqAOiOdDJRcAcQ1UfD/ILhcgZkNSIAvEtVA2SNwFIIBA1vUDGZwM2MF3kCkyQByKQ8EaJqjkJSySV4E4hAXK0QPiz0AsD+U/AmIeWKD4A7EyEPMCsQ4Q/4dKFgHxXZCCc1AM8sFHJN+sBjEAAgzki3tA2gbqd0EG4sE7IOYH4iNM0LhxA+KjQKwKxI+JwBpAfAKqbxnIEAloTOgD8WWooT04bAfF/XJostGF6pMAGcIEVSANxCuB+CcQVwNxKRDvBOJGIN4O5ZeBIgqIV0HVgwATKNDMgHgdNE04IdnaDcXoIAlKawHxZCBWAxlyHBpveQykgwdA/BYAbmlSeKHjCzAAAAAASUVORK5CYII=");background-position:2px 50%;background-repeat:no-repeat;',
                A.style.cssText="padding:0 5px 0 5px;margin:20px 0 0;font:inherit;color:inherit;text-align:center";
            var f=function(e){ var t=e.target;"A"===t.tagName&&(t.style.textDecoration="underline") },
                b=function(e){ var t=e.target;"A"===t.tagName&&(t.style.textDecoration="none") };
            r.addEventListener("mouseover",f),r.addEventListener("mouseout",b)
        }
    };
    t.init()
})(document);

