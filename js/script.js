// VARIÁVEIS
let thumbnails = document.getElementsByClassName("thumbnail");
let slider = document.getElementById("slider");
let buttonRight = document.getElementById("slide-right");
let buttonLeft = document.getElementById("slide-left");

buttonLeft.addEventListener("click", () => {
    slider.scrollLeft -= 125;
});

buttonRight.addEventListener("click", () => {
    slider.scrollLeft += 125;
});

const maxScrollLeft = slider.scrollWidth - slider.clientWidth;
// alert(maxScrollLeft);

// AUTOPLAY SLIDER
function autoPlay(){
    if (slider.scrollLeft > (maxScrollLeft - 1)) {
        slider.scrollLeft -= maxScrollLeft;
    } else {
        slider.scrollLeft += 1;
    }
}

let play = setInterval(autoPlay, 50);

// PAUSA DO SLIDER NO HOVER
for (let i = 0; i < thumbnails.length; i++) {
    thumbnails[i].addEventListener("mouseover", () => {
        clearInterval(play)
    })
    thumbnails[i].addEventListener("mouseout", () => {
        return play = setInterval(autoPlay, 50);
    })
}

// FILTRO DE PRODUTOS ----------------------------------------------------
const btns = document.querySelectorAll('.btn');
const storeProducts = document.querySelectorAll('.store-product');
// const search = document.getElementById(search);

for (i = 0; i < btns.length; i++) {

    btns[i].addEventListener('click', (e) => {
        e.preventDefault()
        
        const filter = e.target.dataset.filter;
        console.log(filter);
        
        storeProducts.forEach((product)=> {
            if (filter === 'all'){
                product.style.display = 'block'
            } else {
                if (product.classList.contains(filter)){
                    product.style.display = 'block'
                } else {
                    product.style.display = 'none'
                }
            }
        });
    });
};

// FILTRO DE PRODUTOS
const search = document.getElementById("search");
const productName = document.querySelectorAll(".product-details h2");

// -----------------------------------------------------------------------
search.addEventListener("keyup", filterProducts);

function filterProducts(e) {
    const text = e.target.value.toLowerCase();
    // console.log(productName[0]);
    productName.forEach(function(product) {
        const item = product.firstChild.textContent;
        if (item.toLowerCase().indexOf(text) != -1) {
            product.parentElement.parentElement.style.display = "block"
        } else {
            product.parentElement.parentElement.style.display = "none"
        }
    })
}