var managers;
(function (managers) {
    var ScoreBoard = /** @class */ (function () {
        //constructors
        function ScoreBoard() {
            this._initialize();
        }
        Object.defineProperty(ScoreBoard.prototype, "Score", {
            //public properties
            get: function () {
                return this._score;
            },
            set: function (newScore) {
                this._score = newScore;
                this.scoreLabel.text = "Score: " + this._score;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ScoreBoard.prototype, "Lives", {
            get: function () {
                return this._lives;
            },
            set: function (newLives) {
                this._lives = newLives;
                this.livesLabel.text = "Lives: " + this._lives;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ScoreBoard.prototype, "HighScore", {
            get: function () {
                return this._highScore;
            },
            set: function (newHighScore) {
                this._highScore = newHighScore;
                this.highScoreLabel.text = "High Score: " + this._highScore;
            },
            enumerable: true,
            configurable: true
        });
        //private methods
        ScoreBoard.prototype._initialize = function () {
            this.livesLabel = new objects.Label("Lives: 0", "20px", "Consolas", "#FFFF00", 10, 10, false);
            this.scoreLabel = new objects.Label("Score: 99999", "20px", "Consolas", "#FFFF00", 500, 10, false);
            this.highScoreLabel = new objects.Label("High Score: 99999", "20px", "Consolas", "#FFFF00", 320, 140, true);
            //Initiate the Label first and then assign the values to the objects
            this.Score = 0;
            this.Lives = 5;
            this.HighScore = 0;
        };
        return ScoreBoard;
    }());
    managers.ScoreBoard = ScoreBoard;
})(managers || (managers = {}));
//# sourceMappingURL=scoreboard.js.map