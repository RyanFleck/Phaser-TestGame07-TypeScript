import 'phaser'
import MainScene from './scenes/mainScene'
import PreloadScene from './scenes/preloadScene'
import MenuScene from './scenes/menuScene'
import InterludeScene from './scenes/interludeScene'

const DEFAULT_WIDTH = 800
const DEFAULT_HEIGHT = 600

const config: GameConfig = {
  backgroundColor: '#ffffff',
  scale: {
    parent: 'phaser-game',
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: DEFAULT_WIDTH,
    height: DEFAULT_HEIGHT
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
  let game = new Phaser.Game(config)
})
//
