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
    this.startButton = new TextButton(this, CONSTANTS.width/2, CONSTANTS.height/2, "Begin\nAgain", () => {
      this.scene.start(CONSTANTS.scenes.interlude, {
        'interludeText': 'So It Begins',
        'nextScene': CONSTANTS.scenes.main
      });
    });

  }

  update() {
    this.fpsText.update(this)
  }
}
//
