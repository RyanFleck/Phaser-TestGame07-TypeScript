/*
 * Game Constants
 * ----------------------
 * To comply with TypeScript rules, first define the
 * type within one of the interfaces, then fix any
 * incomplete interface errors in the exported 
 * constants object.
 */

interface ICONSTANTS { 

  // Game Properties
  height: number;
  width: number;

  // Complete in scenes interface below.
  scenes: ISCENES;

}

interface ISCENES { 

  preload: string;
  main: string;
  menu: string;
  interlude: string;
  

}

export const CONSTANTS: ICONSTANTS = {
  
  height: 300,
  width: 400,

  scenes: {
    preload: 'PreloadScene', // Needs to be first.
    main: 'MainScene',
    menu: 'MenuScene',
    interlude: 'InterludeScene',
  },
  
};


// Static constants in ts: https://stackoverflow.com/questions/39287239/static-constants-how
// https://stackoverflow.com/questions/34986922/define-global-constants-in-angular-2
