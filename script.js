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

/* =========================
   Screen control
========================= */

const screens=document.querySelectorAll(".screen");

function show(id){
  screens.forEach(s=>s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

/* =========================
   Typewriter
========================= */

function typeWriter(el,text,speed=35){
  el.textContent="";
  let i=0;
  const t=setInterval(()=>{
    el.textContent+=text[i];
    i++;
    if(i>=text.length) clearInterval(t);
  },speed);
}

/* =========================
   Welcome
========================= */

typeWriter(
  document.getElementById("welcomeText"),
  `Hi ${HER_NAME} ❤️`
);

document.getElementById("startBtn").onclick=()=>{
  show("envelopeScreen");
};

/* =========================
   Envelope
========================= */

document.getElementById("envelope").onclick=()=>{
  document.getElementById("envelope").classList.add("open");
  setTimeout(()=>show("memoryScreen"),800);
};

/* =========================
   Memory flow
========================= */

let i=0;
const memoryText=document.getElementById("memoryText");

function showMemory(){
  typeWriter(memoryText,MEMORIES[i]);
}

showMemory();

document.getElementById("nextMemory").onclick=()=>{
  i++;
  if(i<MEMORIES.length){
    showMemory();
  }else{
    show("adventureScreen");
  }
};

/* =========================
   Mini Hunt
========================= */

document.querySelectorAll(".wrong").forEach(btn=>{
  btn.onclick=()=>{
    document.getElementById("huntMsg").textContent="Not that one 😄 try again!";
  };
});

document.querySelector(".correct").onclick=()=>{
  document.getElementById("huntMsg").textContent="You unlocked something ❤️";
  document.getElementById("unlockBox").classList.remove("hidden");

  typeWriter(
    document.getElementById("unlockText"),
    "That memory means so much to me. It was the moment I realized how special you are."
  );

  launchHearts(40);
};

/* Collect key to continue */

document.getElementById("collectKey").onclick=()=>{
  show("complimentScreen");
};

/* =========================
   Compliment
========================= */

typeWriter(
  document.getElementById("complimentText"),
  "Before Valentine's Day arrives… I’ve been wanting to ask you something important."
);

document.getElementById("toProposal").onclick=()=>{
  show("proposalScreen");
};

/* =========================
   Funny NO button
========================= */

const noBtn=document.getElementById("noBtn");

noBtn.addEventListener("mouseenter",()=>{
  noBtn.style.left=Math.random()*200+"px";
  noBtn.style.top=Math.random()*90+"px";
});

/* =========================
   YES celebration
========================= */

document.getElementById("yesBtn").onclick=()=>{
  const msg=document.getElementById("finalMsg");
  msg.classList.remove("hidden");
  msg.textContent="I can't wait to spend Valentine's Day with you ❤️";

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
