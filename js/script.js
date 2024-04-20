var button = document.querySelector(".show-cat");
//console.log(button.outerHTML);
var cat = document.querySelector(".cat");
//console.log(cat.outerHTML);

button.addEventListener("click", function() {
    //console.log("It's working!");
    //cat.classList.add("show");
    if (cat.classList.contains("show")) {
        //console.log("It's showing!");
        cat.classList.remove("show");
        button.innerText = "Wait, come back!";
        button.classList.add("disappear");
    } else {
        //console.log("Not showing!");
        cat.classList.add("show");
        button.innerText = "Shoo, cat!!";
        button.classList.remove("disappear");
    }
});