import { videos } from "./data.js";
let videos2 = JSON.parse(localStorage.getItem("videos"))
const videoReproductorContainer = document.querySelector(".video-reproductor-container")

let queryString = window.location.search;
let urlVariable = new URLSearchParams(queryString);
let ytIds = urlVariable.get('ytid');
console.log(ytIds);

const reproducirVideo = (contenedor) =>{
    let videoFinal;
    if(videos2){
        videoFinal = videos2.filter(({ ytId }) => ytId === ytIds);
    }else{
        videoFinal = videos.filter(({ ytId }) => ytId === ytIds);
    }
    contenedor.innerHTML = "";
    contenedor.innerHTML += `
    <div class="iframe-contenedor">
        <iframe src="https://www.youtube.com/embed/${videoFinal[0].ytId}?autoplay=1"  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen ></iframe>
    </div>
    <div class="video-information">
    <div class="ytImg">
        <img src=${videoFinal[0].perfilImg}>
    </div>
        <div class="channel-info">
            <div class="ytname">
                <h1 class="video-title">${videoFinal[0].name}</h1>
            </div>
            <div class="views-upload">
                <p class="views">${videoFinal[0].views}</p>
                <p class="upload">${videoFinal[0].upload}</p>
            </div>
        </div>
        
    </div>
    `;
}
reproducirVideo(videoReproductorContainer)

let sidebarVideos = document.querySelector(".sidebar-videos")
const crearTarjetasVideos = (contenedor) =>{
    contenedor.innerHTML = "";
    for(let i = 0; i <= 15; i++){
        let videoLength = Math.round(Math.random() * 30)
        contenedor.innerHTML += `
        <div class="cards-container">
                <form action="reproductor.html" method="get">
                        <div class="card">
    
                            <button type="submit" href="${videos[videoLength].video}" class="video-box" target="_blank">
                                <img src=${videos[videoLength].image}>
                            </button>
            
                            <div class="video-details">
                            
                                <div class="detail">
                                    <h3 class="title">${videos[videoLength].name}</h3>
                                    <p class="channel-name">${videos[videoLength].autorName}</p>
                                    <div class="views-upload">
                                        <p class="views">${videos[videoLength].views} ${videos[videoLength].upload}</p>
                                    </div>
                                </div>
                            </div>
                            <input type="hidden" name="ytid" value="${videos[videoLength].ytId}">
                    </div>
                </form>
            </div>
        `
    }
}
crearTarjetasVideos(sidebarVideos)