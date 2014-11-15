
/**
 * test
 */
import tri from 'opendsp/osc';
import LOsc from './index';

export function dsp(t) {
    return 01 * LOsc(440, 400, tri);
  }