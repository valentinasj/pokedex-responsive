import { videos } from "./data.js";
let videos2 = JSON.parse(localStorage.getItem("videos"))
console.log(videos2)
const containerCards = document.querySelector(".video-container");


const contvideos = (container, listav) => {
  container.innerHTML = "";
 listav.forEach((contenido) => {
    container.innerHTML += `
    <div class="video-content-cover">
        <form action="reproductor.html" method="get">
    
            <button type="submit" href="${contenido.video}" class="video-box" target="_blank">
                <img src=${contenido.image}>
            </button>

            <div class="video-details">
                <div class="channel-logo">
                    <img src=${contenido.perfilImg}>
                </div>
            
                <div class="detail">
                    <h3 class="title">${contenido.name}</h3>
                    <p class="channel-name">${contenido.autorName}</p>
                    <div class="views-upload">
                        <p class="views">${contenido.views}</p>
                        <p class="upload">${contenido.upload}</p>
                    </div>
                </div>
            </div>
            <input type="hidden" name="ytid" value="${contenido.ytId}">
        </form>
    </div>
        `;
    });
};

document.addEventListener('DOMContentLoaded', () => {
    if(videos2){
        contvideos(containerCards, videos2);
    }else{
        contvideos(containerCards, videos);
    }
})

const chipButtons = document.querySelectorAll(".chip")
chipButtons.forEach(button => {
    button.addEventListener("click", function() {
        chipButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add("active")
    })
})

const animoChip = document.querySelector(".animo")
animoChip.addEventListener("click", ()=>{
    if(videos2){
        const videosActuales = videos2.filter(({ categoria }) => categoria === "animo");
        contvideos(containerCards, videosActuales);
    }else{
        const videosActuales = videos.filter(({ categoria }) => categoria === "animo");
        contvideos(containerCards, videosActuales);
    }
})

const juanChip = document.querySelector(".juan")
juanChip.addEventListener("click", ()=>{
    if(videos2){
        const videosActuales = videos2.filter(({ categoria }) => categoria === "juan");
        contvideos(containerCards, videosActuales);
    }else{
        const videosActuales = videos.filter(({ categoria }) => categoria === "juan");
        contvideos(containerCards, videosActuales);
    }
})

const germanChip = document.querySelector(".german")
germanChip.addEventListener("click", ()=>{
    if(videos2){
        const videosActuales = videos2.filter(({ categoria }) => categoria === "german");
        contvideos(containerCards, videosActuales);
    }else{
        const videosActuales = videos.filter(({ categoria }) => categoria === "german");
        contvideos(containerCards, videosActuales);
    }
})

const joseChip = document.querySelector(".jose")
joseChip.addEventListener("click", ()=>{
    if(videos2){
        const videosActuales = videos2.filter(({ categoria }) => categoria === "jose");
        contvideos(containerCards, videosActuales);
    }else{
        const videosActuales = videos.filter(({ categoria }) => categoria === "jose");
        contvideos(containerCards, videosActuales);
    }
})