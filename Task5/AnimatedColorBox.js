const box = document.getElementById("box");

setInterval(() => {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    box.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    box.style.transition = "background-color 0.8s";}, 1000);