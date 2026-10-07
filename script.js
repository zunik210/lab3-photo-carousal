let image1 = document.getElementById("image1");
let image2 = document.getElementById("image2");
let image3 = document.getElementById("image3");
let storyTitle = document.getElementById("story-title");

function showSequenceOne() {
    storyTitle.textContent = "Story 1: When the Call Ends";
    image1.src = "images/concerned.jpg";
    image2.src = "images/happy.jpg";
    image3.src = "images/phone.jpg";
}

function showSequenceTwo() {
    storyTitle.textContent = "Story 2: The Call She's Been Waiting For";
    image1.src = "images/phone.jpg";
    image2.src = "images/concerned.jpg";
    image3.src = "images/happy.jpg";
}

let btn1 = document.getElementById("sequence-one");
btn1.addEventListener("click", showSequenceOne);

let btn2 = document.getElementById("sequence-two");
btn2.addEventListener("click", showSequenceTwo);

