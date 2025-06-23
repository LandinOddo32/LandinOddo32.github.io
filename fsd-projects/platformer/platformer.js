$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();
     


    // TODO 2 - Create Platforms
    createPlatform(0, 120, 350, 20,"#b88e54")
    createPlatform(0, 650, 300, 20,"#b88e54")
    createPlatform(500, 200, 20, 1000,"#b88e54")
    createPlatform(400, 515, 100, 20,"#b88e54")
    createPlatform(200, 400, 100, 20,"#b88e54")
    createPlatform(490, 300, 20, 20,"#b88e54")
    createPlatform(500, 200, 700, 20,"#b88e54")
    createPlatform(1300, 200, 200, 20,"#b88e54")
    createPlatform(1200, 450, 100, 20,"#b88e54")
    createPlatform(1300, 520, 100, 20,"#b88e54")
    createPlatform(900, 400, 120, 20,"#b88e54")
    createPlatform(900, 400, 20, 100,"#b88e54")
    createPlatform(820, 480, 100, 20,"#b88e54")
    createPlatform(910, 200, 100, 100,"#b88e54")
    createPlatform(500, 450, 100, 20,"#b88e54")
    createPlatform(700, 320, 100, 20,"#b88e54")
    createPlatform(500, 700, 200, 20,"#b88e54")
    createPlatform(800, 700, 100, 20,"#b88e54")
    createPlatform(985, 400, 20, 80,"#b88e54")
    createPlatform(100, 300, 20, 20,"#b88e54")
    createPlatform(1300, 700, 100, 20,"#b88e54")
    createPlatform(1100, 600, 100, 20,"#b88e54")
    



    // TODO 3 - Create Collectables
    createCollectable("database", 50, 50)
    createCollectable("database", 726, 260)
    createCollectable("database", 580, 630)
    createCollectable("database", 1335, 640)
    createCollectable("database", 90, 250)
    
    
    // TODO 4 - Create Cannons
    createCannon("left", 100, 5200)
    createCannon("left", 150, 5200)
    createCannon("left", 200, 5200)
    createCannon("left", 250, 5200)
    createCannon("left", 300, 5200)
    createCannon("left", 350, 5200)
    createCannon("right", 790, .00000001, 1000,)
    createCannon("bottom", 290, 900)
    createCannon("left", 650, 3000
    )

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
