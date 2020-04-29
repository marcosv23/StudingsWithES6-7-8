const myPromise =()=> new Promise((resolve,reject)=>
setInterval(()=> { resolve('PETERETE SUCESSFULL') },2000)
)
 const myPromise2 =()=> new Promise((resolve, reject)=>
 setInterval(()=>{resolve('COITÉ SUCESSFULL')},2000)
 );

/*(myPromise()
.then(response=>{
  console.log(response);
})
.catch(err=>{
console.warn('API NOT FOUND OR INVALID')
});
*/

//before, without async await:

//ES8
async function execPromise()
{
  const response = await myPromise();
  console.log(response);
}

execPromise();


//this sintax offer us a plain way to call a Promise()
//avoiding a code more large

//'the operator 'async' make up the function a promise'
async function executePromise()
{
  //const response = await myPromise2();
  console.log(await myPromise2());
  console.log(await myPromise2());

}
 //WITHOUT USING ASYNC AWAIT
 myPromise().then(response=> 
  {
    console.log(response)
  });

 // we can use on this form: 
executePromise().then();
//but we cannot use this:

/*
await executePromise();
*/ 

/*ERROR in ./src/main.js 108:0
Module parse failed: Cannot use
 keyword 'await' outside an async 
 function (108:0)*/

 //This error was threw cause await's use incorrect


const exPromise = async()=>
{
  console.log(await myPromise2());
  console.log(await myPromise2());
  console.log(await myPromise2());
}
exPromise();