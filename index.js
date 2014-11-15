
/**
 * @module Layered Osc
 * @author ZZKer
 */
 
 import { sin, saw, ramp, tri, sqr, noise } from './index';

  export function LOsc(top, bottom, type){
    var output = 0;
    for(var i=top; i >= bottom; i--) {
      output = output + tri(t, i);
    }
    return output;
  }
  
  