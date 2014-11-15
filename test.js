
/**
 * test
 * this test uses triliniar as the oscolation,
 * but can use anything, really.
 */
import tri from 'opendsp/osc/index';
import LOsc from './index';

//top note
var topn = 440;

//bottom note
var botn = 400;

//note variation
var x = 1;

//volume
var v = 0.1;

export function dsp(t) {
    return v * LOsc(topn, botn, x, tri);
  }