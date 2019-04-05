window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").classList.add("white-nav");
  } else {
    document.getElementById("navbar").classList.remove("white-nav");
  }
}

function menu(){
  document.getElementById("togg").classList.toggle("show");
}
    