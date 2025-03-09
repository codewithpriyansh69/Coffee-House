document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("header").classList.add("animate-header");
});

setTimeout(() => {
    document.querySelector("#menu").classList.add("fade-in");
}, 1000);
