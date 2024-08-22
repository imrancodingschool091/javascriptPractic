function clearDisplay() {
    document.getElementById('display').value = '';
}

function appendValue(value) {
    document.getElementById('display').value += value;
}

function deleteLast() {
    let display = document.getElementById('display').value;
    document.getElementById('display').value = display.slice(0, -1);
}

function calculateResult() {
    let display = document.getElementById('display').value;
    try {
        // display = display.replace(/%/g, '/100');
        // display = display.replace(/X/g, '*');
        let result = eval(display);
        document.getElementById('display').value = result;
    } catch (e) {
        alert('Invalid Expression');
    }
}
