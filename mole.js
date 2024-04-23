let currMoleTile; // Geçerli olan köstebek div öğesini tutar
let currPlantTile; // Geçerli olan bitki div öğesini tutar
let score = 0; // Oyuncunun skorunu tutar
let gameOver = false; // Oyunun bitip bitmediğini belirtir

window.onload = function() {
    setGame(); // Oyun yüklendiğinde setGame fonksiyonunu çağırır
}

function setGame() {
    // Oyun tahtasını oluşturur
    for (let i = 0; i < 9; i++) { 
        let tile = document.createElement("div");
        tile.id = i.toString();
        tile.addEventListener("click", selectTile);
        document.getElementById("board").appendChild(tile);
    }
    // Köstebek ve bitkiyi rastgele yerleştiren zamanlayıcıları başlatır
    setInterval(setMole, 1000); 
    setInterval(setPlant, 2000);
}

function getRandomTile() {
    // Rastgele bir div öğesi seçer
    let num = Math.floor(Math.random() * 9);
    return num.toString();
}

function setMole() {
    if (gameOver) {
        return; // Oyun bittiyse işlem yapma
    }
    if (currMoleTile) {
        currMoleTile.innerHTML = ""; // Önceki köstebek div öğesini temizler
    }
    let mole = document.createElement("img");
    mole.src = "./monty-mole.png"; // Köstebek resmini ekler

    let num = getRandomTile();
    if (currPlantTile && currPlantTile.id == num) {
        return; // Eğer bitki div öğesi aynı konumdaysa işlem yapma
    }
    currMoleTile = document.getElementById(num); // Yeni köstebek div öğesini seçer
    currMoleTile.appendChild(mole); // Köstebek resmini ekler
}

function setPlant() {
    if (gameOver) {
        return; // Oyun bittiyse işlem yapma
    }
    if (currPlantTile) {
        currPlantTile.innerHTML = ""; // Önceki bitki div öğesini temizler
    }
    let plant = document.createElement("img");
    plant.src = "./piranha-plant.png"; // Bitki resmini ekler

    let num = getRandomTile();
    if (currMoleTile && currMoleTile.id == num) {
        return; // Eğer köstebek div öğesi aynı konumdaysa işlem yapma
    }
    currPlantTile = document.getElementById(num); // Yeni bitki div öğesini seçer
    currPlantTile.appendChild(plant); // Bitki resmini ekler
}

function selectTile(){
    if (gameOver) {
        return; // Oyun bittiyse işlem yapma
    }
    if (this == currMoleTile){
        score += 10; // Köstebek div öğesi tıklanırsa skoru artırır
        document.getElementById("score").innerText = score.toString(); // Skoru günceller
    }
    else if (this == currMoleTile){ // Hata: aynı koşulu iki kez kontrol ediyoruz
        document.getElementById("score").innerText = "  GAME OVER" + score.toString(); // Oyunu bitirir
        gameOver = true; // Oyun durumunu değiştirir
    }
}
