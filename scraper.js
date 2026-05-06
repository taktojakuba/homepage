// page data
const productpage = "https://www.x-kom.pl/p/597427-procesor-amd-ryzen-5-amd-ryzen-5-5600x.html";
const productselector = ".sc-fecFrY htdcFd parts__Price-sc-fd70cef5-1 brLLBZ";
// scraper logic
fetch(productpage)
    .then((response) => response.text())
    .then((html) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");
        const priceElement = doc.querySelector(productselector);
        const price = priceElement ? priceElement.textContent.trim() : "Price not found";
        document.getElementById("output").textContent = `Current price: ${price}`;
    })
    .catch((error) => {
        console.error("Error fetching the product page:", error);
        document.getElementById("output").textContent = "Error fetching the product page.";
    });