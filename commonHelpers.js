import{S as g,i as l}from"./assets/vendor-8c59ed88.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(e){if(e.ep)return;e.ep=!0;const a=s(e);fetch(e.href,a)}})();function p(){new g(".image-card-link",{caption:!0,captionSelector:"img",captionType:"attr",captionsData:"alt",captionDelay:250,captionPosition:"bottom"}).refresh()}function h(){l.settings({timeout:5e3,titleColor:"#fff",position:"topRight",messageColor:"#fff",icon:"",close:!1}),l.error({message:"Sorry, there are no images matching your search query. Please try again!",class:"error-notification",timeout:5e3,iconUrl:"/img/octagon.svg",titleColor:"#fff",position:"topRight",backgroundColor:"#EF4040",messageColor:"#fff",progressBarColor:"#B51B1B",close:!0})}function y(i){i.length<=0&&h();const t=document.querySelector(".gallery-list"),s=i.map(({webformatURL:r,largeImageURL:e,tags:a,likes:o,views:u,comments:m,downloads:f})=>`<li class="image-card">
              <a href="${e}" class="image-card-link"><img src="${r}" width="360" height="200" class="image-card-thumb" alt="${a}">
                <ul class="image-card-details-list">
                  <li class="image-card-details-list-item">
                      <p class="image-card-details-title">Likes</p>
                      <p class="image-card-details-text">${o}</p>
                  </li>
                  <li class="image-card-details-list-item">
                      <p class="image-card-details-title">Views</p>
                      <p class="image-card-details-text">${u}</p>
                  </li>
                  <li class="image-card-details-list-item">
                      <p class="image-card-details-title">Comments</p>
                      <p class="image-card-details-text">${m}</p>
                  </li>
                  <li class="image-card-details-list-item">
                      <p class="image-card-details-title">Downloads</p>
                      <p class="image-card-details-text">${f}</p>
                  </li>
                </ul>
              </a>
          </li>`).join("");t.innerHTML="",t.insertAdjacentHTML("afterbegin",s),p()}function b(i){const t=document.querySelector("button"),s=i.target.value;if(s)return t.classList.remove("is-disable"),t.removeAttribute("disabled",""),s;t.classList.add("is-disable"),t.setAttribute("disabled","")}function c(i){const t=document.querySelector(".loader");i?t.classList.add("is-active"):t.classList.remove("is-active")}function L(i){const t=`https://pixabay.com/api/?key=20858658-55430aeeed6a37ac1f56d3c0c&q=${i}&image_type=photo&orientation=horizontal&safesearch=true`;c(!0),setTimeout(()=>{fetch(t).then(s=>{if(s.ok)return s.json()}).then(s=>{const r=s.hits;y(r),c(!1)}).catch(s=>console.log(s))},1e3)}const n={searchForm:document.querySelector(".search-bar-form"),searchInput:document.querySelector("#search-bar"),searchButton:document.querySelector("button"),galleryList:document.querySelector(".gallery-list")};let d="";n.searchInput.addEventListener("input",i=>{d=b(i)});n.searchForm.addEventListener("submit",i=>{i.preventDefault(),L(d)});
//# sourceMappingURL=commonHelpers.js.map
