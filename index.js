document.addEventListener('DOMContentLoaded', function () {
  // create decor id that is linked to the decor id in the database
  const decorId = getDecorId();

  function getDecorId() {
    const urlParams = new URLSearchParams(window.location.search);
    let decorId = urlParams.get("id");
    if (!decorId) {
      decorId = 1;
    }
    return decorId;
  }

  // fetch data from db.json
  function fetchDecorPieces() {
    fetch(" http://localhost:3000/decors")
      .then((response) => response.json())
      .then((decors) => {
        decors.forEach((decor) => {
          const decorContainer = document.createElement("div");
          decorContainer.classList.add("decor-piece");
          decorContainer.innerHTML = `
            <h2>${decor.name}</h2>
            <img src="${decor.image}" alt="${decor.name}">
            <p class="hd">Price (dollars): ${decor.price}</p>
            <p class="hd">Description: ${decor.description}</p>
            <p class="hd">Color: ${decor.color}</p>
            <p class="hd">Material: ${decor.material}</p>
            <p class="hd">User:${decor.reviews.user}</p>
            <p class="hd">comment:${decor.reviews.comment}</p>
            <p class="hd">Height : ${decor.dimensions.height}</p>
            <p class="hd">Width: ${decor.dimensions.width}</p>
            <p class="hd">Diameter: ${decor.dimensions.diameter}</p>
            <p class="hd">Available-pieces: ${decor.in_stock}</p>
            <button id="btn">Add to Cart</button>
            <form id="buy-form">
              <input id="buy" placeholder="Enter Card Number" name="buy" />
              <input type="submit" value="Buy Now" id="submitButton"  />
            </form>
          `;

          document.getElementById("container").appendChild(decorContainer);

          // Add event listeners
          const addButton = decorContainer.querySelector('#btn');
          addButton.addEventListener('click', function () {
            addButton.innerHTML = "Added To Cart";
            alert("Item added to cart!");
          });

          // Add submit event listener to the form within this loop
          const buyForm = decorContainer.querySelector('#buy-form');
          buyForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const cardNumber = decorContainer.querySelector('#buy').value;
            alert("Delivery in a week");
          });
        });
      })
      .catch((error) => {
        console.error("Error fetching decor pieces:", error);
      });
  }
  
  
  fetchDecorPieces();
});
