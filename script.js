let noCount = 0;

let selectedDate = "";
let selectedTime = "";

const title = document.getElementById("title");
const text = document.getElementById("text");
const buttons = document.getElementById("buttons");


// دکمه بعداً
function later(){

    noCount++;

    if(noCount == 1){

        title.innerHTML = "باشه 😊";
        text.innerHTML = "هر وقت خواستی دوباره بازش کن";

    }

    else if(noCount == 2){

        title.innerHTML = "هنوز یه سوال کوچیک مونده ✨";
        text.innerHTML = "فقط یه نگاه کوچیک";

    }

    else{

        startInvite();

    }

}



// شروع دعوت

function startInvite(){

    title.innerHTML = "🌸 یه سوال دارم";

    text.innerHTML =
    "با من میای یه دیت کوچیک؟ 😊";


    buttons.innerHTML = `

    <button class="yes" onclick="chooseDate()">
    آره ✨
    </button>


    <button class="no" onclick="later()">
    نه
    </button>

    `;

}



// انتخاب تاریخ

function chooseDate(){

    title.innerHTML = "📅 چه روزی دوست داری؟";

    text.innerHTML = "";}

}

typeWriter();



function createHeart(){

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(18+Math.random()*25)+"px";

heart.style.animationDuration=(4+Math.random()*4)+"s";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},8000);

}

setInterval(createHeart,350);



yes.onclick=()=>{

document.querySelector(".glass").classList.add("hide");

step2.classList.remove("hide");

}



no.onclick=()=>{

noCount++;

if(noCount==1){

moveButton();

}

else if(noCount==2){

moveButton();

no.style.transform="scale(.7)";

}

else{

document.querySelector(".glass").classList.add("hide");

step2.classList.remove("hide");

}

}



function moveButton(){

const x=Math.random()*220-110;

const y=Math.random()*180-90;

no.style.transform=`translate(${x}px,${y}px)`;

}



submit.onclick=()=>{

const date=document.getElementById("date").value;

const time=document.getElementById("time").value;

const place=document.getElementById("place").value;

const message=document.getElementById("message").value;

if(date=="" || time==""){

alert("اول تاریخ و ساعت رو انتخاب کن ❤️");

return;

}



const data={

date,

time,

place,

message,

created:new Date().toLocaleString()

};



console.log(data);



step2.classList.add("hide");

finish.classList.remove("hide");



confetti();

};



function confetti(){

for(let i=0;i<120;i++){

const c=document.createElement("div");

c.innerHTML=Math.random()>0.5?"💖":"🎉";

c.style.position="absolute";

c.style.left=Math.random()*100+"vw";

c.style.top="-20px";

c.style.fontSize=(18+Math.random()*18)+"px";

c.style.transition="5s linear";

document.body.appendChild(c);

setTimeout(()=>{

c.style.top="110vh";

c.style.transform=`rotate(${Math.random()*900}deg)`;

},10);

setTimeout(()=>{

c.remove();

},5200);

}

}



if(navigator.vibrate){

yes.addEventListener("click",()=>{

navigator.vibrate(100);

});

}
