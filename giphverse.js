function sendApiRequest() {
    let userInput = document.getElementById("input"); 
    console.log(userInput.value); 
    let giphyApiKey = "dTqTHDKRagHW6yfUAFDCrXWGvBf0ikfx";
    let giphyApiUrl = 
        `https://api.giphy.com/v1/gifs/search?q=${userInput.value}&rating=g&api_key=${giphyApiKey}`;

    fetch(giphyApiUrl).then(function(data) {
        return data.json();
    })
    .then(function(json) {
        let userInputDiv = document.getElementById("userInput");
        userInputDiv.innerHTML = ""; 

        if (json.data && json.data.length > 0) {
            json.data.forEach(function(gif) {
                let imgPath = gif.images.fixed_height.url;
                let img = document.createElement("img");
                img.setAttribute("src", imgPath);
                img.classList.add("gif"); 
                userInputDiv.appendChild(img);
            });
        } else {
            console.log("No results found");
        }
    })
    .catch(function(error) {
        console.log("Error fetching data:", error);
    });
}
function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');
}