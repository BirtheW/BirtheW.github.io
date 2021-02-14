function enter()
{
    sprite('game.happy', 100, 465);

    noStroke();
    fill("Navy")

    background(241, 69, 40);

    fill(42, 59, 85);
    circle(600, 300, 400);

    textSize(20);
    textAlign(CENTER, CENTER);
    fill("White");

    text("Hallo vriend!", 500, 200)
    text("Ik heb iets leuk voor jou klaar staan...", 500, 290)
    text("... dus laten we er aan beginnen", 500, 325)

    textSize(14);
    textAlign(CENTER, CENTER);
    text("Klik hier om verder te gaan.", 500, 580);
}

function mouseClicked()
{
    showScene("Game");
}