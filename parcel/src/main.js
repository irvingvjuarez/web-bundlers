const OFFSET = 0
const LIMIT = 10

const $app = document.getElementById("app")
const API = `https://api.escuelajs.co/api/v1/products?offset=${OFFSET}&limit=${LIMIT}`

async function main() {
  const response = await fetch(API)
  const products = await response.json()

  const output = products.map(product => `
  <article class="Card">
    <img src="${product.images[0]}" />
    <h2>
      ${product.title} <small>Precio $${product.price}</small>
    </h2>
  </article>
  `).join("")

  const cardsWrapper = document.createElement("section")
  cardsWrapper.classList.add("Items")
  cardsWrapper.innerHTML = output

  $app.appendChild(cardsWrapper)
}

main()