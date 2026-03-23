var ps;
var myText = 'And yet this naked body of \"quotemarks\" words just now starting to play out its creative potential is not really my own. It’s part of something much larger than me— some kind of dynamic, shape-shifting intersubjectivity where I am always losing sight of myself as I improvisationally interact with The Network and, without thinking about it, intuitively manipulate the pulse of Time (as if such a thing as Time could actually exist).';

var sentence, letter;
function setup() {
    createCanvas(windowWidth, windowHeight);
    sentence="and there I was, couldn't say a thing";
    ps = new ParticleSystem(createVector(width/2, 50));
    for (var i=0; i<sentence.length; i++) {
        ps.addParticle();
    }
}

function draw() {
    background(255);
    textSize(120);
    text (myText, 20, 20, width-20, height);
    ps.move_away_from(mouseX, mouseY);
    ps.run();
}
class Particle {
  
    constructor(l) {
        this.acceleration = createVector(0, 0);
        this.velocity = createVector(0,0);//random(-0.0001, 0.00001), random(-0.001, 0.0001));
        this.position = l ? l.copy() : createVector(Math.random()*1200, Math.random()*1200,);
        this.home = this.position.copy();
        var rand = int(random(myText.length));
        this.letter=myText[rand];
    }

    run() {
        this.update();
        this.display();
    }

    // Method to update position
    update() {
        this.acceleration.x = -0.01*(this.position.x - this.home.x);
        this.acceleration.y = -0.01*(this.position.y - this.home.y);
        this.velocity.add(this.acceleration);
        this.velocity.mult(0.9);
        this.position.add(this.velocity);
        //   lifespan -= 1.0;
    }

    // Method to display
    display() {
        noStroke();//stroke(255, lifespan);
        //fill(255, lifespan);
        fill(0);
        //text(this.letter, this.position.x, this.position.y);
        rect(this.position.x, this.position.y, 100,100);
    }
}

class ParticleSystem {
    constructor(position) {
        this.origin = position.copy();
        this.particles = [];
    }

    addParticle(letter) {
        //this.particles.push(new Particle(this.origin));
        this.particles.push(new Particle(letter));
    }

    run() {
        for (let i = this.particles.length-1; i >= 0; i--) {
            this.particles[i].run();
        }
    }

    move_away_from(x, y){
        for (let i = 0; i < this.particles.length; i++) {
            let p = this.particles[i];
            let d = dist(x,y, p.position.x, p.position.y);
            if( d < 100 ){ 
                p.velocity.x += map(d,0,100,0.5,0.1)*(p.position.x - x);
                p.velocity.y += map(d,0,100,0.5,0.1)*(p.position.y - y);
            }
        }
    }
}
