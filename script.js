const parseCode = (str) => {
  // your code here
  const arr = str.split('0');
  
let arrays = arr.filter((element) => element !== "");
 
const firstName = arrays[0];
const lastName = arrays[1];
const id = arrays[2];

return {
  firstName,
  lastName,
  id
};
};

// Do not change the code below
const str = prompt("Enter str: ")
alert(JSON.stringify(parseCode(str)));
