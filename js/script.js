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
    console.log(body);
};

getProducts();
