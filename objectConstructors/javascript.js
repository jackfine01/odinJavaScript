function Book(title,author,pages,read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    // this.info = function(){
    //     console.log( this.title + " by " + this.author + ", " + this.pages + " pages, " + this.read)
    // }
};

function info(Book){
    return (Book.title + " by " + Book.author + ", " + Book.pages + " pages, " + Book.read)
};

const Hobbit = new Book("The Hobbit", "J.R.R. Tolkien", "295", "not read.");

function Person(name) {
    this.name = name;
  }
  
  Person.prototype.sayName = function() {
    console.log(`Hello, I'm ${this.name}!`);
  };
  
  function Player(name, marker) {
    this.name = name;
    this.marker = marker;
  }
  
  Player.prototype.getMarker = function() {
    console.log(`My marker is '${this.marker}'`);
  };
  
  Object.getPrototypeOf(Player.prototype); // returns Object.prototype
  
  // Now make `Player` objects inherit from `Person`
  Object.setPrototypeOf(Player.prototype, Person.prototype);
  Object.getPrototypeOf(Player.prototype); // returns Person.prototype
  
  const player1 = new Player('steve', 'X');
  const player2 = new Player('also steve', 'O');
  
  player1.sayName(); // Hello, I'm steve!
  player2.sayName(); // Hello, I'm also steve!
  
  player1.getMarker(); // My marker is 'X'
  player2.getMarker(); // My marker is 'O'
  


  let head = {
    glasses: 1
  };
  
  let table = {
    pen: 3
  };
  
  let bed = {
    sheet: 1,
    pillow: 2
  };
  
  let pockets = {
    money: 2000
  };


  Object.setPrototypeOf(bed.prototype, table.prototype);
  Object.setPrototypeOf(pockets.prototype, bed.prototype);