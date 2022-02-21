let instance = null

class SingletonClass {

    constructor() {
     this.value = Math.random(100)
    }

    printValue() {
     console.log(this.value)
    }

    static getInstance() {
     if(!instance) {
         instance = new SingletonClass()
     }

     return instance
    }
}

//module.exports = SingletonClass

const obj = SingletonClass.getInstance()
const obj2 = SingletonClass.getInstance()

obj.printValue()
obj2.printValue()

console.log("Equals:: ", obj === obj2)