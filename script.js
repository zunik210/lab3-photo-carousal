let image1 = document.getElementById("image1");
let image2 = document.getElementById("image2");
let image3 = document.getElementById("image3");
let storyTitle = document.getElementById("story-title");

function showSequenceOne() {
    storyTitle.textContent = "Story 1: When the Call Ends";
    image1.src = "images/concerned.jpg";
    image2.src = "images/happy.jpg";
    image3.src = "images/phone.jpg";

    caption1.textContent = "She anxiously holds her phone as it rings, unsure of what the call will bring.";
    caption2.textContent = "She puts her worries aside, and celebrates someone else's good news.";
    caption3.textContent = "When the call ends, she is left questioning her own life achievements and lack of self-esteem.";
}

function showSequenceTwo() {
    storyTitle.textContent = "Story 2: The Call She's Been Waiting For";
    image1.src = "images/phone.jpg";
    image2.src = "images/concerned.jpg";
    image3.src = "images/happy.jpg";

    caption1.textContent = "She waits nervously for an important call.";
    caption2.textContent = "Her phone finally rings, and she quickly picks it up.";
    caption3.textContent = "She hears the news she's been hoping for: the surgery was successful.";
}

let btn1 = document.getElementById("sequence-one");
btn1.addEventListener("click", showSequenceOne);

let btn2 = document.getElementById("sequence-two");
btn2.addEventListener("click", showSequenceTwo);

