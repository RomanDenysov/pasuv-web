import"./hoisted.0qzQ4S8d.js";const c=document.querySelectorAll(".accordion");let o;function n(){const s=window.innerHeight/5*4;c.forEach(t=>{const i=t.getBoundingClientRect().top,e=t.querySelector(".bottom");i<s?(e?.classList.add("visible"),t.classList.add("sticky")):(e?.classList.remove("visible"),t.classList.remove("sticky"))})}window.addEventListener("scroll",()=>{cancelAnimationFrame(o),o=requestAnimationFrame(n)});