document.addEventListener('DOMContentLoaded', (event) => {
    const comment = document.getElementById('comment');

    document.addEventListener('click', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    document.addEventListener("touchend", handleClickOutside);
    document.addEventListener("touchcancel", handleClickOutside);
    document.addEventListener("touchmove", handleClickOutside);

    function handleClickOutside(event) {
        console.log('Event type:', event.type);
        if (comment === document.activeElement && !comment.contains(event.target)) {
            console.log('Click outside textarea');
            comment.blur(); 
        }
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.dir-button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Сохраняем текущий контент кнопки
            const currentContent = button.innerHTML;

            // Очищаем кнопку
            button.innerHTML = '';

            // Создаем новые кнопки
            const newButton1 = document.createElement('button');
            newButton1.className = 'new-button';
            newButton1.id = 'upper';
            newButton1.textContent = 'Иннополис';

            const newButton2 = document.createElement('button');
            newButton2.className = 'new-button';
            newButton2.id = 'lower';
            newButton2.textContent = 'Казань';

            newButton1.addEventListener('click', () => {
                newButton1.style.backgroundColor = '#969696'; 
            });

            newButton2.addEventListener('click', () => {
                newButton2.style.backgroundColor = '#969696'; 
            });

            button.appendChild(newButton1);
            button.appendChild(newButton2);

            button.setAttribute('disabled', '');
        });
    });
});

window.onload = inv;
function isDarkColor(color) {
    const rgb = parseColorToRgb(color);
    const luminance = (0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]) / 255;
    return luminance < 0.5;
}

function parseColorToRgb(color) {
    let r, g, b;
    if (color.startsWith('#')) {
        if (color.length === 7) {
            r = parseInt(color.slice(1, 3), 16);
            g = parseInt(color.slice(3, 5), 16);
            b = parseInt(color.slice(5, 7), 16);
        } else if (color.length === 4) {
            r = parseInt(color[1] + color[1], 16);
            g = parseInt(color[2] + color[2], 16);
            b = parseInt(color[3] + color[3], 16);
        }
    } else if (color.startsWith('rgb')) {
        const rgbValues = color.match(/\d+/g);
        r = parseInt(rgbValues[0]);
        g = parseInt(rgbValues[1]);
        b = parseInt(rgbValues[2]);
    }
    return [r, g, b];
}
function inv() {
    const tg = window.Telegram.WebApp;
    if (tg.themeParams.bg_color && isDarkColor(tg.themeParams.bg_color)) {
        document.body.style.setProperty('background-color', '#1c1c1d');
        var elements = document.getElementsByClassName('grey-rect');
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.backgroundColor = '#e3e1e1ae';
        }
    }
}
Telegram.WebApp.onEvent('themeChanged', function() {
    const tg = window.Telegram.WebApp;
    if (tg.themeParams.bg_color && isDarkColor(tg.themeParams.bg_color)) {
        document.body.style.setProperty('background-color', '#1c1c1d');
        var elements = document.getElementsByClassName('grey-rect');
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.backgroundColor = '#e3e1e1ae';
        }
    } else {
        document.body.style.setProperty('background-color', '#f0eff5');
        var elements = document.getElementsByClassName('grey-rect');
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.backgroundColor = '#E3E1E1';
        }
    }
});


