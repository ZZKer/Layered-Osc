
/**
 * test
 * this test uses triliniar as the oscolation,
 * but can use anything, really, maybe, if it worked right...
 */

import LayOsc from 'ZZKer/Layered-Osc';

//top note
var topn = 440;

//bottom note
var botn = 400;

//note variation
var x = 1;

//volume
var v = 0.1;

export function dsp(t) {
    return v * LayOsc(topn, botn, x);
  }