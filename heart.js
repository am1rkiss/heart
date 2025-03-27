let particles = [];
let scaleFactor = 15; // Размер сердца
let textColor;

function setup() {
    createCanvas(windowWidth, windowHeight);
    textColor = color(255, 20, 147);
    
    for (let i = 0; i < 300; i++) {
        particles.push(new Particle());
    }
}

function draw() {
    background(0);
    
    // Рисуем сердце из частиц
    for (let p of particles) {
        p.update();
        p.show();
    }

    // Рисуем текст внутри сердца
    fill(textColor);
    textSize(50);
    textAlign(CENTER, CENTER);
    text("Zhibek", width / 2, height / 2);
}

// Класс частиц (маленькие сердечки)
class Particle {
    constructor() {
        this.t = random(TWO_PI);
        this.size = random(5, 15);
        this.speed = random(0.01, 0.05);
        this.alpha = random(150, 255); // Прозрачность для мерцания
    }

    update() {
        this.t += this.speed;
        this.x = width / 2 + scaleFactor * (16 * pow(sin(this.t), 3));
        this.y = height / 2 - scaleFactor * (13 * cos(this.t) - 5 * cos(2 * this.t) - 2 * cos(3 * this.t) - cos(4 * this.t));
        
        // Эффект мерцания
        this.alpha = 150 + 105 * sin(frameCount * 0.1);
    }

    show() {
        fill(255, 20, 147, this.alpha); // Полупрозрачные сердечки
        noStroke();
        ellipse(this.x, this.y, this.size);
    }
}