function createMobilePhone(model,size,price,number){
  const result={}
  result.model=model
  result.size=size
  result.price=price
  result.number=number
  return result
}

function MobilePhone(model,size,price,number){
  this.model=model
  this.size=size
  this.price=price
  this.number=number
  this.setNumber=function(n){this.number=n}
  this.getNumber=function(){return this.number}  
}

const p1=createMobilePhone("dd","11inch",700,"97477747")
const p2=new MobilePhone("dd","11inch",700,"97477747")
console.log(p1)
console.log(p2)
console.log(p2.getNumber())
p2.setNumber("6")
console.log(p2.getNumber())
console.log(p2)

function MobilePhone(model,size,price,number){
  let _model=model
  this.setModel=function(n){_model=n}
  this.getModel=function(){return _model}
  this.size=size
  let _price=this.price
  this.setPrice=function(n){
    if(n>_price)_price=n
  }
  this.getPrice=function(){return _price}
  this.number=number
  this.setNumber=function(n){this.number=n}
  this.getNumber=function(){return this.number}  
}
