const div1 = document.getElementById('first');
const div2 = document.getElementById('second');
const div3 = document.getElementById('third');

const img = document.getElementById('art');

const desc = document.getElementById('desc');
const price = document.getElementById('price');


div1.addEventListener('click', function () {
    img.src = 'images/1.jpg';
    desc.innerHTML = 'First Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum beatae laboriosam';
    price.innerText = '450';
    updateTotal()

    if (!isContain(div1)) {
        div1.classList.add('selected');
        div2.classList.remove('selected');
        div3.classList.remove('selected');
    }
})
div2.addEventListener('click', function () {
    img.src = 'images/2.jpg';
    desc.innerHTML = 'Second Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum beatae laboriosam';
    price.innerText = '550';
    updateTotal()

    if (!isContain(div2)) {
        div1.classList.remove('selected');
        div2.classList.add('selected');
        div3.classList.remove('selected');
    }

})
div3.addEventListener('click', function () {
    img.src = 'images/3.jpg';
    desc.innerHTML = 'Third Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum beatae laboriosam';
    price.innerText = '650';
    updateTotal()

    if (!isContain(div3)) {
        div1.classList.remove('selected');
        div2.classList.remove('selected');
        div3.classList.add('selected');
    }
})

const free = document.getElementById('free');
const express = document.getElementById('express');
const shipping = document.getElementById('shipping');

free.addEventListener('click', function () {
    if (!isContain(free)) {
        free.classList.add('selected');
        express.classList.remove('selected');
    }
    shipping.innerText = '5';
    updateTotal()
})
express.addEventListener('click', function () {
    if (!isContain(express)) {
        free.classList.remove('selected');
        express.classList.add('selected');
    }
    shipping.innerText = '30';
    updateTotal()
})

// update total
const total = document.getElementById('total');
d
function updateTotal() {
    const shippingCharge = parseInt(shipping.innerText);
    const productPrice = parseInt(price.innerText);
    const totalPrice = shippingCharge + productPrice;
    total.innerText = totalPrice;
}


//Border Add By Function
function isContain(element) {
    return element.classList.contains('selected');

}






