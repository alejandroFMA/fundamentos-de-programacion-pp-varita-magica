
const colors =["#2C1730","#2C1730","#C7C150", "#C76350"];
let getRandom = (colors) => {
  let randomColor = colors[Math.floor(Math.random()*colors.length)];
  return randomColor
}
console.log(getRandom(colors));




let stopLink = document.querySelectorAll('a');

for (let i = 0; i < stopLink.length; i++) {
  stopLink[i].addEventListener('click', function(evento) {
    evento.preventDefault(); //cancela evento
  });
}



/*let Img = [".assets/magic-1","./assets/magic-2.gif", "./assets/magic-3.gif", "./assets/magic-4.gif", "./assets/magic-5.gif", "./assets/magic-6.gif" ]
let getRandomImg =(img) =>{
let randomImg = img[Math.floor(Math.random()*img.length)] 
 
 return randomImg}
  
console.log(getRandomImg(img));
let assets=[".assets/magic-1","./assets/magic-2.gif", "./assets/magic-3.gif", "./assets/magic-4.gif", "./assets/magic-5.gif", "./assets/magic-6.gif"]
let randomAssets=assets(Math.floor(Math.random()*assets)*/

let changeImg = (img) => img.src = "./assets/magic-3.gif";
document.querySelectorAll("img").forEach(img => img.addEventListener("click", () => changeImg(img)))


let colorText = (p) => p.style.color = getRandom(colors);
document.querySelectorAll("p").forEach(p => p.addEventListener("click", () => colorText(p)))

let colorBlock = (section) => section.style.backgroundColor = getRandom(colors);

document.querySelector("section").addEventListener("click", () => colorBlock(document.querySelector("section")));



imagenes = document.getElementsByTagName("img");
for (let i = 0; i < imagenes.length; i++) {
  imagenes[i].addEventListener("mouseover", function () {
    imagenes[i].src = "./assets/abracadabra.gif";
        });

  imagenes[i].addEventListener("mouseout", function () {   
  let imagenOriginal = imagenes[i].getAttribute("src");
    imagenes[i].src = imagenOriginal
      
  });

}

parrafos = document.querySelector("p");
for (let i = 0; i < parrafos.length; i++) {
    parrafos[i].addEventListener("mouseover", function () {
      parrafos[i].style.color = getRandom(colors);
      parrafos[i].style.backgroundColor= getRandom(colors);
    })

      parrafos[i].addEventListener("mouseout", function () {
        parrafos[i].style.color = getRandom(colors);
        parrafos[i].style.backgroundColor = getRandom(colors);
      })
  

}


parrafos = document.getElementsByTagName("p");
for (let i = 0; i < parrafos.length; i++) {
    parrafos[i].addEventListener("mouseout", function () {
      parrafos[i].style.color = getRandom(colors);
      parrafos[i].style.backgroundColor = getRandom(colors);
    })
}

const seccion = document.getElementsByTagName("section");
  for (let i = 0; i < seccion.length; i++) {
      seccion[i].addEventListener("mouseover", function () {
        seccion[i].style.backgroundColor = getRandom(colors);
      })
}

      for (let i = 0; i < seccion.length; i++) {
      seccion[i].addEventListener("mouseout", function () {
      section[i].style.backgroundColor = getRandom(colors);
      })
}




