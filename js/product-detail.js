const apiBase = "http://olga-rainy-days-cms.local";
const wooCommerceBase = "/wp-json/wc/store";
const productBase = "/products";

const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");

const fullProductURL = `${apiBase}${wooCommerceBase}${productBase}/${productId}`;

async function getProductDetail() {
    try {
        const response = await fetch(fullProductURL);
        const product = await response.json();
        return product;
    } catch (error) {
        console.error("Error fetching product detail:", error);
    }
}

function populateProductDetail(product) {
    const productImage = document.querySelector(".product-image");
    const productTitle = document.querySelector(".product-title");
    const productDescription = document.querySelector(".product-description");

    if (product.images.length > 0) {
        productImage.src = product.images[0].src;
        productImage.alt = product.images[0].alt;
    }

    productTitle.innerText = product.name;
    productDescription.innerText = product.description;

}

async function main() {
    const product = await getProductDetail();
    if (product) {
        populateProductDetail(product);
    }
}

main();


