let h1 = document.querySelector("h1");

function saveToDb(data) {
    return new Promise((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random() * 10 + 1);

        if (internetSpeed > 4) {
            resolve(`Success: ${data} was saved!`);
        } else {
            reject("Failure: Weak connection!");
        }
    });
}

saveToDb("data1")
    .then((message) => {
        console.log(message);
        // You can chain another promise or operation here if needed
        return saveToDb("data2");  // Example of chaining another saveToDb call
    })
    .then((message) => {
        console.log(message);  // Handling the second saveToDb call
    })
    .catch((error) => {
        console.log(error);  // Handling the failure case
    });
