/*

  filename:git://gormanau:tower-defence/run.ts
  created: 2020-11-6T19:54:32
  appName: gcode
  splash: https://gcode.com.au/images/ios/ios-appicon-180-180.png
  icon: https://gcode.com.au/images/ios/ios-appicon-180-180op.png
  icon180x180: https://gcode.com.au/images/ios/ios-appicon-180-180op.png
  mockFrame: iphoneX
  splashBackgroundColor: #005040
  splashDuration: 2000

*/

import { Window, Document, Debug, Console } from "@wasmdom/dom";
import { PWA, PWAParams, Page, PageParams, Div, DivParams } from '@wasmdom/pwa';

//import arcade from 'main.ts';

var homePage: Page;
var secondPage: Page;
var aPWA: PWA;
var window: Window, document: Document, console: Console;

export function run(w: Window, d: Document, c: Console): i32 {
    window = w;
    document = d;
    console = c;
    
    
  
    return 0;

}
