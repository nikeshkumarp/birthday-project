    // Pages
const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");
const page3 = document.getElementById("page3");
const page4 = document.getElementById("page4");
const page5 = document.getElementById("page5");
const page6 = document.getElementById("page6");

// YES
document.getElementById("yesBtn").onclick = function() {
    page1.classList.remove("active");
    page2.classList.add("active");
};

// NO
document.getElementById("noBtn").onclick = function() {
    page1.classList.remove("active");
    page3.classList.add("active");
};

// BACK
document.getElementById("backBtn").onclick = function() {
    page3.classList.remove("active");
    page1.classList.add("active");
};

// CONTINUE
document.getElementById("continueBtn").onclick = function() {
    page2.classList.remove("active");
    page4.classList.add("active");
};

// PAGE 4 -> PAGE 5
document.getElementById("nextBtn2").onclick = function() {
    page4.classList.remove("active");
    page5.classList.add("active");
};

// PAGE 5 -> PAGE 6
document.getElementById("nextBtn3").onclick = function() {
    page5.classList.remove("active");
    page6.classList.add("active");
};const bgm = document.getElementById("bgm");

bgm.volume = 0.3;

// Try autoplay when page loads
window.addEventListener("load", () => {
    bgm.play().catch(() => {
        console.log("Autoplay blocked by browser. Waiting for user interaction...");
    });
});

// Start music on the first click if autoplay was blocked
document.addEventListener("click", () => {
    bgm.play();
}, { once: true });