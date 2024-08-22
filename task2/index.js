let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let img3 = document.getElementById("img3");

img1.addEventListener("click", function () {
  let heading = document.getElementById("heading");
  let caption = document.getElementById("captions");

  heading.innerText=" 1st image  was clicked ."
  caption.innerText="the beautiful nature!"
});


img2.addEventListener("click", function () {
    let heading = document.getElementById("heading");
    let caption = document.getElementById("captions");
  
    heading.innerText=" 2nd image  was clicked ."
    caption.innerText="the beautiful butterfly flying!"
  });
  img3.addEventListener("click", function () {
    let heading = document.getElementById("heading");
    let caption = document.getElementById("captions");
  
    heading.innerText=" 3rd image  was clicked ."
    caption.innerText="the beautiful painting!"
  });