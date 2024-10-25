const name =  "Shunmugesh"
const age = 24

console.log(`My name is ${name} and my age is ${age}`);

const gameName = new String ("Playground")

console.log(gameName);
console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("o"));


const newString = gameName.substring(0, 4)
console.log(newString)


const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   Shunmugesh     "
console.log(newStringOne);
console.log(newStringOne.trim());

const url ="https://shunmugesh.com/shunmugesh%20nadar"
console.log(url.replace("%20", "_"))
console.log(url.includes("nadar"))


const address = "new-mhada-jankalyan-nagar-behind-billabong-school-malad-west-mumbai"
console.log(address.split("-"))


