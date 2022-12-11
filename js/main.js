// darkmode
const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');

toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')){
        body.style.background = 'white';
        body.style.color = 'black';
        body.style.transition = '2s';
    } else {
        body.style.background = 'black';
        body.style.color = 'white';
        body.style.transition = '2s';
    }
})

// picture slider
// var slider_img = document.querySelector('.slider-img');
// var images = ['cam1.png', 'cam2.png', 'cam3.png', 'cam4.png', 'cam5.png', 'cam6.png']
// var i = 0; // imagem atual

// function prev() {
//     if (i <= 0) i = images.length
//     i--;
//     return setImg();
// }

// function next() {
//     if (i >= images.length - 1) i = -1;
//     i++;
//     return setImg();
// }

// function setImg() {
//     return slider_img.setAttribute('src', '../images/' + images[i])
// }