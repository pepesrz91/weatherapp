var somePromise = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve('Hey.It worked');
  },3000);
});

somePromise.then((message)=>{
  console.log(`Sucess: ${message}`);
},(errorMessage)=>{
  console.log(`Error: ${errorMessage}`);
});
