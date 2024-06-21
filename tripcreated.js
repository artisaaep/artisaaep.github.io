//window.Telegram.WebApp.showAlert("hi");
let cnt = 0;
window.onload = inv;
function inv() {
    const body = document.body;
    const computedStyle = getComputedStyle(body);
    if (computedStyle.backgroundColor === 'rgb(28, 28, 29)') {
        document.getElementById('car').style.filter = 'invert(1)';
    }
}
Telegram.WebApp.onEvent('themeChanged', function() {
    const body = document.body;
    const computedStyle = getComputedStyle(body);
    if (computedStyle.backgroundColor === 'rgb(28, 28, 29)') {
        document.getElementById('car').style.filter = 'invert(1)';
    } else {
        document.getElementById('car').style.filter = 'none';
    }
});