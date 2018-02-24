module managers{
    export class Collision {
        
        public static Check(object1:objects.GameObject, object2:objects.GameObject):void 
        {
            let P1 = new math.Vec2(object1.x, object1.y);
            let P2 = new math.Vec2(object2.x, object2.y);

            //check if there is a collision
            if((math.Vec2.Distance(P1, P2)) < (object1.halfHeight + object2.halfHeight)){
                //if I don't do this, collisions occur a lot at one collision
                if(!object2.isColliding){
                    console.log("Collision! with " + object2.name);
                    object2.isColliding = true;
                    switch(object2.name){
                        case "island":
                        createjs.Sound.play("yay");
                        objects.Game.scoreboardManager.Score += 100;
                        break;
                        case "cloud":
                        createjs.Sound.play("thunder");
                        objects.Game.scoreboardManager.Lives -= 1;
                        break;
                    }
               }
            }
            else {
                object2.isColliding = false;
            }
        }
    }
}