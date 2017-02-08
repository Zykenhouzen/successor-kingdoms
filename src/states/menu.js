class Menu extends Phaser.State {

  constructor() {
    super();
  }

  create() {
    //add background image
    this.game.stage.backgroundColor = "#AAAAAA";
    //this.background.height = this.game.world.height;
    //this.background.width = this.game.world.width;


    //add intro text
    this.menuText = this.add.text(this.game.world.centerX,this.game.world.centerY, 'Click to play', {
      font: '42px Arial',
      fill: '#ffffff',
      align: 'center',
      strokeThickness: 5,
    });
    this.menuText.anchor.set(0.5);

    this.input.onDown.add(this.onInputDown, this);
    this.canContinueToNextState = true;
  }

  update() {}

  //create some cool tweens and apply them to 'this.ready' and 'this.go'
  onInputDown () {
    if( ! this.canContinueToNextState){ //do not allow tweens to be created multiple times simultaneously
      return;
    }

    this.canContinueToNextState = false;

  }

}

export default Menu;
