function resetData(){var e;(e=document.getElementById("data_display"))&&body.removeChild(e),window.data||(window.data=new Data)}function Data(){this.playerpower=1,this.traveled=this.traveledold=0,this.scorelevs=[100,200,400,500,800,1e3,2e3,4e3,5e3,8e3],this.score=new DataObject(0,6,"SCORE"),this.time=new DataObject(350,3,"TIME"),this.world=new DataObject(0,0,"WORLD"),this.coins=new DataObject(0,0,"COINS"),this.lives=new DataObject(3,1,"LIVES"),this.time.dir=-1,this.scoreold=0}function DataObject(e,a,t){this.amount=e,this.length=a,this.name=t,this.element=createElement("td",{className:"indisplay"})}function setDataDisplay(){var e=createElement("table",{id:"data_display",className:"display",style:{width:gamescreen.right+14+"px"}}),a=["score","coins","world","time","lives"];for(var t in body.appendChild(e),data.display=e,a)e.appendChild(data[a[t]].element),updateDataElement(data[a[t]]);body.appendChild(data.display)}function clearDataDisplay(){body.removeChild(data_display)}function toggleLuigi(){window.luigi=!window.luigi,localStorage.luigi=window.luigi,window.player.title=window.luigi?"Luigi":"Mario",setThingSprite(window.player)}function startDataTime(){TimeHandler.addEventInterval(updateDataTime,25,1/0,data.time)}function updateDataTime(e){1!=e.dir&&(100==e.amount?playCurrentThemeHurry():e.amount<=0&&killPlayer(player,!0)),notime||(map.time=e.amount+=e.dir,updateDataElement(e))}function updateDataElement(e){var a=e.name+"<br />"+("Infinity"==e.amount?"Inf":e.amount);e.element.innerHTML=a,e.element.style.width=""}function score(e,a,t){if(!(a<=0)){if(1==arguments.length)return score(player,e);if(localStorage.highscore=max(localStorage.highscore,data.score.amount+=a),t){var i=addText(a,e.left,e.top);i.yvel=-unitsized4,TimeHandler.addEvent(killScore,49,i)}for(;data.score>1e4;)gainLife(),data.score.amount=data.score.amount%1e4;updateDataElement(data.score)}}function killScore(e){body.contains(e)&&body.removeChild(e),killNormal(e),deleteThing(e,texts,texts.indexOf(e))}function findScore(e){return e<data.scorelevs.length?data.scorelevs[e]:(gainLife(),-1)}function gainLife(e,a){data.lives.amount+="number"==typeof e?e:1,a||AudioPlayer.play("Gain Life"),updateDataElement(data.lives)}function setLives(e){data.lives.amount=Number(e),updateDataElement(data.lives)}function storePlayerStats(){data.playerpower=player.power}function clearPlayerStats(){data.playerpower=player.power=1}