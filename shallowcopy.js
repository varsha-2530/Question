const obj = {
    name:"varsha",
  addres:{city:"delhi"}
}

// const shallowCopy = {...obj}
const shallowCopy = Object.assign({},obj)


console.log(shallowCopy)


obj.name = "vishu"
shallowCopy.addres.city="goa"

console.log(obj.name)
console.log(obj.addres.city);