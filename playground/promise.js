var asyncAdd = (a,b)=>{
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      if (typeof a === 'number' && typeof b === 'number') {
        resolve(a + b);
      } else {
        reject('Arguments must be numbers');
      }
    },1500);
  });
};

asyncAdd('Hola',456).then((res)=>{
  console.log('We got some numbers!');
  console.log(`The sum is ${res}`);
},(errorMessage)=>{
  console.log(`Only numbers you dummy!`);
  console.log(`${errorMessage}`);
});
// var somePromise = new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     resolve('Hey.It worked');
//   },3000);
// });
//
// somePromise.then((message)=>{
//   console.log(`Sucess: ${message}`);
// },(errorMessage)=>{
//   console.log(`Error: ${errorMessage}`);
// });
