class e{#e;#t;constructor(e,t){this.#e=e,this.#t=t}getUsername(){return this.#e}getScore(){return this.#t}setScore(e){this.#t=e}setUserName(e){this.#e=e}}async function t(){const e=await fetch("https://highscore-1e03a-default-rtdb.europe-west1.firebasedatabase.app/.json"),t=await e.json();return console.log(t),t}function n(e){const t=document.querySelector("#highscoreList");t.innerHTML="",e.highscore.sort(((e,t)=>t.score-e.score)),e.highscore.forEach((e=>{const n=e.name,s=e.score,o=document.createElement("p");o.innerHTML=`Name: ${n}`,o.innerHTML+=`<br>Score: ${s}`,t.appendChild(o)}))}async function s(e,n){const s=await t();let o=-1,r=1/0;for(let e in s.highscore){const t=s.highscore[e].score;t<r&&(r=t,o=parseInt(e))}const i=`https://highscore-1e03a-default-rtdb.europe-west1.firebasedatabase.app/highscore/${o}.json`,c=await fetch(i,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:e,score:n})}),a=await c.json();return console.log(a),a}let o;t().then((e=>n(e)));let r,i=0,c=!0;function a(){document.getElementById("score").textContent=`Score: ${i}`}async function l(e){if(console.log("Game function called:",e),!c)return;if(!r)return void(document.getElementById("result").textContent="Please enter your name");const l=function(){const e=["rock","paper","scissors"];return e[Math.floor(Math.random()*e.length)]}();console.log(l);const u=function(e,t){return e===t?"draw":"rock"===e&&"scissors"===t||"scissors"===e&&"paper"===t||"paper"===e&&"rock"===t?"win":"lose"}(e,l);"win"===u?i++:"lose"===u&&(c=!1,o.setScore(i),i>0&&(await s(o.getUsername(),o.getScore()),t().then((e=>n(e)))),addInfo.style.visibility="hidden",rockBtn.style.visibility="hidden",paperBtn.style.visibility="hidden",scissorsBtn.style.visibility="hidden",setTimeout((()=>{addInfo.style.visibility="visible",rockBtn.style.visibility="visible",paperBtn.style.visibility="visible",scissorsBtn.style.visibility="visible"}),4e3),setTimeout(d,4e3)),a(),function(e,t,n){let s;s="win"===e?`You win! Your ${t} beats computers ${n}!`:"lose"===e?`You lose! Computer picked ${n} and beats your ${t}!`:`It's a draw! You both picked ${t}.`,document.getElementById("result").textContent=s}(u,e,l)}function d(){i=0,computerScore=0,r.value="",welcome.innerHTML="",result.innerHTML="",score.innerHTML=""}document.getElementById("addInfo").addEventListener("submit",(t=>{t.preventDefault(),r=document.getElementById("playerName").value.trim(),r?(o=new e(r,0),document.getElementById("welcome").textContent=`Welcome, ${o.getUsername()}!`,c=!0):document.getElementById("result").textContent="Please enter your name"})),document.getElementById("rockBtn").addEventListener("click",(()=>l("rock"))),document.getElementById("paperBtn").addEventListener("click",(()=>l("paper"))),document.getElementById("scissorsBtn").addEventListener("click",(()=>l("scissors"))),a();
//# sourceMappingURL=index.317663a1.js.map
