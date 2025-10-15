// For now, this script doesn't perform any actions. You can expand it for functionality like opening the detailed page.
document.querySelectorAll('.cafe-card button').forEach((button, index) => {
    button.addEventListener('click', () => {
        alert(`คุณเลือกคาเฟ่หมายเลข ${index + 1}`);
    });
});
