// 3.1
/*const arr = [1, 2, 3, 4, 5];
arr.map(function(item) {
 return item + 10;
});
*/
const arr = [1, 2, 3, 4, 5];
y=arr.map(function(item)
{
  return item + 10
})
console.log(y);

const arr2 = [1, 2, 3, 4, 5];
z= arr2.map(item=>item+10);

//3.2
// 3.2
// Dica: Utilize uma constante pra function
/*
const usuario = { nome: 'Diego', idade: 23 };
function mostraIdade(usuario) 
{
 return usuario.idade;
}
console.log(mostraIdade(usuario));
*/

const usuario = { nome: 'Diego', idade: 23 };
mostraIdade= (usuario)=> usuario.idade;
y=mostraIdade(usuario);
console.log(y)

// 3.3
// Dica: Utilize uma constante pra function

/*const nome = "Diego";
const idade = 23;
function mostraUsuario(nome = 'Diego', idade = 18) {
 return { nome, idade };
}
console.log(mostraUsuario(nome, idade));
console.log(mostraUsuario());
*/
const nome="Marcolino";
const idade =23;

mostraUsuario =(nome="Marcolino", idade=24)=>({nome,idade});
//putting nome, idade into a the same object before returning
console.log(mostraUsuario(nome,idade));


// 3.4
/*const promise = function() {
  return new Promise(
    function(resolve, reject) 
    {
  return resolve();
  })
 }
*/
 //const promise =()=> new Promise(resolve,reject =>resolve();

 const promise = () => new Promise(resolve,reject => resolve());
 //i dont understood totally

 //5.2
 const usuario55 = {
  nome: 'Diego',
  idade: 23,
  endereco: {
  cidade: 'Rio do Sul',
  uf: 'SC',
  pais: 'Brasil',
  }
 };

 // if we dont use the spread operator the result will be a 
 // Object desestructered between 'nome' and 'usuario55'
 usuario2 ={...usuario55, nome:'Gabriel'}
 usuario3 ={...usuario55, endereco:{cidade:"Lontras"}}

 console.log(usuario2);
 console.log(usuario3);

 //5.1 (a)--->

 const array = [1, 2, 3, 4, 5, 6]
 const [a1,...a2]= array;
console.log(a1,a2);



const us =
{
  name1:'Diego',
  idade:23,
  empresa: 'Rocketseat'
};

const{ name1, ...resto}= us
console.log(`Nome e resto`,name1,resto);

// 5.1 (b)
// function soma...

 function soma(...params)
 {
   //this function will return an array in 'params', cause 
   // it is the effect of rest operator at '...params';
   //REST operator creates another data structere and passes dates to it
   return params.reduce((item,next)=>item+next);
   
 }  

 

console.log(soma(1,2,3,0,1,2));

//4.1
const empres = {
  n: 'Rocketseat',
  end: {
  cidad: 'Rio do Sul',
  estad: 'SC',
  }
 };
                                   //never forgive to indicate where the informations
                                   // will be desestructured
                                   // on this case: 'empres'
 const {n, end: { cidad, estad } } =empres;
 console.log(n,cidad,estad);

 /*
 4.2--->
 function mostraInfo(usuario) {
 return `${usuario.nome} tem ${usuario.idade} anos.`;
}
mostraInfo({ nome: 'Diego', idade: 23 })
 */

   function mostraInfo(usuario)
  {
    //using Template Literals
    const {n,i} = usuario;
    return `${n} possui  ${i} anos`
  }

 
  console.log(mostraInfo(usu={ n:'Marcos', i:17 } ))
   

