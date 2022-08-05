const text = document.querySelector ("textarea");

document.getElementById ("upper-case").addEventListener ("click", function () {
    text.value = text.value.toUpperCase ();
});

document.getElementById ("lower-case").addEventListener ("click", function () {
    text.value = text.value.toLowerCase ();
});

document.getElementById ("proper-case").addEventListener ("click", function () {
    UpperFirstChar (' ');
});

document.getElementById ("sentence-case").addEventListener ("click", function () {
    UpperFirstChar ('. ');
});

function UpperFirstChar (separator) {
    let string = text.value.toLowerCase ().split (separator);
    console.log (string.length);
    for (let i = 0; i < string.length; i++) {
        string[i] = string[i].charAt (0).toUpperCase () + string[i].substring (1);
    }
    text.value = string.join (separator);
}