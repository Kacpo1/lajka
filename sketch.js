var myData;
var myImg;
var value = 0;
var countryname = false;
var people = [];
var myLajka;

function preload() {
  myData = loadJSON('assets/peopleinspace.json');
    myImg = loadImage("./assets/kosmos.jpg");
    myLajka = loadImage("./assets/lajka.png");
    
}

function setup() {
  createCanvas(500, 500);
  
  //print(myData);
  for(var i = 0; i < myData.people.length; i++) {
    var astroData = myData.people[i];
    print(astroData);
    var newAstronaut = new Astronaut(astroData.launchdate, astroData.name, astroData.country);
    people.push(newAstronaut);
  }
    
}

function draw() {
 
  background(240);
    image(myImg,0,0,500,500);
  
	for(var i = 0; i < people.length; i++) {
	  var astronaut = people[i];
	  astronaut.move();
	  astronaut.display();
    
  }


}




function Astronaut(launchDate, name, country) {
    
    var distance = dist(this.x,this.y,mouseX,mouseY);
var mapa = map(distance,0,565,0,25);
    
    this.name = name;
    this.country = country;
    
    // transform the launch date from String
    // to a date Object calculated in milliseconds
    this.launchDate = Date.parse(launchDate);
    // calculate the time spent in space
    var timeInSpace = Date.now() - this.launchDate;
    // define radius according to the time spent in space
    this.radius = floor(timeInSpace / (1000 * 60 * 60 * 24)) / 10;
    

    
    this.x = random(this.radius, width-this.radius);
    this.y = random(this.radius, height-this.radius);
    
    this.incrementX = 1;
    this.incrementY = 1;
    
    this.display = function() {
        
        if(this.country == 'italy') {
          fill(255,0,0);
        } else {
          fill(255);
        }
        image(myLajka, this.x, this.y, this.radius*5,this.radius*5);
     
        
        fill(255);
        textAlign(CENTER);
        
        if(mouseIsPressed === true) {
            
           text(this.country, this.x + this.radius+70, this.y + this.radius+70);
            text(this.name, this.x +this.radius, this.y + this.radius+70);
           } 
    }
    
    this.move = function() {
        
        this.x += this.incrementX;
        this.y += this.incrementY;
        
        if (this.x > width - this.radius || this.x < this.radius){
            this.incrementX *= -1
            print(this.x);
            print(this.radius);
        }

        if (this.y > height - this.radius || this.y < this.radius){
            this.incrementY *= -1
            print(this.y);
            print(this.radius);
        }
    }   



    
}

function mouseDragged() {
   countryname = true;
    
   

    

}