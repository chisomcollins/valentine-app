/* =====================================
   CUSTOMIZATION — EDIT THESE
===================================== */

const HER_NAME = "Chelsea";
const INSIDE_JOKE = "My Apple of my life, Nne, My Achalugo, My Love, i can just imagine you smilling right now";
const FAVORITE_COLOR = "purple";

const MEMORIES = [
  "The first time we met physically and we immediately started vibing with each other.",
  "Everyday, we joke around one another ",
  "Every little moment with you feels like home.",
  "And today… I just know can't imagine a life without you.",
   INSIDE_JOKE
];

/* =====================================
   UTILITIES
===================================== */

const screens = document.querySelectorAll(".screen");

function showScreen(id){
  screens.forEach(s=>s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

/* =====================================
   Welcome + Typewriter
===================================== */

const welcomeText = document.getElementById("welcomeText");

function typeWriter(el, text, speed=40){
  el.textContent="";
  let i=0;
  const interval=setInterval(()=>{
    el.textContent+=text[i];
    i++;
    if(i>=text.length) clearInterval(interval);
  }, speed);
}

typeWriter(welcomeText, `Hi ${HER_NAME} ❤️`);

document.getElementById("startBtn").onclick = () =>
  showScreen("envelopeScreen");

/* =====================================
   Envelope
===================================== */

const envelope = document.getElementById("envelope");

envelope.onclick = () =>{
  envelope.classList.add("open");
  setTimeout(()=>showScreen("memoryScreen"),800);
};

/* =====================================
   Memories flow
===================================== */

let memoryIndex = 0;
const memoryText = document.getElementById("memoryText");

function showMemory(){
  typeWriter(memoryText, MEMORIES[memoryIndex]);
}

showMemory();

document.getElementById("nextMemory").onclick = () =>{
  memoryIndex++;
  if(memoryIndex < MEMORIES.length){
    showMemory();
  } else {
    showScreen("huntScreen");
  }
};

/* =====================================
   Mini Hunt
===================================== */

document.querySelectorAll(".choice").forEach(btn=>{
  btn.onclick=()=>{
    const msg=document.getElementById("huntMsg");
    if(btn.dataset.good==="true"){
      msg.textContent="You found the special one ❤️";
      setTimeout(()=>showScreen("proposalScreen"),800);
    } else {
      msg.textContent="Hehe try again 😆";
    }
  };
});

/* =====================================
   Music toggle
===================================== */

const music=document.getElementById("bgMusic");
const toggle=document.getElementById("musicToggle");

toggle.onclick=()=>{
  if(music.paused){
    music.play();
    toggle.textContent="🔊";
  }else{
    music.pause();
    toggle.textContent="🎵";
  }
};

/* =====================================
   Funny NO button
===================================== */

const noBtn=document.getElementById("noBtn");

noBtn.addEventListener("mouseenter",()=>{
  const x=Math.random()*200;
  const y=Math.random()*80;
  noBtn.style.left=x+"px";
  noBtn.style.top=y+"px";
});

/* =====================================
   YES Celebration
===================================== */

document.getElementById("yesBtn").onclick=()=>{
  const msg=document.getElementById("finalMsg");
  msg.classList.remove("hidden");
  msg.textContent = `Yay! ❤️ I love you more than words can say. Happy Valentine's, ${HER_NAME}!`;

  launchHearts(120);
};

/* =====================================
   Floating hearts
===================================== */

function launchHearts(count){
  const container=document.getElementById("hearts");

  for(let i=0;i<count;i++){
    const heart=document.createElement("div");
    heart.className="heart";
    heart.textContent="❤️";
    heart.style.left=Math.random()*100+"vw";
    heart.style.animationDuration=(4+Math.random()*3)+"s";
    container.appendChild(heart);

    setTimeout(()=>heart.remove(),7000);
  }
}
