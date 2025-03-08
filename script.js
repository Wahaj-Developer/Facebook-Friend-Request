var state = document.querySelector("h5")

var btn = document.querySelector("#add")
var check = 0
btn.addEventListener("click", function(){
    if(check == 0) {
    state.innerHTML = "Friend"
    state.style.color= "Black"
    btn.innerHTML = "Remove"
    check = 1
    }else{
        state.innerHTML = "Person who you <br> might know"
        state.style.color= "grey"
         btn.innerHTML = "Add Friend"
        check = 0
    }
})
