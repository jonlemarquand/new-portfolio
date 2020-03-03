// Get the modal
var modal = document.getElementById("mandoModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closeModal")[0];


var modalTitle = document.getElementById("modalTitle");
var modalExpaliner = document.getElementById("modalExplainer");

var btns = document.getElementsByClassName("project-button");

for (var i = 0; i < btns.length; i++) {    
		btns[i].addEventListener('click', (function(j) {    	  
        return function() {
          modalTitle.innerHTML = modalData[j].title;
          modalExplainer.innerHTML = modalData[j].explainer;
          modal.style.display="block";
          //alert(j)
        }
      })
      (i)
    )
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slideImages");
  var dots = document.getElementsByClassName("slideDots");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" slide-white", "");
  }
  x[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " slide-white";
}

//alert(modalData[0].images[0]);

var modalData = [{
  "title": "I Know Mando",
  "explainer": "Website",
  "github": "https://github.com/jonlemarquand",
  "weblink": "https://www.iknowmando.com",
  "info": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  "readMore": "/page-template.html",
  "images": ["/assets/cpei.png","/assets/cpei.png","/assets/cpei.png"],
},
{
  "title": "Quaver Music",
  "explainer": "Website",
  "github": "https://github.com/jonlemarquand",
  "weblink": "https://www.iknowmando.com",
  "info": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  "readMore": "/page-template.html",
  "images": ["/assets/cpei.png","/assets/cpei.png","/assets/cpei.png"],
},
{
  "title": "I Know Mando",
  "explainer": "Website",
  "github": "https://github.com/jonlemarquand",
  "weblink": "https://www.iknowmando.com",
  "info": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  "readMore": "/page-template.html",
  "images": ["/assets/cpei.png","/assets/cpei.png","/assets/cpei.png"],
},
{
  "title": "I Know Mando",
  "explainer": "Website",
  "github": "https://github.com/jonlemarquand",
  "weblink": "https://www.iknowmando.com",
  "info": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  "readMore": "/page-template.html",
  "images": ["/assets/cpei.png","/assets/cpei.png","/assets/cpei.png"],
},
{
  "title": "I Know Mando",
  "explainer": "Website",
  "github": "https://github.com/jonlemarquand",
  "weblink": "https://www.iknowmando.com",
  "info": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  "readMore": "/page-template.html",
  "images": ["/assets/cpei.png","/assets/cpei.png","/assets/cpei.png"],
},
{
  "title": "I Know Mando",
  "explainer": "Website",
  "github": "https://github.com/jonlemarquand",
  "weblink": "https://www.iknowmando.com",
  "info": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  "readMore": "/page-template.html",
  "images": ["/assets/cpei.png","/assets/cpei.png","/assets/cpei.png"],
},
{
  "title": "I Know Mando",
  "explainer": "Website",
  "github": "https://github.com/jonlemarquand",
  "weblink": "https://www.iknowmando.com",
  "info": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  "readMore": "/page-template.html",
  "images": ["/assets/cpei.png","/assets/cpei.png","/assets/cpei.png"],
},
{
  "title": "I Know Mando",
  "explainer": "Website",
  "github": "https://github.com/jonlemarquand",
  "weblink": "https://www.iknowmando.com",
  "info": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  "readMore": "/page-template.html",
  "images": ["/assets/cpei.png","/assets/cpei.png","/assets/cpei.png"],
},
{
  "title": "I Know Mando",
  "explainer": "Website",
  "github": "https://github.com/jonlemarquand",
  "weblink": "https://www.iknowmando.com",
  "info": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  "readMore": "/page-template.html",
  "images": ["/assets/cpei.png","/assets/cpei.png","/assets/cpei.png"],
},
{
  "title": "I Know Mando",
  "explainer": "Website",
  "github": "https://github.com/jonlemarquand",
  "weblink": "https://www.iknowmando.com",
  "info": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  "readMore": "/page-template.html",
  "images": ["/assets/cpei.png","/assets/cpei.png","/assets/cpei.png"],
},
{
  "title": "I Know Mando",
  "explainer": "Website",
  "github": "https://github.com/jonlemarquand",
  "weblink": "https://www.iknowmando.com",
  "info": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  "readMore": "/page-template.html",
  "images": ["/assets/cpei.png","/assets/cpei.png","/assets/cpei.png"],
},
{
  "title": "I Know Mando",
  "explainer": "Website",
  "github": "https://github.com/jonlemarquand",
  "weblink": "https://www.iknowmando.com",
  "info": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  "readMore": "/page-template.html",
  "images": ["/assets/cpei.png","/assets/cpei.png","/assets/cpei.png"],
}
];