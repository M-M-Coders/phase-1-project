// create decor id that is linked to the decor id in the database
const decorId = getDecorId();
function getDecorId() {
  const urlParams = new URLSearchParams(window.location.search);
  let decorId = urlParams.get("id");
  if (!decorId) {
    decorIdd = 1;
  }
  return decorId;
}

// Function to update movie details
//  fetch('http://localhost:3000/decors')
//  .then(response => response.json())
//  .then((decor) =>{
//     const decorDetails = document.getElementById('details');
//     h1=document.getElementById('name').innerHTML=decor.name;
//     price=document.getElementById('price').innerHTML=decor.price;
//     description=document.getElementById('description').innerText=decor.description
//     color =document.getElementById('color').innerHTML=decor.color;
//     material =document.getElementById('material').innerHTML=decor.material
//     height =document.getElementById('height').innerHTML=decor.height
//     width = document.getElementById('')
//  })

function fetchDecorPieces() {
  fetch("https://decorniceway.onrender.com/decors")
    .then((response) => response.json())
    .then((decors) => {
      decors.forEach((decor) => {
        const decorContainer = document.createElement("div");
        decorContainer.classList.add("decor-piece");

        decorContainer.innerHTML = `
          <h1>${decor.name}</h1>
          <img src="${decor.image}" alt="${decor.name}">
          <p class="hd">Price (dollars): ${decor.price}</p>
          <p class="hd">Description: ${decor.description}</p>
          <p class="hd">Color: ${decor.color}</p>
          <p class="hd">Material: ${decor.material}</p>
          <p class="hd">Height : ${decor.dimensions.height}</p>
          <p class="hd">Width: ${decor.dimensions.width}</p>
          <p class="hd">Diametre: ${decor.dimensions.diameter}</p>
          <p class="hd">Available-pieces: ${decor.in_stock}</p>
          <button id="btn">Add to Cart</button>
          <form id="buy-form">
            <input id="buy" placeholder="Enter Card Number" name="buy" />
            <input type="submit" value="Buy Now" />
          </form>
        `;

        document.getElementById("container").appendChild(decorContainer);
      });
    })
    .catch((error) => {
      console.error("Error fetching decor pieces:", error);
    });
}
fetchDecorPieces();
