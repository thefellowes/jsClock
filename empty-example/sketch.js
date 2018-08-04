function setup() {
    createCanvas(400, 400);
    angleMode(DEGREES);
}

function draw() {
    background(0);
    translate(200, 200);

    let hr = hour();
    let mn = minute();
    let sc = second();
    strokeWeight(6);
    stroke(150);
    //arc(0, 0, 1, 1, 0, 360);

    //Digital
    let time = hr + ":" + mn + ":" + sc;
    fill(255);
    textSize(30);
    textFont("Courier New");
    text(time, -73, 9);
    
    //Clock
    let amountOfMarkers = 0;
    noFill();
    while (amountOfMarkers != 12) {
        let loc = (360 / 12) * amountOfMarkers;
        arc(0, 0, 320, 320, loc - 0.1, loc + 0.1);
        amountOfMarkers++;
    }

    rotate(-90);

    //Hour
    strokeWeight(4);
    stroke(255);
    noFill();
    let lineHour = map(hr % 12, 0, 12, 0, 360);
    arc(0, 0, 260, 260, 0, lineHour);

    //Minute
    let lineMinute = map(mn, 0, 60, 0, 360);
    arc(0, 0, 280, 280, 0, lineMinute);

    //Second
    let lineSecond = map(sc, 0, 59, 0, 360);
    arc(0, 0, 300, 300, 0, lineSecond);
}