function getDogImages(numPics) {
    fetch('https://dog.ceo/api/breeds/image/random/' + numPics)
        .then(response => response.json())
        .then(responseJson => {
            console.log(responseJson);
        
            let dogHtmlString = " ";
            for(let i=0; i < numPics; i++) {
                dogHtmlString += `<img src="${responseJson.message[i]}" alt="random dog images class="dog-pics">`
            }
            
            $(".dogImages").html(dogHtmlString)
        })
        .catch(error => console.log("Something went wrong: " + error));
}

function handleFormSubmit() {
    $("form").submit(function(event) {
        event.preventDefault();
        let numPics = $("input[type=number]").val();
        getDogImages(numPics);
    });
}


function loadApp() {
    console.log("App is loaded! Waiting for submit!");
    handleFormSubmit();
}

$(loadApp());
