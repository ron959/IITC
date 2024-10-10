const imgDiv = document.getElementsByClassName("image-container")[0];
console.log(imgDiv);

function insertImage (src) {
    imgDiv.insertAdjacentHTML("afterbegin", `
        <img src="${src}" alt="Dog Image">    
    `);
}

insertImage("dsfdsf")

fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        insertImage(data.message)
    });