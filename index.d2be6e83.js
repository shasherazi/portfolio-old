let e=2;var t=()=>{const t=document.createElement("input");return t.classList.add("input"),t.classList.add("prompt-input"),t.setAttribute("type","text"),t.setAttribute("autofocus","true"),t.id=`input-${e}`,e+=1,t};var o=e=>{const t=document.createElement("span");return t.classList.add("prompt"),t.innerHTML=e,t};var s=e=>{const s=document.querySelector(e),n=document.createElement("div");n.classList.add("promptDiv");const r=o("[guest@shasherazi ~] $"),a=t();n.appendChild(r),n.appendChild(a),s.appendChild(n)};var n=(e,t)=>{const o=document.querySelector(t),s=document.createElement("div");s.classList.add("response"),s.innerHTML=e,o.appendChild(s)},r=[{name:"help",response:"welcome to my portfolio. there isn't much going around here rn <br/> as of now, these are the only commands that you can use: <br/> <br/> <strong>help</strong> - shows this message <br/> <strong>about</strong> - shows a little bit about me <br/> <strong>contact</strong> - shows my contact info"},{name:"about",response:'i\'m a 19-year-old (age might not be up to date, i was born in 2003, do your math) Pakistani who loves to code. currently, i\'m an undergraduate student at <a href="https://www.uopeople.edu/" target="_blank">University of the People</a>. these days i\'m enrolled at a bootcamp called <a href="https://www.microverse.org/" target="_blank">Microverse</a> where i work on remote projects with developers from all around the world'},{name:"contact",response:"here is my encrtyped email address: cvnnvimviyjhu@bhvdg.xjh <br /> start your mail with <strong>veni, vidi, vici</strong> if you successfully decrypt my email address and i'll get back to you as soon as possible"}];var a=e=>{if(!e)return"";const{response:t}=r.find((t=>t.name===e))||{response:"command not found"};return t};var i=e=>{if("Enter"===e.key&&e.target.closest(".prompt-input")){const t=e.target,o=t.id,r=parseInt(o.split("-")[1],10);t.blur(),t.disabled=!0;const i=t.value,d=a(i);n(d,".promptsAndResponses"),s(".promptsAndResponses"),document.querySelector(`#input-${r+1}`).focus()}};document.addEventListener("keydown",i);
//# sourceMappingURL=index.d2be6e83.js.map
