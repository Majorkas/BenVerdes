function navBar() {
  let x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

let count = 6;
function redirectPage() {
  // countdown for the redirect that once it hits 0 redirects the page back to '/'
  count--;
  document.getElementById('countDown').innerHTML = count;
  if (count == 0) {
    window.location = "index.html";
  }
}

function initRedirect() {
  //runs the redirect function
  setInterval(redirectPage, 1000)
}
