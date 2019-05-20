interface ICONSTANTS { 
  x: number; // Test that constants object works.

  // Game Properties
  height: number;
  width: number;
}

export const CONSTANTS: ICONSTANTS = {
  x: 2,
  
  height: 600,
  width: 800,
};


// Static constants in ts: https://stackoverflow.com/questions/39287239/static-constants-how
// https://stackoverflow.com/questions/34986922/define-global-constants-in-angular-2
