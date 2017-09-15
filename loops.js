var forLoop = function(anArray){
  for(var i = 1; i<= 25;i++){
    anArray.push(`I am ${i} strange loop`)
  }
  return anArray;
}

var whileLoop = function(aNumber){
  while(aNumber > 0){
    console.log(aNumber)
    aNumber--
  }
  
}
