// Zo maak je een variabele aan. Een variabele is een tekst die een waarde krijgt. 
// Hier zijn 2 variabele die we hebben aangemaakt
let ditiseenvariable = 5;
let nogeengetal = 8;

// Je kunt dus ook 2 variabele bij elkaar op tellen
let totaal = ditiseenvariable + nogeengetal

document.addEventListener("DOMContentLoaded", () => {
    let elementsWithTemplate = document.querySelectorAll('[data-template]')

    elementsWithTemplate.forEach(elementWithTemplate => {
        fetch('./component/' + elementWithTemplate.dataset.template)
            .then(response => response.text())
            .then(html => {
                elementWithTemplate.innerHTML = html;
            })
    })
});
