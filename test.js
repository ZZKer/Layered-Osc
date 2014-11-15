
/**
 * test
 * this test uses triliniar as the oscolation,
 * but can use anything, really, maybe, if it worked right...
 * 
 * CURRENTLY BROKEN FOR SOME REASON
 */

import layOsc from './index';

//top note
var topn = 440;

//bottom note
var botn = 400;

//note variation
var x = 1;

//volume
var v = 0.1;

export function dsp(t) {
  var sound = layOsc(t, topn, botn, x);
  
    return v * sound;
  }