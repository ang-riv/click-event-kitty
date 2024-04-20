var button = document.querySelector(".show-cat");
//console.log(button.outerHTML);
var cat = document.querySelector(".cat");
//console.log(cat.outerHTML);

button.addEventListener("click", function() {
    //console.log("It's working!");
    cat.classList.add("show");
});