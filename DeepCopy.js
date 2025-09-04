const original = {
  name: "Varsha",
  address: { city: "Mumbai" }
}

const deepCopy = JSON.parse(JSON.stringify(original));

deepCopy.address.city = "delhi"

console.log(deepCopy.address.city);
console.log(original.address.city)