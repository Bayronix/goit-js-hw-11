import{i as f,S as g}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();async function h(i){const r={http:"https://pixabay.com/api/",key:"43793393-3131be18ae161d81d2e9721c8",options:"image_type=photo&orientation=horizontal&safesearch=true"},a=`${`${r.http}?key=${r.key}&q=${i}`}&${r.options}`,e=await fetch(a);if(!e.ok)throw new Error("Network response was not ok.");return(await e.json()).hits}function y(){return new g(".image-card-link",{caption:!0,captionSelector:"img",captionType:"attr",captionsData:"alt",captionDelay:250,captionPosition:"bottom"})}function n(i){f.error({message:i||"Sorry, there are no images matching your search query. Please try again!",class:"error-notification",timeout:5e3,iconUrl:"/img/octagon.svg",titleColor:"#fff",position:"topRight",backgroundColor:"#EF4040",messageColor:"#fff",progressBarColor:"#B51B1B",close:!0})}function L(i){const r=document.querySelector(".gallery-list"),o=i.map(({webformatURL:a,largeImageURL:e,tags:t,likes:s,views:d,comments:m,downloads:p})=>`<li class="image-card">
              <a href="${e}" class="image-card-link"><img src="${a}" width="360" height="200" class="image-card-thumb" alt="${t}">
                <ul class="image-card-details-list">
                  <li class="image-card-details-list-item">
                      <p class="image-card-details-title">Likes</p>
                      <p class="image-card-details-text">${s}</p>
                  </li>
                  <li class="image-card-details-list-item">
                      <p class="image-card-details-title">Views</p>
                      <p class="image-card-details-text">${d}</p>
                  </li>
                  <li class="image-card-details-list-item">
                      <p class="image-card-details-title">Comments</p>
                      <p class="image-card-details-text">${m}</p>
                  </li>
                  <li class="image-card-details-list-item">
                      <p class="image-card-details-title">Downloads</p>
                      <p class="image-card-details-text">${p}</p>
                  </li>
                </ul>
              </a>
          </li>`).join("");r.innerHTML=o,y().refresh()}function u(i){document.querySelector(".loader").classList.toggle("is-active",i)}const c={searchForm:document.querySelector(".search-bar-form"),searchInput:document.querySelector("#search-bar"),searchButton:document.querySelector("button"),galleryList:document.querySelector(".gallery-list")};let l="";c.searchForm.addEventListener("submit",i=>{if(i.preventDefault(),l=c.searchInput.value.trim(),l===""){n("Please enter a search term.");return}u(!0),setTimeout(()=>{try{h(l).then(r=>{L(r),c.galleryList.childElementCount<=0&&console.error(error)}).catch(()=>{n("An error occurred while fetching images.")}).finally(()=>{setTimeout(()=>{u(!1)})})}catch{console.error("An unexpected error occurred.")}},1e3)});
//# sourceMappingURL=commonHelpers.js.map
