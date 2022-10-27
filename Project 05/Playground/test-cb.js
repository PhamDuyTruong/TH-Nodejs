function callBackFunction(errors, value){
  if(errors){
    return new Error(errors);
  }
  // Xử lý value
  return value;
}

