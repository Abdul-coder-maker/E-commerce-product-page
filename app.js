let addToCartBtn = document.getElementById("addToCartBtn");
let cartNumber = document.getElementById("cartNumber");
let numberOfItems = document.getElementById("numberOfItems");
let plusCount = document.getElementById("plusCount");
let minusCount = document.getElementById("minusCount");
let checkoutBtn = document.getElementById("checkout");
let cartContent = document.getElementById("cartContent");
let count = 0;
let imgLightbox = document.querySelectorAll(".images_lightbox")
let containerLightbox = document.getElementById("container_lightbox");
let closeLightbox = document.getElementById("close_lightbox");
closeLightbox.addEventListener("click", () => {
  containerLightbox.classList.remove("!flex");
});
imgLightbox.forEach((img) => {
  img.addEventListener("click", () => {
    if (window.innerWidth >= 1024) {

      containerLightbox.classList.add("!flex")
    }
    console.log("hello");
  })
});
plusCount.addEventListener("click", function () {
  count++;
  numberOfItems.textContent = count;
});
minusCount.addEventListener("click", function () {
  if (count > 0) {
    count--;
  }
  numberOfItems.textContent = count;
});
addToCartBtn.addEventListener("click", () => {
  if (count > 0) {
    cartNumber.classList.remove("hidden");
    cartContent.classList.add("flex");
    cartContent.classList.add("flex-col");
    cartContent.innerHTML = `
    <div class="flex items-center">
    <img class="w-[50px] h-[50px] mr-4 rounded" src="images/image-product-1-thumbnail.jpg" alt="image-product-1" />
    <div class="flex flex-col mr-[19px]">
    <h2 class="font-normal">Fall Limited Edition Sneakers</h2>
    <p><span class="font-normal">$125.00 x ${count}</span> <span class="font-bold text-[#1D2026]">$${
      125 * count
    }.00</span></p>
    </div>
    <input type="image" src="images/icon-delete.svg" class="w-[14px] h-[16px] cursor-pointer" alt="Delete" onclick="resetToEmpty()" />
    
    
    </div>
    
    <button id="checkout" class="w-full
            bg-[#FF7E1B]
            text-white
            pt-[22px] pb-[18px] rounded-xl font-bold mt-6">Checkut</button>
    `;
  }
  cartNumber.textContent = count;
});
function resetToEmpty() {
  cartContent.innerHTML = "Your cart is empty.";
  count = 0;
  numberOfItems.textContent = count;
  cartNumber.textContent = count;
  cartNumber.classList.add("hidden");
}
const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    // el: '.swiper-scrollbar',
  },
});
