const hour = new Date().getHours();

if(hour >= 0 && hour < 18){
document.body.classList.add("day");
}else{
document.body.classList.add("night");
}

const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

function resizeCanvas(){
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener("resize", resizeCanvas);

let stars = [];

/* create stars */

for(let i=0;i<200;i++){

stars.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
radius:Math.random()*1.5,
opacity:Math.random(),
speed:Math.random()*0.02
});

}

function drawStars(){

ctx.clearRect(0,0,canvas.width,canvas.height);

stars.forEach(star=>{

/* twinkle effect */

star.opacity += star.speed;

if(star.opacity > 1 || star.opacity < 0.2){
star.speed = -star.speed;
}

ctx.beginPath();
ctx.arc(star.x, star.y, star.radius, 0, Math.PI*2);

ctx.fillStyle = "rgba(255,255,255," + star.opacity + ")";
ctx.fill();

});

requestAnimationFrame(drawStars);

}

drawStars();



/* slide animation */

gsap.utils.toArray(".slide").forEach((slide)=>{

gsap.from(slide,{

opacity:0,
y:100,
duration:1,

scrollTrigger:{
trigger:slide,
start:"top 80%"
}

})

})


let firstTime = true;

/* music */

function toggleMusic(){

let music=document.getElementById("music");


if(music.paused){

document.getElementById("playy").innerHTML = '<i class="fi fi-sr-pause"></i>';
music.play()

}else{
document.getElementById("playy").innerHTML = '<i class="fi fi-sr-play"></i>';
music.pause()

}

}



/* confetti */

function confettiBurst() {

confetti({
particleCount: 200,
spread: 360,
startVelocity: 40,
scalar: 1.2,
origin: { x: 0.5, y: 0.6 }
});

}