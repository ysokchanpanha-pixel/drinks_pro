// 1. Centralized Product Storage Catalog Array
const products = [
  {
    id: "PROD-001",
    title: "Cambodia Cola 330ml x 24Can",
    khmerTitle: "កម្ពុជាកូឡា ៣៣០មល កេះ",
    description: "Refreshing authentic flavor, packed in a full case of 24 convenient cans.",
    price: 1.75,
    imgSrc: "https://camhappymart.com/storage/app/public/product/thumbnail/2025-10-22-68f8b9a2300d0.png"
  },
  {
    id: "PROD-002",
    title: "Angkor water  330ml",
    khmerTitle: "ទឹកសុទ្ធ​កម្ពុជា",
    description: "The official national water of Cambodia, offering a smooth and crisp taste profile.",
    price: 0.75,
    imgSrc: "https://storage.googleapis.com/takeapp/media/cmkb6uwte000004l44ti23tbx.png"
  },
  {
    id: "PROD-003",
    title: "White cocala 330ml",
    khmerTitle: "កូកាកូឡា",
    description: "Crafted with premium ingredients, delivering an ultra-smooth finish in every sip.",
    price: 1.50,
    imgSrc: "https://www.coca-cola.com/content/dam/onexp/kh/en/brands/coca-cola/coca-cola-light.png/width1960.png"
  },
  {
    id: "PROD-004",
    title: "cambodai cola 120ml",
    khmerTitle: "កម្ពុជាកូឡា 120ml",
    description: "Locally produced mineral water treated with advanced filtration for pure hydration.",
    price: 0.75,
    imgSrc: "https://camhappymart.com/storage/app/public/product/2025-10-22-68f8b9d9728ce.webp"
  },
  {
    id: "PROD-005",
    title: "Express drink 250ml",
    khmerTitle: "អេចប្រេស 250ml",
    description: "Popular Korean formulation energizer rich in taurine and vital B vitamins.",
    price: 1.00,
    imgSrc: "https://www.monde-selection.com/wp-content/uploads/2024/05/1041890.png"
  },
  {
    id: "PROD-006",
    title: "Coca-Cola original taste bottle 150ml",
    khmerTitle: "កូកាកូឡា រសជាតិដើម 150ml",
    description: "A classic Asian botanical beverage, naturally sweetened to cool you down instantly.",
    price: 1.01,
    imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHguxuWCpApinQFedDrBG-9bAPjyoVeTSUkoS6JqO8vg&s=10"
  },
  {
    id: "PROD-007",
    title: "Cambodai beer 330ml",
    khmerTitle: "ស្រាបៀរកម្ពុជា 330ml",
    description: "The timeless, delicious flavor of real Coca-Cola enjoyed all around the globe.",
    price: 1.01,
    imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSx_4LRhCLbwmUEdtTMvHHqYJFwybKdL8U-JI5PpBLqA&s=10"
  },
  {
    id: "PROD-008",
    title: "Bacas Energy Drink  250ml",
    khmerTitle: "ភេសជ្ជៈ ប៉ូវកំលាំង​​​​ បាសកាស",
    description: "An electrifying burst of strawberry flavor combined with a powerful energy blend.",
    price: 1.20,
    imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5AONNz21uZCzGu5mStlV3s9nkVlfDSCG_A9vF_eaPn4NvEb6Jtyg1chM&s=10"
  },
  {
    id: "PROD-009",
    title: "Yellow Sting Drink 250ml",
    khmerTitle: "ស្ទីងលឿង 250ml",
    description: "Organic brewed green tea leaves mixed perfectly with sweet honey and sour lemon.",
    price: 1.01,
    imgSrc: "https://hongphatfood.com/wp-content/uploads/2023/06/sting-gold-can-320ml2.jpg"
  },
  {
    id: "PROD-010",
    title: "Angkor Milk 330ml",
    khmerTitle: "ទឹកដោះគោអង្គរមៀល 330ml",
    description: "Distinctive and nostalgic herbal sarsaparilla flavor with a fizzy kick.",
    price: 0.50,
    imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9VFWD21Umz_E_bVnp7LUbA5Q1iZqVjKYtnJO1jwH_BNABVMsfHrv-iFCZ&s=10"
  },
  {
    id: "PROD-011",
    title: "NESCAFÉ Dark Roast Classic Jar",
    khmerTitle: "កាហ្វេ ណេសកាហ្វេ ដបធំពិសេស",
    description: "Rich, bold instant coffee — bonus jar included for unbeatable everyday value.",
    price: 8.90,
    imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShOGAMiPIca2brODAQ5KicBWTdT_B4KrB2Qt_ttVvAI-THZ28fwLTKkLf5&s=10"
  },
  {
    id: "PROD-012",
    title: "Fanta 240ml",
    khmerTitle: "ហ្វាន់តា 240ml",
    description: "A silky, smooth beverage pairing real fruit juice aroma with rich, creamy milk.",
    price: 0.85,
    imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvOZu0k-X7VVj9VMWLTRsgYrH87tk3OE5xi5uT2uBukw&s=101606906242TxMRnddl.jpg"
  },
  {
    id: "PROD-013",
    title: "Champoin 240ml",
    khmerTitle: "ឆេមពាន 240ml",
    description: "The ideal blend of premium coffee, creamer, and sugar in quick single-serve sticks.",
    price: 4.50,
    imgSrc: "https://i.pinimg.com/1200x/7f/a6/a9/7fa6a91c08a43e5890830e3d17ece72e.jpg"
  },
  {
    id: "PROD-014",
    title: "Bostrong 240ml",
    khmerTitle: "បូស្ត្រុង 240ml",
    description: "Golden roasted Arabica beans delivering a velvety layer of authentic crema texture.",
    price: 6.20,
    imgSrc: "https://i.pinimg.com/736x/39/10/30/3910305ca577a91262c0e7e32a7f84fb.jpg"
  },
  {
    id: "PROD-015",
    title: "Dash 240ml",
    khmerTitle: "ដាហ្ស",
    description: "A low-calorie, crisp black coffee drink formulated to give a quick, refreshing wake-up.",
    price: 0.90,
    imgSrc: "https://i.pinimg.com/736x/47/5c/7c/475c7cff6a02cd630797dcacf7df112e.jpg"
  },
  {
    id: "PROD-016",
    title: "Red bull 240ml",
    khmerTitle: "រេតប៉ូល 240ml",
    description: "An extra-milky premium blend carefully crafted for espresso coffee lovers.",
    price: 4.80,
    imgSrc: "https://i.pinimg.com/1200x/62/f1/3c/62f13c82bcd7d05bb6877f48dfe8f445.jpg"
  },
  {
    id: "PROD-017",
    title: "Yeo's 180ml",
    khmerTitle: "យ៉ូស​​ 180ml",
    description: "Indulgent coffee treat topped with a thick, luxurious layer of dairy froth.",
    price: 5.10,
    imgSrc: "https://i.pinimg.com/736x/a5/0e/63/a50e6346dc4b887487de2cd7bb48ea8c.jpg"
  },
  {
    id: "PROD-018",
    title: "NESCAFÉ Americano Zero Sugar",
    khmerTitle: "កាហ្វេ អាមេរីកាណូ អត់ស្ករ កំបំុង",
    description: "Pure, uncompromising iced black coffee without any sugar additions for clean energy.",
    price: 0.95,
    imgSrc: "https://i.pinimg.com/1200x/a3/5e/2a/a35e2a652da73ce4bf917e1eed0fe2b4.jpg"
  },
  {
    id: "PROD-019",
    title: "Special Mocha Caramel Twin",
    khmerTitle: "កាហ្វេ ម៉ូកា ការ៉ាមែល ឈ្ងុយពិសេស",
    description: "A harmonious marriage of decadent chocolate, sweet caramel, and bold coffee flavors.",
    price: 5.50,
    imgSrc: "https://i.pinimg.com/736x/a3/2c/be/a32cbe0fbf478ad276f189643ff96009.jpg"
  },
  {
    id: "PROD-020",
    title: "Yeo's 180ml",
    khmerTitle: "យ៉ូស​​ 180ml",
    description: "All the deep, fully-realized flavor you love from coffee, completely without caffeine.",
    price: 7.90,
    imgSrc: "https://i.pinimg.com/1200x/32/6f/33/326f33f464cc02103177799e693f932c.jpg"
  },

   {
    id: "PROD-001",
    title: "Instant coffee",
    khmerTitle: "កាហ្វេ",
    description: "Refreshing authentic flavor, packed in a full case of 24 convenient cans.",
    price: 8.75,
    imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgNfzK-g9FOqI9CBttc_G93K47VkRgoHPBpBwVSzQHmA&s=10https://camhappymart.com/storage/app/public/product/thumbnail/2025-10-22-68f8b9a2300d0.png"
  },
  {
    id: "PROD-002",
    title: "Brand: Benchmark USA 250g",
    khmerTitle: "កាហ្វេប៊ិន",
    description: "The official national water of Cambodia, offering a smooth and crisp taste profile.",
    price: 0.75,
    imgSrc: "https://benchmarkooty.com/wp-content/uploads/2024/04/coffee-nilgiri-benchmark-ooty-filter-coffee-250gm.jpg"
  },
  {
    id: "PROD-003",
    title: "NESCAFE Classic 200g",
    khmerTitle: "នេសកាហ្វេ",
    description: "Crafted with premium ingredients, delivering an ultra-smooth finish in every sip.",
    price: 11.50,
    imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwpll875f3jwh3B1q5lwUTEL5V7Kb3I6TXAc8QC7rPdlcPBk6dsT6uq9o&s=10"
  },
  {
    id: "PROD-004",
    title: "Mondulkiri CAFE ",
    khmerTitle: "កាហ្វេ​​​មណ្ឌលគិរី សំពោច(អារាបីកា+រ៉ូប៉ូស្តារ)",
    description: "Locally produced mineral water treated with advanced filtration for pure hydration.",
    price: 0.25,
    imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQkjNFdZMSVo2bI35Hql1_CDLoavkqDHw1UIvmHO2jc0S3d06eO4HVdCRO&s=10"
  },
  {
    id: "PROD-005",
    title: "MONDULKIRI COFFEE 3 IN 1 ORIGINAL FLAVOUR",
    khmerTitle: "កាហ្វេ​​​មណ្ឌលគិរី 3 IN 1 រសជាតិដើម",
    description: "Popular formulation energizer rich in taurine and vital B vitamins.",
    price: 0.65,
    imgSrc: "https://aeoncambodia.sgp1.digitaloceanspaces.com/image/catalog/product/8847100501257b.jpg"
  },
  {
    id: "PROD-006",
    title: "MONDULKIRI COFFEE 100% PURE ARABICA",
    khmerTitle: "កាហ្វេមណ្ឌលគិរីសុទ្ធ ១០០%",
    description: "A classic Asian botanical beverage, naturally sweetened to cool you down instantly.",
    price: 9.20,
    imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7geQaaWjo4Nn7GWO5OHVNvzvh_fuXWr-HXsLW6CVAFA&s=10"
  },
  {
    id: "PROD-007",
    title: "MONDULKIRI COFFEE SUGAR FREE",
    khmerTitle: "កាហ្វេ​​​មណ្ឌលគិរី សំពោច(អារាបីកា)",
    description: "The timeless, delicious flavor of real Coca-Cola enjoyed all around the globe.",
    price: 0.55,
    imgSrc: "https://aeoncambodia.sgp1.digitaloceanspaces.com/image/catalog/product/8847100509048bv.jpg"
  },
   {
    id: "PROD-001",
    title: "Krud Energy Drink - Gold Quality Award 2026 from Monde Selection",
    khmerTitle: "​ភេសជ្ជគ្រុឌ - រង្វាន់គុណភាពមាស ២០២៦ ពី Monde Selection",
    description: "Refreshing authentic flavor, packed in a full case of 24 convenient cans.",
    price: 8.75,
    imgSrc: "https://www.monde-selection.com/wp-content/uploads/2026/05/1045923-768x768.png"
  },
  {
    id: "PROD-002",
    title: "Brand Sprite 500ml",
    khmerTitle: "ស្ព្រាយ 500ml",
    description: "The official national water of Cambodia, offering a smooth and crisp taste profile.",
    price: 0.75,
    imgSrc: "https://www.coca-cola.com/content/dam/onexp/kh/en/brands/sprite/kh-en-sprite.png"
  },
  {
    id: "PROD-003",
    title: "Vigor Driks",
    khmerTitle: "វីហ្គរ",
    description: "Crafted with premium ingredients, delivering an ultra-smooth finish in every sip.",
    price: 11.50,
    imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS13KGBLv9A14VSDQpGj0KWtGrdq0wszvTOJOelprNCOQ&s=10"
  },
  {
    id: "Khmer Beverages – Chip Mong Group",
    title: "ICE-Drinks",
    khmerTitle: "អាយស",
    description: "Locally produced mineral water treated with advanced filtration for pure hydration.",
    price: 0.25,
    imgSrc: "https://www.chipmong.com/wp-content/uploads/2020/05/2.jpg"
  },
  {
    id: "KIT]Best selling energy drink in Cambodia | WACA | Web Analytics",
    title: "Bacas-120ml",
    khmerTitle: "បាកាស​-១២០មល",
    description: "Popular Korean formulation energizer rich in taurine and vital B vitamins.",
    price: 0.65,
    imgSrc: "https://www.waca.associates/en/wp-content/uploads/2021/02/unnamed.jpg"
  },
  {
    id: "PROD-006",
    title: "Coca-Cola original taste bottle 150ml",
    khmerTitle: "កូកាកូឡា រសជាតិដើម 150ml",
    description: "A classic Asian botanical beverage, naturally sweetened to cool you down instantly.",
    price: 9.20,
    imgSrc: "https://foodpanda.dhmedia.io/image/product-information-management/68b7fbd03b405cf6b42b48c9.jpg?height=176"
  },
  {
    id: "Cambodia Energy Drink - Gold Quality Award 2026 from Monde",
    title: "work-drinks",
    khmerTitle: "វឺក",
    description: "The timeless, delicious flavor of real Coca-Cola enjoyed all around the globe.",
    price: 0.55,
    imgSrc: "https://www.monde-selection.com/wp-content/uploads/2026/05/1046874-768x768.png"
  },
   {
    id: "FRESHY 100% ORANGE JUICE 330ML - KHMER PRODUCTS |",
    title: "FTESHY DRINK​​-120ml",
    khmerTitle: "ហ្វេសសី-120ml",
    description: "Refreshing authentic flavor, packed in a full case of 24 convenient cans.",
    price: 1.11,
    imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCDuIDjXOS9Cq23bLF97EtInheGA_ZznoQaZuqxsUEW8zVwUEFEyY2G4NI&s=10"
  },
  {
    id: "PROD-002",
    title: "Juice – Yeo's",
    khmerTitle: "ទឹកត្រឡាច​-120ml",
    description: "The official national water of Cambodia, offering a smooth and crisp taste profile.",
    price: 0.75,
    imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQkKbzxKfjAlLJhMJfQJluKu6F3D6GOs837wvV1SwPvw&s=10"
  },
  {
    id: "PROD-003",
    title: "Juice – Yeo's",
    khmerTitle: "ទឺកគូលេន",
    description: "Crafted with premium ingredients, delivering an ultra-smooth finish in every sip.",
    price: 11.50,
    imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm4OdyyadKwkOcb9pgcrgNRu_mv0RWdhWo1sdKkO0Law&s=102024-11-09-672f188d3e162.png"
  },
  {
    id: "PROD-004",
    title: "Juice – Yeo's​ 120ml",
    khmerTitle: "ទឹកចាហ៊ួយ 120ml",
    description: "Locally produced mineral water treated with advanced filtration for pure hydration.",
    price: 0.25,
    imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXk1zXj6rGFsMyVv9T5WCwh_K0adJI30xr9TXXZWIjDQ&s=10"
  },
  {
    id: "PROD-005",
    title: "Justea - Yeo's",
    khmerTitle: "ទឹកទំពាំងបាជូរ",
    description: "Popular Korean formulation energizer rich in taurine and vital B vitamins.",
    price: 0.65,
    imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDavwN40PFSLq_z98Niq3GrCNNI_l3-iCW1jNVlvOBi8g5t05gg6pmjJA&s=10"
  },
  {
    id: "King Mart eCommerce | Yeo&#039;S Soursop Juice DrinkPROD-006",
    title: "Justea - Yeo's",
    khmerTitle: "ទឹកទាបបារាំង",
    description: "A classic Asian botanical beverage, naturally sweetened to cool you down instantly.",
    price: 9.20,
    imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_8UzG0REF5iAsvanJoHKUMsJHnWig512QKu_V_2n6SGtQZF0VZYl_ijFB&s=10"
  },
  {
    id: "PROD-007",
    title: "Bird's Nest Drink - Yeo's",
    khmerTitle: "ទឹកត្រចៀកកាំ",
    description: "The timeless, delicious flavor of real Coca-Cola enjoyed all around the globe.",
    price: 0.55,
    imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTssIXWrgOHbJHthEsRLf53tvK7k4FDd_q7s8gFlP2702w5UOYAlM2JAsk&s=10"
  },
 
];

// Fallback placeholder used whenever a product image fails to load
const FALLBACK_IMG = "https://placehold.co/400x400/eef2f7/64748b?text=No+Image";

// Global state tracking variables
let activeProductPrice = 0;
let paymentTimerInterval = null;

// Temporary holder to collect checkout details before local storage write
let pendingOrderData = null; 

// 2. DOM Rendering Engine Logic Loop Execution
function renderProducts(filteredProducts = products) {
  const container = document.getElementById("product-container");
  if (!container) return;

  if (filteredProducts.length === 0) {
    container.innerHTML = `<div class="col-12 text-center text-muted my-5">រកមិនឃើញផលិតផលទេ (No products found)</div>`;
    return;
  }

  container.innerHTML = filteredProducts.map(product => {
    const displayHeading = product.khmerTitle
      ? `<span class="d-block text-secondary small text-truncate mb-1" style="font-size: 0.85rem;">${product.khmerTitle}</span>${product.title}`
      : product.title;

    return `
      <div class="col" style="cursor: pointer;" onclick="openProductDetail('${product.id}')">
        <div class="card h-100 shadow-sm border-0 rounded-3 overflow-hidden">
          <img src="${product.imgSrc}" onerror="this.onerror=null;this.src='${FALLBACK_IMG}';" class="card-img-top" alt="${product.title}" style="height: 220px; object-fit: cover;">
          <div class="card-body d-flex flex-column justify-content-between p-3">
            <div>
              <h6 class="card-title fw-bold text-dark lh-sm mb-2" style="font-size: 0.95rem; min-height: 2.4rem;">${displayHeading}</h6>
              <p class="card-text text-muted small mb-3" style="font-size: 0.8rem; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">
                ${product.description}
              </p>
            </div>
            <div class="mt-auto d-flex align-items-center justify-content-between pt-2 border-top">
              <span class="card-price fw-bold text-success fs-5">$${product.price.toFixed(2)}</span>
              <button class="btn btn-sm btn-outline-primary px-2 py-1" style="font-size: 0.75rem;"><i class="bi bi-eye me-1"></i>Details</button>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// 3. Live Search Engine Filter Mechanism
function handleSearch(event) {
  const query = event.target.value.toLowerCase().trim();

  const filtered = products.filter(product => {
    return product.title.toLowerCase().includes(query) ||
           (product.khmerTitle && product.khmerTitle.toLowerCase().includes(query)) ||
           product.description.toLowerCase().includes(query);
  });

  renderProducts(filtered);
}

// 4. Modal Window Generation Handler Logic
function openProductDetail(productId) {
  clearInterval(paymentTimerInterval);

  const product = products.find(p => p.id === productId);
  if (!product) return;

  activeProductPrice = product.price;
  const modalBody = document.getElementById("modal-dynamic-content");

  modalBody.setAttribute("data-active-id", product.id);
  modalBody.setAttribute("data-active-title", product.title);

  modalBody.innerHTML = `
    <div class="col-md-6 border-end bg-light d-flex align-items-center justify-content-center p-4" id="modal-image-panel">
      <img src="${product.imgSrc}" onerror="this.onerror=null;this.src='${FALLBACK_IMG}';" alt="${product.title}" class="img-fluid rounded" style="max-height: 350px; object-fit: contain;">
    </div>
    <div class="col-md-6 p-4 d-flex flex-column justify-content-between" id="modal-interactive-panel">
      <div>
        <span class="text-muted small fw-semibold">ID: ${product.id}</span>
        <h4 class="fw-bold text-dark mt-1 mb-0">${product.khmerTitle || ''}</h4>
        <h5 class="text-muted mb-3">${product.title}</h5>

        <div class="d-flex align-items-center mb-3">
          <div class="text-warning me-2">
            <i class="bi bi-star"></i><i class="bi bi-star"></i><i class="bi bi-star"></i><i class="bi bi-star"></i><i class="bi bi-star"></i>
          </div>
          <span class="text-muted small">(0 Reviews | 0 Orders)</span>
        </div>

        <h3 class="fw-bold text-success mb-4">$${product.price.toFixed(2)}</h3>
        <p class="text-muted small mb-4">${product.description}</p>

        <div class="d-flex align-items-center mb-4">
          <span class="me-3 fw-medium">Quantity:</span>
          <div class="input-group border rounded" style="width: 130px;">
            <button class="btn btn-link text-decoration-none text-dark border-0 px-2" type="button" onclick="updateQty(-1)">-</button>
            <input type="text" id="modal-qty" class="form-control text-center border-0 p-1 bg-white fw-bold" value="1" readonly>
            <button class="btn btn-link text-decoration-none text-dark border-0 px-2" type="button" onclick="updateQty(1)">+</button>
          </div>
        </div>

        <div class="mb-4">
          <span class="text-muted">Total Price:</span>
          <span class="fw-bold text-dark fs-5 ms-1" id="modal-total-price">$${product.price.toFixed(2)}</span>
          <span class="text-muted small ms-1">(Tax incl.)</span>
        </div>
      </div>

      <div class="d-flex gap-2">
        <button class="btn btn-dark py-2 px-4 w-50 fw-bold" onclick="startQrPaymentWorkflow()">Buy now</button>
        <button class="btn btn-success py-2 px-4 w-50 fw-bold" onclick="alert('Added to Cart!')"><i class="bi bi-cart-plus me-2"></i>Add to cart</button>
      </div>
    </div>
  `;

  let modalElement = document.getElementById('productDetailModal');
  let modalInstance = bootstrap.Modal.getInstance(modalElement);
  if (!modalInstance) {
    modalInstance = new bootstrap.Modal(modalElement);
  }
  modalInstance.show();
}

window.updateQty = function(change) {
  const qtyInput = document.getElementById("modal-qty");
  const totalDisplay = document.getElementById("modal-total-price");
  if (!qtyInput || !totalDisplay) return;

  let currentQty = parseInt(qtyInput.value) || 1;
  currentQty += change;

  if (currentQty < 1) currentQty = 1;

  qtyInput.value = currentQty;
  totalDisplay.innerText = `$${(activeProductPrice * currentQty).toFixed(2)}`;
};

// 4b. Inline QR Payment Core Engine View Rendering Mechanics
window.startQrPaymentWorkflow = function() {
  const imagePanel = document.getElementById("modal-image-panel");
  const interactivePanel = document.getElementById("modal-interactive-panel");
  const modalBody = document.getElementById("modal-dynamic-content");
  const qtyInput = document.getElementById("modal-qty");

  if (!imagePanel || !interactivePanel || !modalBody || !qtyInput) return;

  const currentQty = parseInt(qtyInput.value) || 1;
  const totalPrice = (activeProductPrice * currentQty).toFixed(2);
  const productId = modalBody.getAttribute("data-active-id");
  const productTitle = modalBody.getAttribute("data-active-title");

  // Find original product data to fetch Khmer titles and descriptions
  const product = products.find(p => p.id === productId);

  // Package transaction details safely for later storage commitment
  pendingOrderData = {
    orderId: "ORD-" + Date.now(),
    productId: productId,
    productTitle: productTitle,
    khmerTitle: product?.khmerTitle || "",
    quantity: currentQty,
    totalPrice: parseFloat(totalPrice),
    timestamp: new Date().toISOString()
  };

  // Update left panel: display summary order details alongside product image below
  imagePanel.className = "col-md-6 border-end bg-light p-4 d-flex flex-column justify-content-between";
  imagePanel.innerHTML = `
    <div>
      <span class="badge bg-secondary mb-2">ព័ត៌មានការបញ្ជាទិញ</span>
      <h5 class="fw-bold text-dark mb-1">${product?.khmerTitle || ''}</h5>
      <h6 class="text-muted mb-3">${productTitle}</h6>
      <hr class="my-2 opacity-25">
      <div class="d-flex justify-content-between small text-muted mb-1">
        <span>ចំនួន (Quantity):</span>
        <span class="fw-bold text-dark">${currentQty} ដប/កំប៉ុង/កេះ</span>
      </div>
      <div class="d-flex justify-content-between small text-muted">
        <span>តម្លៃសរុប (Total):</span>
        <span class="fw-bold text-success">$${totalPrice}</span>
      </div>
    </div>
    <div class="text-center my-auto pt-3">
      <img src="${product?.imgSrc}" onerror="this.onerror=null;this.src='${FALLBACK_IMG}';" alt="${productTitle}" class="img-fluid rounded shadow-sm bg-white p-2" style="max-height: 180px; object-fit: contain;">
    </div>
  `;

  const localQrCodeUrl = "photo_2026-05-31_22-01-27.jpg"; 

  // Update right panel: show your customized QR code and action buttons
  interactivePanel.innerHTML = `
    <div class="text-center d-flex flex-column align-items-center justify-content-center h-100 py-2">
      <div class="mb-2">
        <span class="badge bg-danger px-3 py-2 rounded-pill fw-bold" style="font-size:0.75rem; letter-spacing:0.5px;">
          <i class="bi bi-qr-code-scan me-1"></i> KHQR / ABA PAY
        </span>
      </div>
      <p class="text-muted small text-truncate w-100 mb-2">ស្កែនកូដខាងក្រោមដើម្បីទូទាត់ប្រាក់</p>

      <div class="bg-white p-3 border rounded-3 shadow-sm mb-3" style="width:200px; height:200px;">
         <img src="${localQrCodeUrl}" alt="Scan QR Code to finish transaction" class="img-fluid" style="width:100%; height:100%; object-fit: contain;">
      </div>

      <div class="mb-2">
        <div class="text-muted small mb-0">ទឹកប្រាក់ត្រូវទូទាត់សរុប</div>
        <h3 class="fw-bold text-dark mb-0">$${totalPrice}</h3>
      </div>

      <div class="alert alert-warning py-1 px-3 border-0 small mb-4 rounded-pill" style="font-size: 0.8rem;">
         <i class="bi bi-hourglass-split me-1"></i> កូដនេះនឹងហួសកំណត់ក្នុង៖ <span id="payment-timer" class="fw-bold">03:00</span>
      </div>

      <div class="w-100 d-flex gap-2">
        <button class="btn btn-outline-danger w-50 py-2 btn-sm fw-semibold" onclick="abortQrPayment('${productId}')">
          <i class="bi bi-x-circle me-1"></i> បោះបង់ (Cancel)
        </button>
        <button class="btn btn-primary w-50 py-2 btn-sm fw-bold" onclick="confirmMockPayment()">
          <i class="bi bi-check2-circle me-1"></i> ខ្ញុំបានបង់ប្រាក់រួច
        </button>
      </div>
    </div>
  `;

  beginPaymentCountdownClock(180, productId);
};

function beginPaymentCountdownClock(secondsLeft, productId) {
  clearInterval(paymentTimerInterval);
  let timeRemaining = secondsLeft;
  const timerDisplay = document.getElementById("payment-timer");

  paymentTimerInterval = setInterval(() => {
    if (timeRemaining <= 0) {
      clearInterval(paymentTimerInterval);
      alert("រយៈពេលទូទាត់ប្រាក់បានអស់កំណត់។ សូមព្យាយាមម្តងទៀត។");
      abortQrPayment(productId);
      return;
    }
    timeRemaining--;
    const minutes = Math.floor(timeRemaining / 60).toString().padStart(2, '0');
    const seconds = (timeRemaining % 60).toString().padStart(2, '0');
    if (timerDisplay) {
      timerDisplay.textContent = `${minutes}:${seconds}`;
    }
  }, 1000);
}

window.abortQrPayment = function(productId) {
  clearInterval(paymentTimerInterval);
  pendingOrderData = null; // Clear out temporary object data on user abort
  openProductDetail(productId);
};

window.confirmMockPayment = function() {
  clearInterval(paymentTimerInterval);

  // LOCAL STORAGE WRITE LOGIC
  if (pendingOrderData) {
    // 1. Pull existing saved array string from LocalStorage, or use an empty array string if empty
    const existingOrdersJson = localStorage.getItem("customer_orders") || "[]";
    
    // 2. Parse into normal JavaScript Array object
    const currentSavedOrders = JSON.parse(existingOrdersJson);
    
    // 3. Insert our freshly prepared checkout payload 
    currentSavedOrders.push(pendingOrderData);
    
    // 4. Overwrite back safely into LocalStorage
    localStorage.setItem("customer_orders", JSON.stringify(currentSavedOrders));
    
    // 5. Free up memory allocations
    pendingOrderData = null; 
  }

  alert("🎉 ជោគជ័យ! ប្រព័ន្ធបានទទួលការទូទាត់របស់អ្នករួចរាល់។ ការកម្ម៉ង់ត្រូវបានរក្សាទុក។");

  const modalElement = document.getElementById('productDetailModal');
  const modalInstance = bootstrap.Modal.getInstance(modalElement);
  if (modalInstance) {
    modalInstance.hide();
  }
};

// 5. Hooks Setup Initializations Event Routing Pipelines
window.addEventListener("DOMContentLoaded", () => {
  renderProducts();

  const searchBar = document.getElementById("product-search");
  if (searchBar) {
    searchBar.addEventListener("input", handleSearch);
  }

  const modalElement = document.getElementById('productDetailModal');
  if (modalElement) {
    modalElement.addEventListener('hidden.bs.modal', () => {
      clearInterval(paymentTimerInterval);
    });
  }
});