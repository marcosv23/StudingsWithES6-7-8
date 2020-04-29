alert('Hello');
//ex 1.1 and 1.2
import User from "./exs_2ndmodule"
import{idade as i} from "./exs_2ndmodule"; 
console.log(User.info());
console.log(`I vale`,i);

//ex 1.3
import Us from "./exs_2ndmodule";
import {idade as id} from "./exs_2ndmodule";
console.log("Informations:");
console.log(Us.info(),id);

/*

import * as functions from "./soma.js"
//import {sub as Peterete } from './funcoes';    // without 'default export' we need the 'as' operator
//import somaFunction from './soma.js';    // when we use 'default export this sintax is allowed'

console.log(functions.mult(2,5));
//console.log(somaFunction(1,7));
//console.log(Peterete(5,4));

*/