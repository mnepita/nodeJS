console.log("inicio de programa");

setTimeout(() => {
  console.log("primer time out");
}, 3000);

setTimeout(() => {
  console.log("segundo time out");
}, 0);

setTimeout(() => {
  console.log("tercer time out");
}, 0);

console.log("Fin de programa");
