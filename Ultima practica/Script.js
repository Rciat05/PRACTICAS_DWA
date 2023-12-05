function esVocal (caracter) {

    return /^[aeiouAEIOU]$/.test(caracter);
}

function checkVowel() {
    const characterInput = document.getEelementById('character');

    const character = characterInput.value;

    const resultElement = document.getElementById('result');

    if (esVocal(character)) {
        resultElement.textContent = `El carácter '${character}' es una vocal. `;
    } else {
        resultElement.textContent = `El carácter '${character}' no es una vocal.`;
    }
}

