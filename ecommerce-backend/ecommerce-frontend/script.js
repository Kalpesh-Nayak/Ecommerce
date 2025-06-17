async function fetchProducts() {
  const res = await fetch("http://localhost:8080/products");
  const data = await res.json();
  const table = document.getElementById("product-table");
  table.innerHTML = "";

  data.forEach(p => {
    table.innerHTML += `<tr>
      <td>${p.id}</td>
      <td>${p.name}</td>
      <td>₹${p.price}</td>
      <td>${p.stock}</td>
    </tr>`;
  });
}

async function addProduct() {
  const name = document.getElementById("name").value;
  const price = parseFloat(document.getElementById("price").value);
  const stock = parseInt(document.getElementById("stock").value);

  const product = { name, price, stock };

  await fetch("http://localhost:8080/products/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product)
  });

  // Clear input fields
  document.getElementById("name").value = "";
  document.getElementById("price").value = "";
  document.getElementById("stock").value = "";

  fetchProducts(); // Reload table
}

window.onload = fetchProducts;
