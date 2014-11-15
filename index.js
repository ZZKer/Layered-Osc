
/**
 * @module Layered Osc
 * @author ZZKer
 * @ desc Layers oscolations every x notes from top note to bottom note.
 */
 
 import tri from 'opendsp/osc';
 
 /**
  * top - the top layered note
  * bottom - the bottom layered note
  * x - the variation when adding note layers
  * type - the type of oscolation
  */
 export function LOsc(top, bottom, x){
    var output = 0;
    for(var i=top; i >= bottom; i = i - x) {
      output = output + tri(t, i);
    }
    return output;
  }
  
  