export default class PhaserLogo extends Phaser.Physics.Arcade.Sprite {
  constructor(scene: Phaser.Scene, x: number, y: number, tint: number) {
    super(scene, x, y, 'person')
    scene.add.existing(this)
    scene.physics.add.existing(this)

    this.setTint(tint);

    this.setCollideWorldBounds(true)
      .setBounce(0.2)
      .setInteractive()
      .on('pointerdown', () => {
        this.setVelocityY(-300)
        this.setVelocityX(Phaser.Math.Between(-100, 100))
      })
    
    // http://labs.phaser.io/edit.html?src=src\physics\arcade\asteroids%20movement.js
  }
}
