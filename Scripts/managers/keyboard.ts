module managers{
    export class Keyboard {
        //Public Instance Variables

        //Public Properties
        public moveForward: boolean;
        public moveBack: boolean;
        public moveLeft: boolean;
        public moveRight: boolean;
        public jump:boolean;
        public enabled: boolean;
        public paused: boolean;

        //Constructors
        constructor() {
            this.enabled = false;
            document.addEventListener('keydown', this.onKeyDown.bind(this), false);
            document.addEventListener('keyup', this.onKeyUp.bind(this), false);
        }

        //Private Methods

        //Public Methods
        public onKeyDown(event: KeyboardEvent):void {
            switch(event.keyCode) {
                case config.Keys.W:
                case config.Keys.UP_ARROW:
                this.moveForward = true;
                break;

                case config.Keys.A:
                case config.Keys.LEFT_ARROW:
                this.moveLeft = true;
                break;

                case config.Keys.S:
                case config.Keys.DOWN_ARROW:
                this.moveBack = true;
                break;

                case config.Keys.D:
                case config.Keys.RIGHT_ARROW:
                this.moveRight = true;
                break;

                case config.Keys.SPACE:
                this.jump = true;
                break;
            }
        }

        public onKeyUp(event: KeyboardEvent):void {
            switch(event.keyCode) {
                case config.Keys.W:
                case config.Keys.UP_ARROW:
                this.moveForward = false;
                break;

                case config.Keys.A:
                case config.Keys.LEFT_ARROW:
                this.moveLeft = false;
                break;

                case config.Keys.S:
                case config.Keys.DOWN_ARROW:
                this.moveBack = false;
                break;

                case config.Keys.D:
                case config.Keys.RIGHT_ARROW:
                this.moveRight = false;
                break;

                case config.Keys.SPACE:
                this.jump = false;
                break;
            }
        }
    }
}