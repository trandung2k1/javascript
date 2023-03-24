//Examples 1, 2
// import logger from './logger/index.js';
// logger('Hehe', 'error');

import { newLogger } from './logger/index.js';
import * as type from './constants.js';
newLogger('Hello', 'warn');
console.log(type); //Module {Symbol(Symbol.toStringTag): 'Module'}
console.log(type.TYPE_ERROR); //error
