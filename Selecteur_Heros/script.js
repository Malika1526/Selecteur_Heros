"use strict";

const url = "./hero.json"; 

fetch(url).then(handleFetch);

function handleFetch(response) {
    if (response.ok) {
        response.json()
            .then(data => {
                
                const selectElement = document.querySelector('#options');

                // Boucle sur les membres pour créer des options
                data.members.forEach(element => {
                    const option = document.createElement('option');
                    option.value = element.secretIdentity; 
                    option.textContent = element.name; 
                    selectElement.appendChild(option); 
                });
                const btn = document.querySelector('#submit');
                btn.addEventListener('click', (event) => {
                    event.preventDefault(); // Ajout de preventDefault() ici
                    result(data);
                });
                function result(data) {
                   
                    const selectedValue = selectElement.value;

                    data.members.forEach(element => {
                        if (element.secretIdentity === selectedValue) {
                            const choice = document.createElement('div');
                            
                            const namePara = document.createElement('p');
                            namePara.textContent = element.name;
                            choice.appendChild(namePara);

                            const agePara = document.createElement('p');
                            agePara.textContent = element.age;
                            choice.appendChild(agePara);

                            const powersPara = document.createElement('p');
                            powersPara.textContent = element.powers.join(', ');
                            choice.appendChild(powersPara);

                            const idPara = document.createElement('p');
                            idPara.textContent = element.secretIdentity;
                            choice.appendChild(idPara);

                            const img = document.createElement('img');
                            img.innerHTML = element.img;
                            choice.appendChild(img);

                            document.body.appendChild(choice);
                        }
                    });
                }

            })
            
            .catch(error => console.error('Erreur lors de la récupération des données:', error));

    } else {

        console.error('Erreur:', response.statusText);
    }
}





form.onsubmit = (e)=> {
    e.preventDefault();

    
    const spanDelete = document.createElement('span');
    spanDelete.textContent = "x";

    // Suppression à la création
    spanDelete.onclick = ()=> suppression (choice);

    choice.textContent = selectElement.value;     
    choice.appendChild(spanDelete);
    p.appendChild(choice);

    selectElement.value = "";



}

function suppression(e) {
   
    e.remove();
}
