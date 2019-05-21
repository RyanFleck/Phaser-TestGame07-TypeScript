import { CONSTANTS } from '../constants'
import FpsText from '../objects/fpsText'
import TextButton from '../objects/textButton'

export default class MenuScene extends Phaser.Scene {
  fpsText: Phaser.GameObjects.Text;
  startButton: Phaser.GameObjects.Text;

  constructor() {
    super({ key: CONSTANTS.scenes.menu })
  }

  create() {
    this.fpsText = new FpsText(this)
    this.startButton = new TextButton(this, CONSTANTS.width/2, CONSTANTS.height/2, "Begin\nagain", () => {
      this.scene.start(CONSTANTS.scenes.interlude, {
        'interludeText': 'Welcome back.',
        'nextScene': CONSTANTS.scenes.main
      });
    });

    // Play with shapes:

    // http://labs.phaser.io/edit.html?src=src/game%20objects\shapes\iso%20triangle.js

  }

  update() {
    this.fpsText.update(this);
    
  }
}
//
