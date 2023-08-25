
const apiBase = "http://olga-rainy-days-cms.local";
const wooCommerceBase = "/wp-json/wc/store";
const productBase = "/products";

const fullProductURL = apiBase + wooCommerceBase + productBase;

async function getProducts() {
    const response = await fetch(fullProductURL);
    const products = await response.json();
    return products;
}

function createProductHTML(product) {
    const container = document.querySelector(".container");
    const productContainer = document.createElement("div");
    productContainer.classList.add("product");
    productContainer.id = product.id;

    const title = document.createElement("h2");
    title.innerText = product.name;
    productContainer.appendChild(title);

    if (product.images.length > 0) {
        const img = document.createElement("img");
        img.src = product.images[0].src;
        img.alt = product.images[0].alt;
        productContainer.appendChild(img);
    }

    const checkInButton = document.createElement("a");
    checkInButton.innerText = "Check In";
    checkInButton.href = product.permalink; // Link to the product detail page
    checkInButton.classList.add("check-in-button");
    productContainer.appendChild(checkInButton);

    container.appendChild(productContainer);
}


async function createProductsHTML() {
    const products = await getProducts();
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        createProductHTML(product);
    }
}

async function main() {
    await createProductsHTML();
}

main();
