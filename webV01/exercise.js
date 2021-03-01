/* eslint-disable no-alert */

// Write a JavaScript program that accept two integers and display the larger
// inconsistent output after certain try???
const findLarger = (a, b) => (a > b ? a : b);
const button1 = document.getElementById('find');

button1.onclick = () => {
    const num1 = Number(document.getElementById('number1').value);
    const num2 = Number(document.getElementById('number2').value);

    if (!num1 || !num2) {
        alert('Please input numbers!');
    } else {
        const result = findLarger(num1, num2);
        document.getElementById('output').innerHTML = `${result}<br>`;
    }
};

// Write a Javascript program that determines if a time is in office hours (9-5)
// cannot output the string???
const check = document.getElementById('checkTime');

check.onclick = () => {
    const d = new Date();
    const x = d.toLocaleTimeString();
    const t = d.getHours();
    let res = '';

    if (t >= 9 && t < 17) {
        res = "It's working hour! Please get back to work!";
    } else if (t < 9) {
        res = 'Almost working time! Get ready!';
    } else if (t >= 17) {
        res = 'Beer Time!!';
    }

    document.getElementById('outTime').innerHTML = `${res}<br><br>Current Time: ${x}`;
};

// eslint-disable-next-line max-len
// Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result.
const sort = document.getElementById('sortme');

const sortMe = (...args) => {
    for (let b = 0; b < args.length; b++) {
        for (let k = 0; k < args.length; k++) {
            if (args[b] < args[k]) {
                temp = args[k];
                args[k] = args[b];
                args[b] = temp;
            }
        }
    }
    return args;
};

sort.onclick = () => {
    document.getElementById('outlist').innerHTML = '';
    const num4 = Number(document.getElementById('number4').value);
    const num5 = Number(document.getElementById('number5').value);
    const num6 = Number(document.getElementById('number6').value);

    if (num4 || num5 || num6) {
        const sorted = sortMe(num4, num5, num6);
        document.getElementById('sortOutcome').innerHTML = 'Sorted Results are: ';
        ul = document.getElementById('outlist');
        sorted.forEach((item) => {
            const lt = document.createElement('li');
            lt.textContent = item;
            ul.appendChild(lt);
        });
    } else {
        alert('Please enter some numbers to sort!');
    }
};

// Write an if statement that:
// takes 1 argument, a language code (e.g. "es", "de", "en")
// returns "Hello, World" for the given language, for at least 3 languages. It should default to returning English.
const greet = document.getElementById('translate');

greet.onclick = () => {
    const xy = document.querySelector('input[name="flexRadioDefault"]:checked').value;

    function grt(xy) {
        switch (xy) {
        case 'es':
            return 'Hola, como estas?';
            break;
        case 'de':
            return "Hallo, wie geht's dir?";
            break;
        default:
            return 'Hello, How are you?';
            break;
        }
    }
    document.getElementById('greetings').innerHTML = `${grt(xy)}`;
};

// Write an if statement that uses 2 variables:
// A noun and a number
// returns the number and a pluralized form, like "5 cats" or "1 dog".
// If you finish both then try them out using functions or switch statements or anything else you can think of!
