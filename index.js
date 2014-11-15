
/**
 * @module Layered Osc
 * @author ZZKer
 * @desc Layers oscolations every x frequencies
 *    from top f to bottom f.
 * 
 * Types Of Sounds
 *  With smaller ranges within normal note frequencies,
 * this creates an interesting sound oscolation. At higher
 * frequency ranges, crackling and popping can occur.
 * The speed of the oscolation changes in proportion to x,
 * since at higher x values less frequencies are being
 * played. With large ranges and x values, this creates a
 * strobe effect. When using top frequencies over 1000 and
 * x values at 100, monitor feedback sounds can be created.
 */
 
 import { tri } from 'opendsp/osc';
 
 /**
  * @param t time
  * @param topf the top frequency
  * @param bottomf the bottom frequency
  * @x the interval between intermediate frequencies
  */
 export function layOsc(t, topf, bottomf, x){
    var output = 0;
    for(var i=topf; i >= bottomf; i = i - x){
      output = output + tri(t, i);
    }
    return output;
  }