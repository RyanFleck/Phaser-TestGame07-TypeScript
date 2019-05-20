import { CONSTANTS } from '../constants'
import PhaserLogo from '../objects/phaserLogo'
import FpsText from '../objects/fpsText'
import { Time } from 'phaser';

export default class InterludeScene extends Phaser.Scene {
  fpsText: Phaser.GameObjects.Text
  textDisplayed: string;
  nextScene: string;

  constructor() {
    super({ key: CONSTANTS.scenes.interlude })
  }
  
  init(data) { 
    this.textDisplayed = data.interludeText;
    this.nextScene = data.nextScene;
  }

  create() {
    this.add
      .text(this.cameras.main.width/2, this.cameras.main.height/2, this.textDisplayed, {
        color: '#000000',
        fontSize: 30,
        align: 'center'
      })
      .setOrigin(0.5, 0.5);
    
    this.time.addEvent({
      delay: 2000,
      callbackScope: this,
      callback: () => { 
        this.scene.start(this.nextScene);
      }
    });
  }

}
