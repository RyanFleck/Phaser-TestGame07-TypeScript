import { CONSTANTS } from '../constants'

export default class TextButton extends Phaser.GameObjects.Text {
  constructor(scene: Phaser.Scene, x: number, y: number, text: string, action: () => any) {
    super(scene, x, y, text, {
      color: CONSTANTS.textColor,
      fontFamily: CONSTANTS.textFont,
      fontSize: 20,
    })
    scene.add.existing(this);
    this.setOrigin(0.5, 0.5);
    this.setInteractive();

    this.on('pointerover', () => {
      this.setTint(CONSTANTS.textTint);
    });

    this.on('pointerout', () => {
      this.clearTint();
    });

    this.on('pointerup', action);

  }
}
