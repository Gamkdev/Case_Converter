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

document.getElementById ("save-text-file").addEventListener ("click", function () {
    function download(filename, text) {
        let element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
        element.setAttribute('download', filename);

        element.style.display = 'none';
        document.body.appendChild(element);

        element.click();

        document.body.removeChild(element);
    }

// Start file download.
    download("Case_Converter.txt",text.value);
});

function UpperFirstChar (separator) {
    let string = text.value.toLowerCase ().split (separator);
    console.log (string.length);
    for (let i = 0; i < string.length; i++) {
        string[i] = string[i].charAt (0).toUpperCase () + string[i].substring (1);
    }
    text.value = string.join (separator);
}