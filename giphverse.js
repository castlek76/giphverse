function sendApiRequest() {
    let userInput = document.getElementById("input"); 
    console.log(userInput.value); // Checks what value the user typed
    let giphyApiKey = 'dTqTHDKRagHW6yfUAFDCrXWGvBf0ikfx';
    let giphyApiUrl = `https://api.giphy.com/v1/gifs/search?q=${userInput.value}&rating=g&api_key=${giphyApiKey}`;

        fetch(giphyApiUrl).then(function(data) {
            return data.json();
        })
        .then(function(json) {
            if (json.data && json.data.length > 0) {
                let imgPath = json.data[0].images.fixed_height.url;
                let img = document.createElement("img");
                img.setAttribute("src", imgPath);
                let userInputDiv = document.getElementById("userInput");
                userInputDiv.appendChild(img);
            }
            else {console.log("No results found");
            }
            })
        .catch(function(error) {
            console.log("Error fetching data:", error);
            });
        }                           