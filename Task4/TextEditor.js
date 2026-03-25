
const textarea = document.querySelector('textarea[name="textarea"]');
const fontFamily = document.getElementById("font-family");
const fontSizeInput = document.querySelector('input[name="font-Size"]');
const boldCheck = document.querySelector('input[name="bold"]');
const italicCheck = document.querySelector('input[name="italic"]');
const underlineCheck = document.querySelector('input[name="underline"]');


fontFamily.addEventListener("change", (e) => {
    textarea.style.fontFamily = e.target.value;
});

fontSizeInput.addEventListener("input", (e) => {
    textarea.style.fontSize = e.target.value + "px";
});


boldCheck.addEventListener("change", (e) => {
    textarea.style.fontWeight = e.target.checked ? "bold" : "normal";
});

italicCheck.addEventListener("change", (e) => {
    textarea.style.fontStyle = e.target.checked ? "italic" : "normal";
});


underlineCheck.addEventListener("change", (e) => {
    textarea.style.textDecoration = e.target.checked ? "underline" : "none";
});