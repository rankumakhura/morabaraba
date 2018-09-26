class Example extends Phaser.Scene {
  constructor() {
    super({ key: "Example" });
  }

  preload() {
    
    this.load.image("image", "assets/piece.jpg");




    //draw game grid 

   

    var line;
    var graphics;

    for (var i = 0; i < points.firstSquare.length; i++) {
      for (var x = 0; x < points.firstSquare[i].length; x++) {
        line = new Phaser.Geom.Line(
          points.firstSquare[i][0],
          points.firstSquare[i][1],
          points.firstSquare[i][2],
          points.firstSquare[i][3]
        );

        graphics = this.add.graphics({
          lineStyle: { width: 10, color: 0xaa66aa }
        });

        graphics.strokeLineShape(line);
      }
    }

    for (var i = 0; i < points.secondSquare.length; i++) {
      for (var x = 0; x < points.secondSquare[i].length; x++) {
        line = new Phaser.Geom.Line(
          points.secondSquare[i][0],
          points.secondSquare[i][1],
          points.secondSquare[i][2],
          points.secondSquare[i][3]
        );
        graphics = this.add.graphics({
          lineStyle: { width: 10, color: 0xaa66aa }
        });

        graphics.strokeLineShape(line);
      }
    }

    for (var i = 0; i < points.thirdSquare.length; i++) {
      for (var x = 0; x < points.thirdSquare[i].length; x++) {
        line = new Phaser.Geom.Line(
          points.thirdSquare[i][0],
          points.thirdSquare[i][1],
          points.thirdSquare[i][2],
          points.thirdSquare[i][3]
        );
        graphics = this.add.graphics({
          lineStyle: { width: 10, color: 0xaa66aa }
        });

        graphics.strokeLineShape(line);
      }
    }

    line = new Phaser.Geom.Line(8, 65, 181, 244);
    graphics.strokeLineShape(line);

    line = new Phaser.Geom.Line(701, 68, 532, 242);
    graphics.strokeLineShape(line);

    line = new Phaser.Geom.Line(698, 498, 531, 345);
    graphics.strokeLineShape(line);

    line = new Phaser.Geom.Line(187, 345, 8, 497);
    graphics.strokeLineShape(line);
    line = new Phaser.Geom.Line(359, 70, 359, 242);
    graphics.strokeLineShape(line);
    line = new Phaser.Geom.Line(701, 285, 532, 285);
    graphics.strokeLineShape(line);
    line = new Phaser.Geom.Line(359, 500, 359, 352);
    graphics.strokeLineShape(line);
    line = new Phaser.Geom.Line(10, 292, 178, 292);
    graphics.strokeLineShape(line);

     // invisible drag destination area
    let    g = this.add.graphics({ fillStyle: { color: 0xaa66aa } });
  
  
   
   let validpoints =[];
   let p = 0;
 for(let key of Object.values(container)){

  
  validpoints.push(new Phaser.Geom.Rectangle(key.x,key.y,key.width,key.height));
  g.fillRectShape(validpoints[p]);
  p++;
 }

 


    


    
  }




















  create() {
    player1 = {
      sprite: []
    };
    player2 = {
      sprites: []
    };



    var position = 50;
    for (var i = 0; i < 12; i++) {
      player1.sprite[i] = this.add.sprite(position, 50, "image").setInteractive();
      player2.sprites[i] = this.add.sprite(position, 552, "image").setInteractive();
      player1.sprite[i].setTint(0xff0000)
      player2.sprites[i].setTint(0xff000)
      position = position + 50;
    }

    for (var i = 0; i < player1.sprite.length; i++) {
      this.input.setDraggable(player1.sprite[i]);
      this.input.on("dragstart", (pointer, gameObject) => {
        //gameObject.setTint(0xff0000);
      });

      this.input.on("drag", function(pointer, gameObject, dragX, dragY) {
        gameObject.x = dragX;
        gameObject.y = dragY;
      });
      this.input.on("dragend", function(pointer, gameObject) {
        
          
          
          

        //console.log('x value is ' + gameObject.x + " " +' y value is ' +  gameObject.y);
        
        for(var prop in container )
        {
            //console.log(container[prop].x);
            if((gameObject.x >= container[prop].x) && (gameObject.x <= container[prop].x + container[prop].width)){
              if((gameObject.y >= container[prop].y)&&(gameObject.y <= container[prop].y + container[prop].height)){
              console.log(prop);
              }
            }
        }
       
        
         /*pointsContainter.a1.a11.occupied = 1;
          console.log("x = : " + gameObject.x + " " + " y = " + gameObject.y);
          console.log( "status changed : " + pointsContainter.a1.a11.occupied + " " + typeof gameObject);
          for(let key in pointsContainter){



            //console.log(key);
            for(let prop in pointsContainter[key]){
            //console.log( prop +  "   " +  pointsContainter[key][prop].x + " " + pointsContainter[key][prop].y  );

           
            // return gameObject.x >= pointsContainter[key][prop].x && gameObject.y <= pointsContainter[key][prop].y ? console.log( prop) : 'not valid move';

            if((gameObject.x >=pointsContainter[key][prop].x && gameObject.x <= pointsContainter[key][prop].x + pointsContainter[key][prop].width ) &&
            (gameObject.y >= pointsContainter[key][prop].y && gameObject.y <= pointsContainter[key][prop].y + pointsContainter[key][prop].height))
             {

             
              pointsContainter[key][prop].occupied =5;
              console.log(prop + " " +pointsContainter[key][prop].occupied );
 
             
          }
          else{
            console.log('invalid move');
          }

          
          
        
        }
      }
      */


        
        
      });
    }

    for (var i = 0; i < player2.sprites.length; i++) {
      this.input.setDraggable(player2.sprites[i]);
      this.input.on("dragstart", (pointer, gameObject) => {
        //gameObject.setTint(0xff000);
      });

      this.input.on("drag", function(pointer, gameObject, dragX, dragY) {
        gameObject.x = dragX;
        gameObject.y = dragY;
      });
    }

    for (var i = 0; i < player1.sprite.length; i++) {
      player1.sprite[i].displayWidth = 35;
      player2.sprites[i].displayWidth = 35;
      player1.sprite[i].displayHeight = 25;
      player2.sprites[i].displayHeight = 25;
    }
  }
  update() {
    /*
    for (var i = 0; i < player1.mysprite.length; i++) {
      player1.mysprite[i].on("pointerdown", function(pointer) {
        this.setTint(0xff0000);

        console.log("it works");
      });
    }
    for (var i = 0; i < player2.sprites.length; i++) {
      player2.sprites[i].on("pointerdown", function(pointer) {
        this.setTint(0xff000);

        //add move function

        console.log("it works");
      });
    }
    */
  }
}
