const imgDiv = document.getElementsByClassName("image-container")[0];
console.log(imgDiv);

function insertImage (src) {
    imgDiv.insertAdjacentHTML("afterbegin", `
        <img src="${src}" alt="cat Image">    
    `);
}

insertImage("dsfdsf")

fetch("https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=REPLACE_ME")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        insertImage(data.message)
    });
