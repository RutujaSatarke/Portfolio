

/*==================== typed js ====================*/   
document.addEventListener("DOMContentLoaded", function () {
    var typed = new Typed(".multiple-text", {
        strings: ["Full Stack Developer", "Backend Developer", "Frontend Developer"],
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000,
        loop: true
    });
});
console.log("Script loaded"); 
console.log(document.getElementById("dark-mode-toggle"));
