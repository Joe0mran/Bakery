loadTheme();
const themebutton = document.getElementById('theme');
themebutton.addEventListener('click', theme);

      let originalProducts = [];
      let lastStoredOrder = '';  // عشان اخزن اخر ترتيب 

    // لما احمل الصفحة
      window.onload = function () {
        const container = document.querySelector('.imagess');
        originalProducts = Array.from(container.children); // عشان احفظ المنتجات الاصليه
     };

    //  عشان ارتب العناصر
      function sortByPrice(order) {
        const container = document.querySelector('.imagess');
        const products = Array.from(document.querySelectorAll('.image'));

        if (lastStoredOrder === order) {
            // لو نفس الترتيب موجود قبل كدا ... هنرجع كل العناصر لطبيعتها
            originalProducts.forEach(product => container.appendChild(product));
            lastStoredOrder = ''; //  بعيد الترتيب
            clearActiveButtons();  // همسح التأثيرات
        } else {
            // لو كان الترتيب مختلف عن اللي موجود هنرتب حسب الترتيب المطلوب
            products.sort((a, b) => {
                const priceA = parseInt(a.dataset.price);
                const priceB = parseInt(b.dataset.price);
                return order === 'asc' ? priceA - priceB : priceB - priceA;
            });
            products.forEach(product => container.appendChild(product));
            lastStoredOrder = order;  // عشان احفظ الترتيب الجديد
        }
    }


    // عشان ابين او اخفي خيارات الفلتر
     function togglePriceOptions() {
        const priceOption = document.getElementById('priceOption');
        priceOption.style.display = priceOption.style.display === 'none' ? 'block' : 'none';
        const button = document.getElementById('pricebutton');
        button.classList.toggle('active');
    }

    //  عشان اصفي المنتجات حسب السعر
    function filterByPrice() {
        const container = document.querySelector('.imagess');
        const products = Array.from(document.querySelectorAll('.image'));

        let min = parseInt(document.getElementById('minPrice').value) || 0;
        let max = parseInt(document.getElementById('maxPrice').value) || Infinity;

        products.forEach(product => {
            const price = parseInt(product.dataset.price);
            if (price >= min && price <= max) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
    }

   function changeQty(button, amount) {
      const counter = button.parentElement.querySelector("span");
      let value = parseInt(counter.innerText);
      value = Math.max(1, value + amount);
      counter.innerText = value;
 }
