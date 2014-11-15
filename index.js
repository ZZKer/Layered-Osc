
/**
 * @module Layered Osc
 * @author ZZKer
 */
 
  export function LOsc(top, bottom, type) {
    var output = 0;
    for(var i=top; i >= bottom; i--) {
      output = output + type(t, i);
    }
    
  return output;
  }
  
  