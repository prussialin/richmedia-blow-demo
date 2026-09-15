
'use strict';
const $ = id => document.getElementById(id);
const library=[
 ['fool','The Fool'],['magician','The Magician'],['priestess','The High Priestess'],['empress','The Empress'],['emperor','The Emperor'],['hierophant','The Hierophant'],['lovers','The Lovers'],['chariot','The Chariot'],['strength','Strength'],['hermit','The Hermit'],['wheel','Wheel of Fortune'],['justice','Justice'],['hanged-man','The Hanged Man'],['death','Death'],['temperance','Temperance'],['devil','The Devil'],['tower','The Tower'],['star','The Star'],['moon','The Moon'],['sun','The Sun'],['judgement','Judgement'],['world','The World']
].map(([name,title])=>({name,title}));
const readings={
 fool:{up:['新的旅程正等著你，允許好奇心先走一步。','先做小而真實的嘗試，不必等到萬事俱備。'],rev:['你想出發，但還有一部分在逃避準備。','把衝動寫下來，替它補上一個可執行的下一步。']},
 magician:{up:['你已經擁有啟動改變所需的工具。','挑一件最重要的事，今天就親手完成第一步。'],rev:['力量被分散，或有人用漂亮話掩蓋空白。','收回注意力，確認你的資源真正用在哪裡。']},
 priestess:{up:['答案正在安靜地浮現，先相信你的感受。','少問外界一個人，多留十分鐘聽自己。'],rev:['你可能把直覺壓得太低，或被未說出口的事困住。','暫緩判斷，找出那個你一直沒有承認的感受。']},
 empress:{up:['你正在孕育值得被照料的成果。','把時間留給滋養身心與關係，成果會跟著長大。'],rev:['照顧他人太多，讓自己的需求被擱置。','今天先替自己安排一件能恢復能量的事。']},
 emperor:{up:['秩序與界線能把你的願望落實。','訂下規則、時程與責任，然後堅定執行。'],rev:['控制欲或僵化的規則正在耗損你。','保留原則，但讓做法有一點彈性。']},
 hierophant:{up:['傳統、學習與可靠的指引正在支持你。','向值得信任的老師或制度請教，不必獨自摸索。'],rev:['舊規則未必適合你現在的位置。','尊重經驗，但允許自己建立新的做法。']},
 lovers:{up:['這是一張關於真誠選擇與契合的牌。','先對齊價值觀，再決定是否投入。'],rev:['關係或選擇裡有未被正視的不一致。','把真正的需求說清楚，不要只維持表面的和平。']},
 chariot:{up:['你正在收回方向盤，前進需要專注。','選定一條路，暫時停止替所有可能性開門。'],rev:['力量拉扯過多，讓你原地打轉。','先穩住節奏，再處理下一個目標。']},
 strength:{up:['真正的力量來自溫柔而持續的自持。','用耐心處理眼前的難題，不需要硬碰硬。'],rev:['你對自己太嚴苛，或把疲憊當成軟弱。','先休息，再回來處理；恢復也是力量。']},
 hermit:{up:['獨處能讓你重新看見真正的方向。','留一段無干擾時間，整理你的答案。'],rev:['你可能躲得太久，錯過了必要的連結。','帶著新的理解，找一個可信的人聊聊。']},
 wheel:{up:['局勢正在轉動，新的時機已經靠近。','保持彈性，準備接住突如其來的機會。'],rev:['你抗拒變化，或一直重複同一個循環。','找出能改變循環的一個小習慣，今天就開始。']},
 justice:{up:['真相、責任與公平會帶來清晰答案。','依事實做決定，讓承諾與行動一致。'],rev:['某個判斷失衡了，或你還沒看見完整事實。','補齊資訊，再替自己做公平的選擇。']},
 'hanged-man':{up:['暫停不是停滯，它讓你看見不同角度。','先放下立刻解決的壓力，讓答案沉澱。'],rev:['拖延已經不再帶來新的洞見。','為等待設一個期限，時間到就採取行動。']},
 death:{up:['一個階段正在結束，好讓新的你騰出位置。','主動整理、告別或結束一件已經完成使命的事。'],rev:['你仍抓著已經不適合的形式。','用小小的告別儀式，為改變留出空間。']},
 temperance:{up:['平衡與調和正在慢慢形成。','別急著極端選邊，試著把兩種需求放在同一張表上。'],rev:['節奏失衡讓你疲憊，也讓判斷變得急躁。','調整作息與步伐，先回到穩定。']},
 devil:{up:['你正看見一段執著、恐懼或慣性的束縛。','問自己：這件事真的困住我，還是我還沒選擇離開？'],rev:['鬆綁已經開始，你正在拿回選擇權。','把一個不再服務你的習慣減少一點點。']},
 tower:{up:['舊結構正在瓦解，真相會讓路變得更清楚。','先保護重要的部分，再重建真正需要的基礎。'],rev:['你已經感到警訊，卻一直延後調整。','主動修正一個小裂縫，別等它變成大問題。']},
 star:{up:['希望正在回來，你可以再次相信未來。','照著讓你感到平靜的方向，走一小步就好。'],rev:['你暫時忘了自己的光，但它沒有消失。','回顧一件曾經做得好的事，重新建立信心。']},
 moon:{up:['此刻不必急著定論，直覺與夢境會帶來線索。','把不確定列下來，先觀察而非急著解釋。'],rev:['迷霧正在散去，被壓住的真相逐漸可見。','核對事實，讓想像回到它該在的位置。']},
 sun:{up:['清晰、活力與好消息正在靠近。','讓自己被看見，分享你真正感到喜悅的事。'],rev:['光還在，只是你太累而感受不到。','減少一件消耗，替快樂騰出空間。']},
 judgement:{up:['你已經準備好回應內心真正的召喚。','回頭看經驗帶來的課題，然後做出新的選擇。'],rev:['你對自己下了太早或太重的判決。','放下自責，允許自己重新回答這個問題。']},
 world:{up:['一個循環圓滿完成，你準備好進入下一章。','好好慶祝完成，再用清楚的心情規劃新開始。'],rev:['收尾尚未完成，讓你無法真正往前。','完成最後一個小細節，替這段旅程畫上句點。']}
};
const DRAW_COUNT=10;
const cards=Array.from({length:DRAW_COUNT},(_,i)=>{
 const el=document.createElement('div');el.className='card';
 const panels=Array.from({length:10},(_,j)=>{const panel=document.createElement('div');panel.className='paper-panel';panel.innerHTML='<div class="paper-face"><div class="paper-print" style="left:'+(-j*16)+'px"></div></div><div class="paper-face paper-back"><div class="back-print" style="left:'+(-j*16)+'px"></div></div>';el.appendChild(panel);return panel;});
 $('stage').appendChild(el);return {el,i,panels,prints:panels.map(panel=>panel.querySelector('.paper-print')),launched:false,slot:i,definition:null};
});
function shuffle(list){const shuffled=[...list];for(let i=shuffled.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[shuffled[i],shuffled[j]]=[shuffled[j],shuffled[i]];}return shuffled;}
function setCard(c,definition){c.definition=definition;c.orientation=Math.random()<.5?'up':'rev';c.el.setAttribute('aria-label',definition.title);c.prints.forEach((print,j)=>{print.style.left=(-j*16)+'px';print.style.backgroundImage='url(assets/'+definition.name+'.webp)';});}
function shuffleDeck(){const drawn=shuffle(library).slice(0,DRAW_COUNT);shuffle(cards).forEach((c,slot)=>{c.slot=slot;setCard(c,drawn[slot]);});}
function paperPose(bend){let x=0,z=0;return Array.from({length:10},(_,j)=>{const angle=bend*(j/9-.5),rad=angle*Math.PI/180;const pose={transform:'translate3d('+x+'px,0,'+z+'px) rotateY('+angle+'deg)'};x+=16*Math.cos(rad);z-=16*Math.sin(rad);return pose;});}
function bendPaper(c,v,duration){const amount=(Math.random()<.5?-1:1)*(51+v*24);const stages=[[0,0],[.14,.22],[.27,1],[.43,1],[.57,.35],[.74,-.12],[1,0]];const poses=stages.map(([offset,strength])=>paperPose(reduced?0:amount*strength));c.panels.forEach((panel,j)=>panel.animate(stages.map(([offset],k)=>({...poses[k][j],offset})),{duration,easing:'ease-in-out',fill:'forwards'}));}

let stream=null,ctx=null,analyser=null,data=null,frame=0,session=0,running=false,flight=0,restore=0,last=0,energy=0,noise=.006,calUntil=0,samples=[],smooth=0,previous=0,previewTimer=0;
const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
function stack(){clearInterval(previewTimer);clearTimeout(restore);shuffleDeck();$('reading').hidden=true;cards.forEach(c=>{c.el.getAnimations({subtree:true}).forEach(a=>a.cancel());c.panels.forEach((panel,j)=>{panel.style.transform='translate3d('+(j*16)+'px,0,0)';});c.launched=false;c.el.style.opacity='1';c.el.style.zIndex=String(c.slot);const angle=(c.slot-2)*4+(c.slot===0&&c.orientation==='rev'?180:0);c.el.style.transform='translate3d('+(c.slot-2)*4+'px,'+(4-c.slot)*-3+'px,0) rotate('+angle+'deg)';});energy=0;flight=0;$('remaining').textContent=cards.length+' / '+cards.length;}
function wind(v){v=Math.max(0,Math.min(1,v));const n=Math.round(v*100);$('bar').style.width=n+'%';$('power').textContent=n+'%';$('meter').setAttribute('aria-valuenow',n);}
function revealFinalCard(){const final=cards.find(c=>!c.launched);if(!final)return;const reverse=final.orientation==='rev',read=readings[final.definition.name][final.orientation];final.el.style.zIndex='40';final.el.animate([{transform:final.el.style.transform},{transform:'translate3d(0,-14px,70px) rotateZ('+((final.slot-2)*4+(reverse?180:0))+'deg)'}],{duration:650,easing:'cubic-bezier(.2,.75,.3,1)',fill:'forwards'});$('reading-title').textContent=final.definition.title;$('reading-orientation').textContent=reverse?'REVERSED · 逆位':'UPRIGHT · 正位';$('reading-meaning').textContent=read[0];$('reading-detail').textContent='這張牌以'+(reverse?'逆位':'正位')+'落在你面前，請把它當成整理當下感受的線索。回到你最在意的一件事，給自己一點安靜的時間，再選擇一個今天就能完成的小行動。';$('reading-advice').textContent=read[1];$('reading').hidden=false;}
function launch(v){
 if(flight>=cards.length-1){$('status').textContent='下滑看結果';return;}
 const c=[...cards].filter(c=>!c.launched).sort((a,b)=>b.slot-a.slot)[0];if(!c)return;c.launched=true;flight++;$('remaining').textContent=(cards.length-flight)+' / '+cards.length;
 const duration=reduced?220:2050-v*120;bendPaper(c,v,duration);const start=c.el.style.transform;
 const side=c.i%2?1:-1,dx=side*(130+Math.random()*130)*(.7+v),turn=side*(120+v*220),sway=side*(7+Math.random()*3);
 const airX=dx*(1.25+Math.random()*.45),airY=-300-Math.random()*190,faceTurn=Math.random()<.5?0:180;
 c.el.style.zIndex=String(20+flight);
 const anim=c.el.animate([
  {transform:start,opacity:1},
  {transform:start+' translateY(-7px) rotateX(-5deg) rotateY('+sway+'deg)',opacity:1,offset:.14},
  {transform:start+' translateY(-12px) rotateX(-9deg) rotateY('+sway+'deg)',opacity:1,offset:.32},
  {transform:'translate3d('+airX*.42+'px,'+airY*.28+'px,150px) rotateX(55deg) rotateY('+(faceTurn+55)+'deg) rotateZ('+turn*.28+'deg)',opacity:1,offset:.58},
  {transform:'translate3d('+airX+'px,'+airY+'px,210px) rotateX(150deg) rotateY('+(faceTurn+180)+'deg) rotateZ('+turn+'deg)',opacity:0,offset:1}
 ],{duration,easing:'cubic-bezier(.2,.65,.4,1)',fill:'forwards'});
 anim.onfinish=()=>{c.el.style.opacity='0';};
 if(flight===cards.length-1){$('status').textContent='下滑看結果';setTimeout(()=>{if(flight===cards.length-1)revealFinalCard();},900);}
}
function stop(message){session++;running=false;cancelAnimationFrame(frame);clearInterval(previewTimer);if(stream)stream.getTracks().forEach(t=>t.stop());stream=null;if(ctx)ctx.close().catch(()=>{});ctx=null;analyser=null;data=null;wind(0);$('mic').disabled=false;$('mic').classList.remove('mic-active');$('mic').classList.add('mic-pulse');$('mic').setAttribute('aria-pressed','false');if(message)$('status').textContent=message;}
function tick(now){if(!running||!analyser)return;const dt=Math.min(.05,(now-previous)/1000||.016);previous=now;analyser.getByteTimeDomainData(data);let sum=0;for(const b of data){const x=(b-128)/128;sum+=x*x;}const rms=Math.sqrt(sum/data.length);if(now<calUntil){samples.push(rms);wind(0);}else{if(samples.length){samples.sort((a,b)=>a-b);noise=Math.max(.003,samples[Math.floor(samples.length*.6)]);samples=[];$('status').textContent='準備好了，對著麥克風輕輕吹氣。';}const v=Math.min(1,Math.max(0,rms-noise*1.8-.008)*3*7);smooth+=(v-smooth)*.3;wind(smooth);energy=smooth>.12?energy+smooth*dt:Math.max(0,energy-dt);if(energy>.055&&now-last>140){launch(smooth);last=now;energy=0;}}frame=requestAnimationFrame(tick);}
$('mic').addEventListener('click',async()=>{if(running){stop('麥克風已關閉。');return;}if(!window.isSecureContext||!navigator.mediaDevices?.getUserMedia){$('status').textContent='請透過 HTTPS 網址，用 Safari 或 Chrome 開啟。';return;}const token=++session;$('mic').disabled=true;$('status').textContent='請允許麥克風存取…';try{const Audio=window.AudioContext||window.webkitAudioContext;ctx=new Audio();await ctx.resume();const obtained=await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:false,noiseSuppression:false,autoGainControl:false},video:false});if(token!==session){obtained.getTracks().forEach(t=>t.stop());return;}stream=obtained;analyser=ctx.createAnalyser();analyser.fftSize=1024;ctx.createMediaStreamSource(stream).connect(analyser);data=new Uint8Array(analyser.fftSize);running=true;samples=[];smooth=0;calUntil=performance.now()+1500;previous=performance.now();stack();$('mic').classList.remove('mic-pulse');$('mic').classList.add('mic-active');$('mic').setAttribute('aria-pressed','true');$('mic').disabled=false;$('status').textContent='校正環境音中，請安靜 1.5 秒…';stream.getAudioTracks()[0].onended=()=>{if(running)stop('麥克風連線已中斷，請重新開啟。');};frame=requestAnimationFrame(tick);}catch(e){if(token!==session)return;const msg=e.name==='NotAllowedError'?'麥克風未獲允許。請在瀏覽器網站設定允許後重試。':e.name==='NotFoundError'?'找不到麥克風，可先點「試吹一下」。':'無法啟動麥克風，請關閉其他錄音程式後重試。';stop(msg);}});
function simulate(){
 clearInterval(previewTimer); if(flight>=cards.length-1)stack();
 $('status').textContent='讓氣流，揭開命運的一角。';
 wind(.8);launch(.8);
 previewTimer=setTimeout(()=>wind(0),520);
}
$('test').addEventListener('click',simulate);
$('stage').addEventListener('click',simulate);
$('stage').addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();simulate();}});
$('reset').addEventListener('click',()=>{stack();$('status').textContent=running?'牌已疊好，繼續吹氣吧。':'牌已疊好，可以再試一次。';});
document.addEventListener('visibilitychange',()=>{if(document.hidden)stop('已暫停麥克風，回來後請重新開啟。');});window.addEventListener('pagehide',()=>stop());stack();
