function enter()
{
    noStroke();
    background(241, 69, 40);

    fill(42, 59, 85);
    circle(250, 300, 400);

    fill(255);
    textSize(50);
    textAlign(CENTER, CENTER);
    text("Joepie, het is je gelukt!", width / 2, height / 2)

    textSize(14);
    textAlign(CENTER, CENTER);
    text("Klik hier om terug te gaan.", width / 2, height - 20);
}

function mouseClicked()
{
    showScene("Game");
}