    module math {
    export class Vec2 extends createjs.Point{
        //private instance variables

        //public properties

        //constructors
        constructor(x:number = 0, y:number = 0){
            super(x,y);
        }
        //public methods

        //private methods


        //calculate the distance between two Vec2
        public static Distance(P1:Vec2, P2:Vec2):number {
            return Math.floor(Math.sqrt(Math.pow(P2.x - P1.x, 2) + Math.pow(P2.y - P1.y, 2)));
        }
    }
}