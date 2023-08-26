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

    for (let i = 0; i < product.images.length; i++) {
        const imgData = product.images[i];
        const img = document.createElement("img");
        img.src = imgData.src;
        img.alt = imgData.alt;
        productContainer.appendChild(img);
    }

    container.appendChild(productContainer); // Append the product container to the container in the DOM

    return productContainer;
}

function redirectToProductDetailPage(productId) {
    window.location.href = `product-detail.html?id=${productId}`;
}

async function createProductsHTML() {
    const products = await getProducts();
    const container = document.querySelector(".container");

    for (const product of products) {
        const productContainer = createProductHTML(product);
        container.appendChild(productContainer);

        productContainer.addEventListener("click", () => {
            redirectToProductDetailPage(product.id);
        });
    }
}

async function main() {
    await createProductsHTML();
}

main();