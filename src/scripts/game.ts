import 'phaser'
import { CONSTANTS } from './constants'
import MainScene from './scenes/mainScene'
import PreloadScene from './scenes/preloadScene'
import MenuScene from './scenes/menuScene'
import InterludeScene from './scenes/interludeScene'

const config: GameConfig = {
  backgroundColor: CONSTANTS.bgColor,
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
      gravity: { y: CONSTANTS.gravity }
    }
  },
  render: {
    pixelArt: true
  }
}

window.addEventListener('load', () => {
  // console.log(extractKeysToArray(CONSTANTS.scenes));
  let game = new Phaser.Game(config);
})

/*
function extractKeysToArray( obj : Object ) {
  const a : string[] = [];
  Object.values(obj).forEach(x => a.push(x));
  return a;
}
*/

//
