var clickActive = false;
var waitTime = 150;


document.getElementById("car").onclick = function() {
  if(!clickActive) {
    clickActive = true;
    this.style.animation = "getSmaller "+waitTime+"ms";
    setTimeout(()=>{
      this.style.animation = "";
      clickActive = false;
    }, waitTime);
  }
}