const h1Hover = document.getElementById("h1-hover");

h1Hover.addEventListener("mouseenter", () => {
    h1Hover.style.backgroundColor = "yellow";
    h1Hover.style.fontWeight="bold";
});

h1Hover.addEventListener("mouseleave", () => {
    h1Hover.style.backgroundColor = "transparent"; 
    h1Hover.style.fontWeight="normal";
});