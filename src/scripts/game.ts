import 'phaser'
import { CONSTANTS } from './constants'
import MainScene from './scenes/mainScene'
import PreloadScene from './scenes/preloadScene'
import MenuScene from './scenes/menuScene'
import InterludeScene from './scenes/interludeScene'

const config: GameConfig = {
  backgroundColor: '#ffffff',
  scale: {
    parent: 'phaser-game',
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: CONSTANTS.width,
    height: CONSTANTS.height
  },
  scene: [PreloadScene, MenuScene, InterludeScene, MainScene],
  physics: {
    default: 'arcade',
    arcade: {
      debug: false,
      gravity: { y: 400 }
    }
  },
  render: {
    pixelArt: true
  }
}

window.addEventListener('load', () => {
  console.log(`Constant x: ${CONSTANTS.x}`);
  let game = new Phaser.Game(config);
})
//
