import {doSomething} from './doSomthing'

const a:string = "dfkj"
const [a, errorMessge] = doSomething()
console.log(a)
console.log(errorMessge)