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
