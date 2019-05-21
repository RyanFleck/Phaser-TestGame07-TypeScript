import { CONSTANTS } from '../constants'

export default class PreloadScene extends Phaser.Scene {
  constructor() {
    super({ key: CONSTANTS.scenes.preload })
  }

  preload() {
    this.load.image('person', 'assets/img/p.png')
  }
  
  /*
   * The Interlude parameters should be refactored into a TS interface.
   */
  create() {
    this.scene.start(CONSTANTS.scenes.interlude, {
      'interludeText': 'Ryan Fleck\nPrototype Game 07',
      'nextScene': CONSTANTS.scenes.menu
    });

    /**
     * This is how you would dynamically import the mainScene class (with code splitting),
     * add the mainScene to the Scene Manager
     * and start the scene.
     * The name of the chunk would be 'mainScene.chunk.js
     * Find more about code splitting here: https://webpack.js.org/guides/code-splitting/
     */
    // let someCondition = true
    // if (someCondition)
    //   import(/* webpackChunkName: "mainScene" */ './mainScene').then(mainScene => {
    //     this.scene.add('MainScene', mainScene.default, true)
    //   })
    // else console.log('The mainScene class will not even be loaded by the browser')
  }
}
