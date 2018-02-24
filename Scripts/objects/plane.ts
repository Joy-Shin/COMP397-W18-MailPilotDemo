module objects {
  export class Plane extends objects.GameObject {
    // Private Instance Variables


    // Public Properties


    // Constructors
    constructor(assetManager: createjs.LoadQueue) {
      super(assetManager, "plane");
      this.Start();
    }

    // Private Methods

    // Public Methods

    // Initialization
    public Reset():void {

    }

    public CheckBounds():void {
      // check the right boundary
      if(this.x >= 640 - this.halfWidth) {
        this.x = 640 - this.halfWidth;
      }

      // check the left boundary
      if(this.x <= this.halfWidth) {
        this.x = this.halfWidth;
      }
    }

    public Move():void {
      //mouse control
      //this.x = objects.Game.stage.mouseX;

      //keyboard controls
      if(objects.Game.keyboardManager.moveLeft){
        this.x -= 5;
      }
      if(objects.Game.keyboardManager.moveRight){
        this.x += 5;
      }

    }

    public Start():void {
      this.y = 430;
      let engineSound:createjs.AbstractSoundInstance = createjs.Sound.play("engine");
      engineSound.loop = -1;
      engineSound.volume = 0.2;
    }

    // Updates the Object every frame
    public Update():void {
      this.Move();
      this.CheckBounds();
    }

  }
}
