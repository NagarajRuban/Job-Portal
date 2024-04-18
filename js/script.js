let navBar = document.querySelector(".header .flex .navbar");

document.querySelector("#menu-btn").onclick = () =>{
    navBar.classList.toggle("active");
}

window.onscroll = () => {
    navBar.classList.remove("active");
}

