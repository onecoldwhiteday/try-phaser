export class Start extends Phaser.Scene {

    constructor() {
        super('Start');
    }

    preload() {
        this.load.image('background', 'assets/background.png');
        this.load.image('trees', 'assets/trees.png');
        this.load.image('stone', 'assets/stonge.png');
        this.load.image('bush', 'assets/bush.png');

        this.load.spritesheet('deer', 'assets/deer.png', { frameWidth: 461, frameHeight: 367 });
    }

    create() {
        // movement illusion & bg
        this.background = this.add.tileSprite(640, 360, 1280, 720, 'background');
        this.trees = this.add.tileSprite(640, 361, 1280, 720, 'trees');

        // controls
        this.cursorKeys = this.input.keyboard.createCursorKeys(); 

        // obstacles
        this.obstacle = this.add.tileSprite('stone');

        // character
        const deer = this.add.sprite(480, 359, 461, 332, 'deer');
        deer.setScale(.8);

        deer.anims.create({
            key: 'run',
            frames: this.anims.generateFrameNumbers('deer', { start: 0, end: 8.5 }),
            frameRate: 15,
            repeat: -1
        });

        deer.play('run');
        this.deer = deer;
    }

    update() {
        this.trees.tilePositionX += 3;

        if (this.cursorKeys.space.isUp) {
           this.deer.setY = 480;
        }
    }
    
}
