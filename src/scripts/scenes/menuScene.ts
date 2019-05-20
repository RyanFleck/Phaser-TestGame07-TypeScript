import { CONSTANTS } from '../constants'
import PhaserLogo from '../objects/phaserLogo'
import FpsText from '../objects/fpsText'

export default class MenuScene extends Phaser.Scene {
  fpsText: Phaser.GameObjects.Text

  constructor() {
    super({ key: CONSTANTS.scenes.menu })
  }

  create() {
    new PhaserLogo(this, this.cameras.main.width / 2, 0)
    this.fpsText = new FpsText(this)

  }

  update() {
    this.fpsText.update(this)
  }
}
//
