const jsonUrl = "https://maelwennlbdr.github.io/Lab-Work_Part7/file.json";

function displayprehistoricCreatures(data) {
    const dinoContainer = document.getElementById('dino-container');
    data.prehistoricCreatures.forEach(dino => {
        console.log(dino.image)
        const dinoDiv = `
            <div class="dino">
                <h2>${dino.name}</h2>
                <p>Période : ${dino.period}</p>
                <p>Régime alimentaire : ${dino.diet}</p>
                <img src="${dino.image_url}" alt="${dino.name}">
            </div>`;
        dinoContainer.innerHTML += dinoDiv;
    });
}

// use of fetch() 
fetch(jsonUrl)
    .then(response => response.json())  // convertir la réponse en JSON
    .then(data => displayprehistoricCreatures(data))  // appeler la fonction pour afficher les données
    .catch(error => console.error('Erreur de récupération des données:', error));