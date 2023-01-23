var box = document.querySelector(".box");
var red = document.querySelector(".colors .red");
var lightBlue = document.querySelector(".colors .light-blue");
var violet = document.querySelector(".colors .violet");
var nikeBezier = document.getElementById("nikeBezier");
var nikesvg = document.getElementById("nikesvg");
var logopng = document.getElementById("logopng");

red.addEventListener("click", () => {
  box.style.filter = "hue-rotate(0deg)";
  nikeBezier.style.display = "none";
  nikesvg.style.display = "none";
  logopng.style.display = "block";
})
lightBlue.addEventListener("click", () => {
  box.style.filter = "hue-rotate(180deg)";
  nikesvg.style.display = "none";
  nikeBezier.style.display = "block";
  logopng.style.display = "none";
  var ctx = nikeBezier.getContext("2d");
  var ctx2 = nikeBezier.getContext("2d");
  ctx.beginPath();
  ctx.moveTo(80, 40);
  ctx.bezierCurveTo(80, 120, 100, 90, 300, 20);
  ctx.bezierCurveTo(20, 200, 40, 110, 63, 80);
  ctx.fillStyle = "white";
  ctx.fill();

})
violet.addEventListener("click", () => {
  box.style.filter = "hue-rotate(250deg)";
  nikeBezier.style.display = "none";
  nikesvg.style.display = "block";
  logopng.style.display = "none";
})


// -------- nav tabs -------- //
const _tabs = document.querySelectorAll('[data-tab]');
const _content = document.getElementsByClassName('active');

const toggleContent = function() {
  
  if (!this.classList.contains("active")) {
    
    Array.from(_content).forEach( item => {
      item.classList.remove('active');
    });
    
    this.classList.add('active');
    
    let currentTab = this.getAttribute('data-tab'),
       _tabContent = document.getElementById(currentTab);
       _tabContent.classList.add('active');
  }
};

Array.from(_tabs).forEach( item => {
  item.addEventListener('click', toggleContent);
});