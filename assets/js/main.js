console.log('gg nety!!!');
var contenu = document.querySelector(".g-contenu");
var btn = document.querySelector(".button");
var win = document.querySelector('.win'); 
var tour = "❌";
function waitIf() {
    contenu.addEventListener('click', startGame);
}
function main() {
    createBox();
    waitIf();
}
//creation de l'interface du jeu 
function createBox() {
    for (var i = 0; i < 9; i++) {
        makeBox(i);
    }
}
function makeBox(i) {
    var box = document.createElement('div');
    box.className = 'box';
    box.id = "box-".concat(i);
    box.textContent = '';
    contenu.append(box);
}
function startGame(e) {
    var boxID = e.target.id;
    //console.log(boxID)
    if (boxID === null)
        return;
    var box = document.querySelector("#".concat(boxID));
    if (box === null || box.textContent !== "")
        return;
    //raisina ilay tour de alefa am'ilay fonction ftsn , tsy mila atao params
    box.textContent = tour;
    changeBg(box);
    var win = checkWin();
    if (!win)
        changeTurn();
    else {
        endGame();
    }
}
function changeBg(box) {
    if (tour === "❌")
        box.classList.replace("box", "❌");
    else {
        box.classList.replace("box", "🅾️");
    }
}
function endGame() {
    alert(tour + "win");
    contenu.removeEventListener('click', startGame);
    btn.addEventListener('click', resetGame);
    if (win === null)
        return;
    win.setAttribute('display', 'block');
    btn.style.visibility = "visible";
}
function resetGame() {
    tour = "❌";
    //clear all bx checked 
    resetBoxes();
    btn.style.visibility = 'hidden';
    win.textContent = "";
    //averina alefa le game 
    contenu.addEventListener('click', startGame);
}
function resetBoxes() {
    for (var i = 0; i < 9; i++) {
        var box = document.querySelector("#box-".concat(i));
        box.textContent = "";
        //reset all  animation
        var boxClass = box.className;
        box.classList.remove(boxClass);
        void box.offsetWidth;
        box.classList.add("box");
    }
}
function checkWin() {
    var boxes = getBoxes();
    return ((boxes[0] === boxes[1] && boxes[1] === boxes[2] && boxes[0] !== "") ||
        (boxes[3] === boxes[4] && boxes[4] === boxes[5] && boxes[3] !== "") ||
        (boxes[6] === boxes[7] && boxes[7] === boxes[8] && boxes[6] !== "") ||
        (boxes[0] === boxes[4] && boxes[4] === boxes[8] && boxes[0] !== "") ||
        (boxes[2] === boxes[4] && boxes[4] === boxes[6] && boxes[2] !== "") ||
        (boxes[1] === boxes[4] && boxes[4] === boxes[7] && boxes[1] !== "") ||
        (boxes[0] === boxes[3] && boxes[3] === boxes[6] && boxes[0] !== "") ||
        (boxes[2] === boxes[5] && boxes[5] === boxes[8] && boxes[2] !== ""));
}
;
function getBoxes() {
    var boxesContent = [];
    for (var i = 0; i < 9; i++) {
        var box = document.querySelector("#box-".concat(i));
        var boxContent = box.textContent;
        if (boxContent === null)
            boxesContent.push("");
        else {
            boxesContent.push(boxContent);
        }
    }
    return boxesContent;
}
function changeTurn() {
    if (tour === '❌') {
        tour = '🅾️';
    }
    else {
        tour = '❌';
    }
}
main();
