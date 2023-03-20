import { videos } from "./data.js";

let queryString = window.location.search;
let urlVariable = new URLSearchParams(queryString);
let nameVideo = urlVariable.get('name');
let ytId = urlVariable.get('ytid');
let canal = urlVariable.get('canal');
let img = urlVariable.get('imgvid');
let views = urlVariable.get('views');

let date = new Date();


const createNewVideo = (nameVideo, ytId, canal, views) =>{

    let imgUser = ""
    let categoria = ""
    if(canal == "Con Ánimo de ofender"){
        imgUser = "./img/animoperfil.png"
        categoria = "animo"
    } 
    if(canal == "JuanSGuarnizo"){
        imgUser = "./img/juanperfil.png"
        categoria = "juan"
    } 
    if(canal == "JuegaGerman"){
        imgUser = "./img/germanperfil.png"
        categoria = "german"
    } 
    if(canal == "José Luis MartGon"){
        imgUser = "./img/joseperfil.png"
        categoria = "jose"
    } 
    videos.push ({
        id: videos[videos.length - 1].id + 1,
        name: nameVideo,
        video: `https://www.youtube.com/embed/${ytId}`,
        ytId: ytId,
        autorName: canal,
        views: "0 views ",
        upload: ` • ${date.toLocaleDateString()}`,
        image: img,
        perfilImg: imgUser,
        categoria: categoria
    })
    console.log(videos)
}
createNewVideo(nameVideo, ytId, canal, img, views)
console.log(views)
localStorage.setItem("videos", JSON.stringify(videos) )

