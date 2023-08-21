const apiBase = "http://olga-rainy-days-cms.local";
const wooCommerceBase = "/wp-json/wc/store";
const productBase = "/products";

const pagesBase = "/wp-json/wp/v2/pages";

const fullPagesURL = apiBase + pagesBase;
const fullProductURL = apiBase + wooCommerceBase + productBase;
const fullProductURLExample = "http://olga-rainy-days-cms.local/wp-json/wc/store/products";





async function getProducts() {
    const response = await fetch(fullProductURL);
    const body = await response.json();
    console.log(response)

}


function createProductHTML(product) {
    const container = document.querySelector(".container");
    const productContainer = document.createElement("div");
    productContainer.classList.add("product");
    productContainer.id = product.id;

    const title = document.createElement("h2")
    title.innerText = product.name;
    productContainer.append(title)

    console.log(product.images);


    for (let i = 0; i < product.images; i++) {
        const imgData = product.images[i];
        const img = document.createElement("img");
        img.src = imgData.src;
        img.alt = imgData.alt;
        productContainer.append(img)
    }



}



function createProductsHTML(product) {
    for (let i = 0; i < product.lenght; i++) {
        const product = products[i];
        createProductHTML(product)
    }
}

async function main() {
    const products = await getProducts()
    createProductsHTML
}