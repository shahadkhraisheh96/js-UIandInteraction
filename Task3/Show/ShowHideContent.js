const container = document.getElementById("accordion-container");

container.addEventListener("click", (event) => {
    const parentBox = event.target.closest('.faq-box');
    if (!parentBox) return; 

    const showBtn = parentBox.querySelector('.show-btn');
    const content = parentBox.querySelector('.content');

    if (event.target.classList.contains('show-btn')) {
        content.style.display = "block";
        showBtn.style.display = "none";
    }

    if (event.target.classList.contains('hide-btn')) {
        content.style.display = "none";
        showBtn.style.display = "inline";
    }
});