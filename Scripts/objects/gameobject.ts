module objects {
  export class GameObject extends createjs.Bitmap {
    // Private Instance Variables
    private _dy: number;
    private _dx: number;

    // Public Properties
    public width: number;
    public height: number;
    public halfWidth: number;
    public halfHeight: number;

    // Constructors
    constructor(assetManager: createjs.LoadQueue, imageString: string) {
      super(assetManager.getResult(imageString));
      this.name = imageString;
      this._initialize();
    }

    // Private Methods
    private _initialize():void {
      this.width = this.getBounds().width;
      this.height = this.getBounds().height;
      this.halfWidth = this.width * 0.5;
      this.halfHeight = this.height * 0.5;
      this.regX = this.halfWidth;
      this.regY = this.halfHeight;
    }

    // Public Methods

    // Initialization
    public Reset():void {

    }

    public CheckBounds():void {

    }

    public Move():void {

    }

    public Start():void {

    }

    // Updates the Object every frame
    public Update():void {

    }

  }
}
