/*class TodoList
{
    constructor()
    {
      this.todos =[];
    }
    addTodo()
    {
      this.todos.push('Novo Todo');
      console.log(this.todos)
    }

}

const t1 = new TodoList();

document.getElementById("novoTodo").onclick = function()
{
  t1.addTodo();
};
*/
const arr=[0,1,2,3,4,5]

arr.map((item, index)=>item *2)

/*
const usuario ={
  nome: "Marcos",
  idade: 23,
  endereco: {
    rua : "Genebra",
    numero: 218,
    bairro: "Parque Novo Oratório"

  }
}
 const {endereco:{ rua, numero, bairro}}= usuario;
 //console.log( rua, numero, bairro);
*/
 //REST OPERATOR -- takes the rest of operations, or structures and repass it

 const usuario ={
  nome: "Marcos",
  idade: 23,
  endereco: {
    rua : "Genebra",
    numero: 218,
    bairro: "Parque Novo Oratório"

  }
}
console.log(1)// using SPREAD operator

 const {nome, ...rest}= usuario;
 const arr1 =[1,2,3,4,5,6,7];
 const arr2=[8,9,10,11,12,13,14,15,16]
 const arr3=[...arr1, ...arr2];
 console.log(arr3);

 const [a,b,...c] =arr3;// using SPREAD operator
 console.log(c);
 

 //SPREAD OPERATOR -- pick up a structure and repass to another TAD structure

 function soma(a,b, ...params)
 {
   
  return  params ;
 }

 console.log(soma(4,6,9,11))

//spread operator can be used either to copy a object and modify
// any property

const usuario2={...usuario, nome: "coité",  {endereco} = usuario ;
console.log(usuario2)
