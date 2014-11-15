
/**
 * @title Layer Oscilation
 * test
 * this test uses triliniar as the oscolation,
 * but can use any oscolation function.
 * 
 * TODO Be able to give oscolation function
 */

import { layOsc } from './index';

//top frequency
var topf = 420;

//bottom frequency
var botf = 400;

//note variation
var x = 1;

//volume
var v = 0.01;

export function dsp(t) {
  var sound = layOsc(t, topf, botf, x);
  
    return v * sound;
  }