var arr = [1,5,7,8,11];
var i=0;
arr.map( function(item, index,arr)//, thisValue  just here can be used a "thisValue"  wether we use a Class
{
  /**
   * 
   * An Array containing the results of calling 
   * the provided function for each element 
   * in the original array.
   */

  // these itens 'index' and 'arr' are not a obligation
  // these function doesn't be used when the array is without values;
  // these function handles every element of array
  // these function don't modify the original's array content
 console.log(`The item ${index+1} = ${item}`);
// console.log(`Array is ${arr}`)
 i++;
});


const sum =arr.reduce( (tot,next)=> tot - next);


//this function use recursivity to apply an operation for the elements of array object

console.log(` sum vale ${sum}yar`);

 const x= arr.filter(item=>
{ return item%2!=0;
/**
 * 
 * does not changes the original array
 * does not execute if the array is without values
 * array.filter(function(currentValue, index, arr), thisValue)
 *  */ 


});

console.log(` filter retorna: ${x}`);

const teste = ()=> ({nome:"Marcos"});
console.log(teste());