// create decor id that is linked to the decor id in the database
const decorId = getDecorId();
function getDecorId() {
    const urlParams = new URLSearchParams(window.location.search);
    let decorId = urlParams.get('id');
    if (!decorId) {
        decorIdd = 1;
    }
    return decorId;
}

 // Function to update movie details
 fetch('http://localhost:3000/decors')
 .then(response => response.json())
 .then((decor) =>{
    const decorDetails = document.getElementById('details');
    h1=document.getElementById('name').innerHTML=decor.name;
    price=document.getElementById('price').innerHTML=decor.price;
    description=document.getElementById('description').innerText=decor.description
    color =document.getElementById('color').innerHTML=decor.color;
    material =document.getElementById('material').innerHTML=decor.material
    height =document.getElementById('height').innerHTML=decor.height
    width = document.getElementById('')
 })