var config = {
    type:Phaser.AUTO,
    width:800,
    height:600,
 
    scene : [startScreen,Example]
};
var game = new Phaser.Game(config);
let player1;
let player2;


// grid lines points 
let points = {
    firstSquare: [
      [10, 70, 700, 70],
      [700, 70, 700, 500],
      [700, 500, 10, 500],
      [10, 500, 10, 70]
    ],
    secondSquare: [
      [104, 170, 600, 170],
      [600, 170, 600, 412],
      [600, 412, 104, 412],
      [104, 412, 104, 170]
    ],
    thirdSquare: [
      [177, 239, 535, 239],
      [535, 239, 535, 350],
      [535, 350, 177, 350],
      [177, 350, 177, 239]
    ]
  };



//invisible container object for drap squares

let container = {
      
    a1:{
      x:5,
      y:64,
      width:40,
      height:30,
      contains:[]
      
      
    },

    a2:{
     x:341,
     y:64,
     width:40,
     height:30

    },

    a3:{
     x:666,
     y:64,
     width:40,
     height:30
    },

    a4:{
        x:666,
        y:270,
        width:40,
        height:30
       },

    a5:{
     x:666,
     y:475,
     width:40,
     height:30
    },
    a6:{
        x:340,
        y:475,
        width:40,
        height:30
       },
    a7:{
        x:5,
        y:476,
        width:40,
        height:30
       },
    a8:{
        x:11,
        y:280,
        width:40,
        height:30
       },
    b1:{
        x:84,
        y:160,
        width:40,
        height:30
       },

    b2:{
        x:340,
        y:155,
        width:40,
        height:30
       },
    b3:{
        x:580,
        y:155,
        width:40,
        height:30
       },

    b4:{
        x:580,
        y:270,
        width:40,
        height:30
       },

    b5:{
        x:580,
        y:390,
        width:40,
        height:30
       },

    b6:{
        x:340,
        y:390,
        width:40,
        height:30
       },

    b7:{
        x:84,
        y:390,
        width:40,
        height:30
       },

    b8:{
        x:84,
        y:280,
        width:40,
        height:30
       },

    c1:{
        x:156,
        y:226,
        width:40,
        height:30
       },

    c2:{
        x:340,
        y:226,
        width:40,
        height:30
       },

    c3:{
        x:515,
        y:226,
        width:40,
        height:30
       },

    c4:{
        x:515,
        y:270,
        width:40,
        height:30
       },

    c5:{
        x:515,
        y:335,
        width:40,
        height:30
       },

    c6:{
        x:340,
        y:335,
        width:40,
        height:30
       },

    c7:{
        x:156,
        y:335,
        width:40,
        height:30
       },

    c8:{
        x:156,
        y:275,
        width:40,
        height:30
       },
     


  };


