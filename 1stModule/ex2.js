//2.1
const usuarios = [
  { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
  { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
  { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
 ];

 //without Arrow Function
 const idade = usuarios.map( function(users){ return users.idade});

 //with Arror function
 const idade1 = usuarios.map(users=>users.idade)

 //const idade = usuarios.map(users => users.idade);
 console.log(idade);
 console.log(idade1);
//2.2

const uniqueArray =usuarios.filter(function(users)
{ 
 return  users.idade>18 && users.empresa ==="Rocketseat" 
});
console.log(uniqueArray);

const unique =usuarios.filter(users=>users.idade>18 && users.empresa ==="Rocketseat"); 
console.log(unique);

//2.3 find()
/*
The find() method returns the value of the first element
 in an array that pass a test (provided as a function).
*/
const find=usuarios.find(us=>us.empresa==="Google")
console.log(find);   

//2.4
//only map() without arrow function
const x = usuarios.map(function(user)
{
  var  y = {...user, idade: user.idade*2}
 return y;
});
console.log(x);
//usuarios.map (user=>(x>5))

const result = usuarios.map(user=>({...user, idade : user.idade*2})).filter(user=>user.idade<=50);
console.log(`result`,result);                                      


//const calculo = usuarios.map(users => ({...users, idade : users.idade * 2})).filter(users => users.idade <= 50)
//console.log(calculo);


