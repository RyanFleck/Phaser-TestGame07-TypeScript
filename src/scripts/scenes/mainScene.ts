import { CONSTANTS } from '../constants'
import PhaserLogo from '../objects/phaserLogo'
import FpsText from '../objects/fpsText'

export default class MainScene extends Phaser.Scene {
  fpsText: Phaser.GameObjects.Text

  constructor() {
    super({ key: CONSTANTS.scenes.main })
  }

  create() {
    new PhaserLogo(this, this.cameras.main.width / 2, 0, 0xFF3333)
    new PhaserLogo(this, (this.cameras.main.width / 2) - 20, 0, 0x33FF33)
    new PhaserLogo(this, (this.cameras.main.width / 2)+20, 0, 0x3333FF)
    this.fpsText = new FpsText(this)

  }

  update() {
    this.fpsText.update(this)
  }
}
//
