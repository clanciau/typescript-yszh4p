// Import stylesheets
import './style.css'

// Write TypeScript code!
const myAppDiv: HTMLElement = document.getElementById('app')

class Toto
{
  private _value:number=10

  get value(): number
  {
    return this._value
  }
  
  set value(value: number)
  {
    console.log("setValue")
    this._value = value
  }
}

const toto:Toto=new Toto
myAppDiv.innerHTML+= toto.value
toto.value=11
myAppDiv.innerHTML+= "<BR>"
myAppDiv.innerHTML+= toto.value

// Closure
var add = (function ()
{
  var counter = 0
  return function ()
  {
    counter += 1
    myAppDiv.innerHTML+= "<BR>"
    myAppDiv.innerHTML+= "counter:" + counter
    return counter
  }
})()
add()
add()
add()
//

 const promise1 = new Promise(resolve =>
 {
  setTimeout(() =>
  {
    resolve('Promise1 resolved')
  }, 2000)
 })

promise1.then((value) => {
  myAppDiv.innerHTML+= "<BR>"
  myAppDiv.innerHTML+= "value:" + value  
})

function resolveAfter4Seconds()
{
  return new Promise(resolve =>
  {
    setTimeout(() =>
    {
      resolve('resolveAfter4Seconds resolved')
    }, 4000)
  })
}

async function asyncCall1() {
  myAppDiv.innerHTML+= "<BR>"
  myAppDiv.innerHTML+= "calling asyncCall1"
  setTimeout(() => {
      myAppDiv.innerHTML+= "<BR>"
      myAppDiv.innerHTML+= "end asyncCall1"
    }, 10000)
}

async function asyncCall2()
{
  myAppDiv.innerHTML+= "<BR>"
  myAppDiv.innerHTML+= "calling asyncCall2"
  myAppDiv.innerHTML+= "<BR>"
  myAppDiv.innerHTML+= "asyncCall2 waiting..."
  const result = await resolveAfter4Seconds()
  myAppDiv.innerHTML+= "<BR>"
  myAppDiv.innerHTML+= "result:" + result
}

asyncCall1()
asyncCall2()





