class Gate extends Phaser.GameObjects.Sprite {

    constructor(scene,x,y,texture,frame) {
        super(scene,x,y,texture,frame);
        scene.add.existing(this);
    }

    update(){
        this.x -= game.settings.scrollSpeed;
        if(this.x <= 0) {
            this.reset();
        }
    }

    reset() {
        this.x = game.config.width + Math.round(Math.random() * 15);
        this.y = game.config.width/2 + Math.round(Math.random() * game.config.width/2);
    }
}