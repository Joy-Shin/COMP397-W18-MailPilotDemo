module managers {
    export class ScoreBoard {
        //private instance variables
        private _score:number;
        private _lives: number;
        private _highScore: number;

        //public instance variables
        public livesLabel: objects.Label;
        public scoreLabel: objects.Label;
        public highScoreLabel: objects.Label;

        //public properties
        get Score():number {
            return this._score;
        }

        set Score(newScore: number){
            this._score = newScore;
            this.scoreLabel.text = "Score: " + this._score;
        }

        get Lives():number {
            return this._lives;
        }

        set Lives(newLives: number){
            this._lives = newLives;
            this.livesLabel.text = "Lives: " + this._lives;
        }

        get HighScore():number {
            return this._highScore;
        }

        set HighScore(newHighScore: number){
            this._highScore = newHighScore;
            this.highScoreLabel.text = "High Score: " + this._highScore;
        }

        //constructors
        constructor() {
            this._initialize();
        }

        //private methods
        private _initialize() {
            this.livesLabel = new objects.Label("Lives: 0", "20px", "Consolas", "#FFFF00", 10, 10, false);
            this.scoreLabel = new objects.Label("Score: 99999",  "20px", "Consolas", "#FFFF00", 500, 10, false);
            this.highScoreLabel = new objects.Label("High Score: 99999", "20px", "Consolas", "#FFFF00", 320, 140, true);

            //Initiate the Label first and then assign the values to the objects
            this.Score = 0;
            this.Lives = 5;
            this.HighScore = 0;
        }

        //public methods

    }
}