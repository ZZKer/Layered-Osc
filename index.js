
/**
 * @module Layered Osc
 * @author ZZKer
 * @desc Layers oscolations every x notes from top note to bottom note.
 */
 
 import tri from 'opendsp/osc';
 
 export function layOsc(t, top, bottom, x){
    var output = 0;
    for(var i=top; i >= bottom; i = i - x){
      output = output + tri(t, i);
    }
    return output;
  }