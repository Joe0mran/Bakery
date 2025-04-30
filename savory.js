loadTheme();
const themebutton = document.getElementById('theme');
themebutton.addEventListener('click', theme);

let originalProducts = [];

window.onload = function () {
    const container = document.querySelector('.imagess');
    originalProducts = Array.from(container.children);
}

let lastStored = '';

function sortByPrice(order) {
    const container = document.querySelector('.imagess');
    const products = Array.from(document.querySelectorAll('.image'));

    if (lastStored === order) {
        originalProducts.forEach(product => container.appendChild(product));
        lastStored = '';
        clearActiveButtons();
    }
    else {
        products.sort((a, b) => {
            const priceA = parseInt(a.dataset.price);
            const priceB = parseInt(b.dataset.price);
            return order === 'asc' ? priceA - priceB : priceB - priceA;
        });
        products.forEach(product => container.appendChild(product));
        lastStored = order;
    }
}

function clearActiveButtons() {
    const button = document.querySelectorAll('.price-btn');
    button.forEach(btn => btn.classList.remove('active'));
}

function togglePriceOptions() {
    const priceOption = document.getElementById('priceOption');
    priceOption.style.display = priceOption.style.display === 'none' ? 'block' : 'none';

    const button = document.getElementById('pricebutton');
    button.classList.toggle('active');
}

function setActiveButton(clickedBtn) {
    const buttons = document.querySelectorAll('.price-btn:not(#pricebutton)');
    buttons.forEach(btn => btn.classList.remove('active'));
    clickedBtn.classList.add('active');
}
function toggleFilterActive(btn) {
    const container = document.querySelector('.imagess');
    const products = Array.from(document.querySelectorAll('.image'));

    if (btn.classList.contains('active')) {
        btn.classList.remove('active');
        products.forEach(product => {
            product.style.display = 'block';
            container.appendChild(product);
        });
    }
    else {
        btn.classList.add('active');
        let min = parseInt(document.getElementById('minPrice').value) || 0;
        let max = parseInt(document.getElementById('maxPrice').value) || Infinity;

        products.forEach(product => {
            const price = parseInt(product.dataset.price);
            if (price >= min && price <= max) {
                product.style.display = 'block';
            }
            else {
                product.style.display = 'none';
            }

        });
    }
}
