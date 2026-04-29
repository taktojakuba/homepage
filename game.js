const options = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
function spin(array) {
    let result = [];
    for(let i = 0; i < array.length; i++) {
        result.push(array[Math.floor(Math.random() * array.length)]);
    }
    return result;
}
function checkWin(result) {
    if(result[0] === result[1] && result[1] === result[2]) {
        return "win";
    }
    if(result[0] === result[1] || result[1] === result[2] || result[0] === result[2]) {
        return "neutral";
    }
    return "lose";
}
function display(array) {
    for(let i = 0; i < array.length; i++) {
        document.getElementById("slot" + (i + 1)).textContent = array[i];
    }
}
function play() {
    const result = spin(options);
    const winStatus = checkWin(result);
    document.getElementById('status').textContent = winStatus;
    display(result);
}