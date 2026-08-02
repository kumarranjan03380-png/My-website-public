// Add New Feature Button

function addFeature() {

    let featureName = prompt("Enter Feature Name:");

    let featureDescription = prompt("Enter Feature Description:");

    // अगर user ने कुछ नहीं लिखा
    if (featureName === null || featureName.trim() === "") {
        return;
    }

    if (featureDescription === null || featureDescription.trim() === "") {
        featureDescription = "New software feature";
    }

    // नया card बनाना
    let card = document.createElement("div");

    card.classList.add("card");

    card.innerHTML = `
        <h3>${featureName}</h3>
        <p>${featureDescription}</p>
    `;

    // Cards container में add करना
    document.querySelector(".cards").appendChild(card);
}