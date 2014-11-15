
/**
 * @module Layered Osc
 * @author ZZKer
 * @desc Layers oscolations every x notes from top note to bottom note.
 */
 
 import tri from 'opendsp/osc';
 
 export function layOsc(t, topn, bottomn, x){
    var output = 0;
    for(var i=topn; i >= bottomn; i = i - x){
      output = output + tri(t, i);
    }
    return output;
  }