const textarea = document.querySelector('textarea[name="textarea"]');
const fontSizeInput = document.querySelector('input[name="font-Size"]');
const boldCheck = document.querySelector('input[name="bold"]');
const italicCheck = document.querySelector('input[name="italic"]');
const underlineCheck = document.querySelector('input[name="underline"]');

fontSizeInput.addEventListener("input", (e) => {
    const size = parseInt(e.target.value);

    if (size > 30) {
        textarea.style.fontSize = "30px"; // Cap it at 30
    } else if (size < 8) {
        textarea.style.fontSize = "8px";  // Minimum 8
    } else {
        textarea.style.fontSize = size + "px";
    }
});

boldCheck.addEventListener("change", (e) => {
    if (e.target.checked === true) {
        textarea.style.fontWeight = "bold";
    } else {
        textarea.style.fontWeight = "normal";
    }
});

italicCheck.addEventListener("change", (e) => {
    if (e.target.checked === true) {
        textarea.style.fontStyle = "italic";
    } else {
        textarea.style.fontStyle = "normal";
    }
});

underlineCheck.addEventListener("change", (e) => {
    if (e.target.checked === true) {
        textarea.style.textDecoration = "underline";
    } else {
        textarea.style.textDecoration = "none";
    }
});