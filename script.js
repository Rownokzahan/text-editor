document.getElementById('bold').addEventListener('click', function () {
    styleChanger('fontWeight', 'bold', 'normal');
});

document.getElementById('italic').addEventListener('click', function () {
    styleChanger('fontStyle', 'italic', 'normal');
});

document.getElementById('underline').addEventListener('click', function () {
    styleChanger('textDecoration', 'underline', 'none');
});

document.getElementById('strike').addEventListener('click', function () {
    styleChanger('textDecoration', 'line-through', 'none');
});

document.getElementById('text-align').addEventListener('click', function (e) {
    styleChanger('textAlign', e.target.id, 'left');
});

document.getElementById('font-size').addEventListener('change', changeFontSize);
document.getElementById('font-size').addEventListener('keyup', changeFontSize);
function changeFontSize(e) {
    styleChanger('fontSize', `${e.target.value}px`, `${e.target.value}px`);
}

document.getElementById('case').addEventListener('click', function () {
    styleChanger('text-transform', 'uppercase', 'lowercase');
});

document.getElementById('color').addEventListener('change', function (e) {
    console.log(e.target.value);
    styleChanger('color', e.target.value, 'black');
});

function styleChanger(property, value, normalState) {
    const text = document.getElementById('text');
    if (text.style[property] != value) {
        text.style[property] = value;  // using instead style.property
    } else {
        text.style[property] = normalState;
    }
}
