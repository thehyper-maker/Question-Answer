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

    text.innerHTML = "";


    buttons.innerHTML = `

    <div class="dateBox">

    <input 
    type="date" 
    id="date">

    </div>


    <button class="yes" onclick="chooseTime()">
    ادامه 🌸
    </button>

    `;

}



// انتخاب ساعت

function chooseTime(){

    selectedDate =
    document.getElementById("date").value;


    title.innerHTML = "⏰ چه ساعتی؟";


    buttons.innerHTML = `


    <div class="timeBox">

    <input 
    type="time" 
    id="time">

    </div>


    <button class="yes" onclick="finish()">
    ثبت کن ✨
    </button>


    `;


}



// پایان و ارسال تلگرام

function finish(){

    selectedTime =
    document.getElementById("time").value;



    title.innerHTML = "✨ آماده شد";


    text.innerHTML =
    "نتیجه آماده است، فقط ارسالش کن 😊";



    let message = 
`🌸 یک دعوت جدید

جواب: آره ✅

📅 تاریخ:
${selectedDate}

⏰ ساعت:
${selectedTime}


Made with ❤️ by Alireza Monadi`;



    let telegramLink =
    "https://t.me/The_HyperX?text="
    +
    encodeURIComponent(message);



    buttons.innerHTML = `


    <a class="telegram"
    href="${telegramLink}">
    
    📩 ارسال نتیجه به تلگرام

    </a>


    `;


}
