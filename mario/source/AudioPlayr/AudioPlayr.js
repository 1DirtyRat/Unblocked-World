function playCurrentThemeHurry(e){AudioPlayer.playTheme("Hurry "+(e||area.theme))}function AudioPlayr(e){"use strict";var t,n,r,u,a,i,o,s,c,d,l=this.play=function(e){var n=r[e];if(!n){if(!(n=t[e]))return n;r[e]=n}return n.name_raw=e,f(n),n.volume=!a,n.play(),n.used++||n.addEventListener("ended",(function(){!function(e,t){r[t]&&delete r[t]}(0,e)})),n};function f(e){e&&e.pause&&(e.pause(),e.readyState&&(e.currentTime=0))}function m(e,t){var r,u,a=document.createElement("Audio");for(u in h(a,d),n)r=n[u],a.appendChild(h(document.createElement("Source"),{type:"audio/"+r,src:i+"/"+t+"/"+r+"/"+e+"."+r}));return a.play(),a}function h(e,t){var n,r;for(r in t)"object"==typeof(n=t[r])?(e[r]||(e[r]={}),h(e[r],n)):e[r]=n;return e}this.playLocal=function(e,t){var n,r=l(e);if(!r)return r;switch(s.constructor){case Function:n=s(t);break;case Number:n=s;break;default:n=Number(n)||1}return r.volume=r.volume_real=n=0,r},this.playTheme=function(e,t,n){if(n=void 0===n||n,!e)switch(c.constructor){case Function:e=c();break;case String:e=c}(a=u)&&(f(a),u=void 0,delete r[a.name_raw]);var a=u=l(e);return a.loop=n,t||(a.used=!1),1==a.used&&a.addEventListener("ended",this.playTheme),a},this.addEventListener=function(e,t,n){var u=r[e];u&&u.addEventListenever(t,n)},this.addEventImmediate=function(e,t,n){var u=r[e];u&&!u.paused?u.addEventListener(t,n):n()},this.toggleMute=function(){for(var e in a=!a,r)r[e].volume=a?0:r[e].volume_real||1;o&&(localStorage[o]=a)},this.pause=function(){for(var e in r)r[e]&&r[e].pause()},this.resume=function(){for(var e in r)r[e]&&r[e].play()},this.pauseTheme=function(){u&&u.pause()},this.resumeTheme=function(){u&&u.play()},this.clear=function(){this.pause(),r={},this.theme=void 0},this.getLibrary=function(){return t},this.getSounds=function(){return r},function(e){t=e.library||{},n=e.filetypes||["mp3","ogg"],a=e.muted||!1,i=e.directory||"",o=e.localStorageMuted||"",s=e.getVolumeLocal||1,c=e.getThemeDefault||"Theme";var u=e.soundSettings||{};d=e.soundSettings||{preload:u.preload||"auto",used:0,volume:0},r={},o&&(a=localStorage[o]),function(){var e,n,r,u;for(r in t)for(u in e=t[r])n=e[u],t[n]=m(n,r)}()}(e||{})}