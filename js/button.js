function changeFontSize(type){
    // console.log(type);

    // SELECIONAR ID
    let ids = ["#par"];

    ids.forEach(id => {
        // ELEMENTO
        let el = document.querySelector(id);

        // FONTE
        let fontSize = window.getComputedStyle(el, null).getPropertyValue("font-size");

        // Convert to float
        fontSize = parseFloat(fontSize);

        // AUMENTAR / DIMINUIR TAMANHO DA FONTE
        if(type === "increase"){
            el.style.fontSize = (fontSize + 10) + "px"; // 1rem = 16px
        }else{
            el.style.fontSize = (fontSize - 10) + "px";
        }
    });
}