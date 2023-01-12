function combine(inputs){
  let newObj = {};
  for(let i = 0; i < arguments.length; i++){
    for(let key in arguments[i]){
      if(!newObj[key]){
      newObj[key] = arguments[i][key];
      }
      else {
        newObj[key] += arguments[i][key];
      }
    }
  }
return newObj;
}