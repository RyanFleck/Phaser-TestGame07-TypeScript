import { CONSTANTS } from '../constants'

export default class FpsText extends Phaser.GameObjects.Text {
  constructor(scene: Phaser.Scene) {
    super(scene, 10, 10, '', {
      color: CONSTANTS.textColor,
      fontFamily: CONSTANTS.textFont,
      fontSize: 15,
    })
    scene.add.existing(this)
    this.setOrigin(0)
  }

  public update(scene: Phaser.Scene) {
    this.setText(Math.floor(scene.game.loop.actualFps).toString());
  }
}
