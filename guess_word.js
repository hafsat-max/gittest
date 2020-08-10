const display = document.getElementById('display');
const show = document.getElementById('show');
const input = document.getElementById('input');
let valueArray = []
let wordsArray = [
    'wasp',
    'fidget',
    'pulchritude',
    'acquint',
    'avalanche',
    'pastime',
    'munch',
    'placenta',
    'persona',
    'capsule ',
];
let selectedWord = '';
let trial = 3;
let dash = '';

function generateNumber() {
    dash = '';
    const randomNumber = Math.floor(Math.random() * 10);
    selectedWord = wordsArray[randomNumber];
    selectedWord.split('').forEach((item) => {
        display.innerHTML = dash += '_';
    });
}

function checkAnswer() {
    let found = false;
    let val = input.value.toLowerCase();
    let splitArray = dash.split('');
    if (trial >= 1) {
        console.log(valueArray)


        for (let i = 0; i < splitArray.length; i++) {

            if (selectedWord[i].toLowerCase() === val) {
                splitArray[i] = val;

                found = true;

            }
        }
        if (!found && input.value.length === 1 && !valueArray.includes(val)) {

            trial -= 1;
            show.innerHTML = 'You have ' + trial + " lives remaining..."
        } else { show.innerHTML = "" }
        dash = splitArray.join('')
        if (input.value.length > 1) {
            alert('input only one value')
        } else if (trial >= 1 && !found) {
            alert('you were wrong')
        } else if (!dash.includes('_')) {
            alert('you won the game')
        } else if (dash.includes('_') && trial >= 1) {

        } else {
            alert('game over');
            show.innerHTML = "The word is: " + selectedWord.toUpperCase()
            selectedWord = ""
        }
        if (!valueArray.includes(val)) { valueArray.push(val) }
        display.innerHTML = dash;
        input.value = "";
    }

}