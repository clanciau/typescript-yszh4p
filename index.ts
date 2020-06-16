// Import stylesheets
import './style.css'

// Write TypeScript code!
const myAppDiv: HTMLElement = document.getElementById('app')

class Toto
{
private _value:number=10
  get value(): number {
        return this._value;
    }

    set value(newValue: number) {
       console.log("setValue");
            this._value = newValue;
       
    }
}

var titi=new Toto
myAppDiv.innerHTML = titi.value.toString()
titi.value=11
myAppDiv.innerHTML+= "<BR>"
myAppDiv.innerHTML+= titi.value.toString()

myAppDiv.innerHTML = "<a-scene><a-box color='red' position='0 2 -5' rotation='0 45 45' scale='2 2 2'> </a-box></a-scene>"
