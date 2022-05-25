// Factory Function ****************
function personFactory(name) {
    return {
        talk() {
            return 'Hello I am ${name}'
        }
    }
}
const counterCreater = () => {
    let count = 0;
    return () => {
        console.log(count);
        count++;
    };
}

const counter = counterCreater();

const Person = (name) => {
    const sayName = () => console.log(`my name is ${name}`);
    return {sayName};
  }
  
  const Nerd = (name) => {
    // simply create a person and pull out the sayName function with destructuring assignment syntax!
    const{sayName} = Person(name);
    const doSomethingNerdy = () => console.log('nerd stuff');
    return {sayName, doSomethingNerdy};
  }
  
  const jeff = Nerd('jeff');
  
  jeff.sayName(); //my name is jeff
  jeff.doSomethingNerdy(); // nerd stuf


function createElement(type, text, color) {
    const el = document.createElement(type)
    el.innerText = text
    el.style.color = color
    document.body.append(el)
    return {
        el,
        setText(text) {
            el.innerText = text
        },
        setColor(color) {
            el.style.color = color
        }
    }
}

const h1 = createElement('h1', 'hey guys', 'red')




/* Constructor Function ***************************
function SuperElement(type, content) {
    this.el = document.createElement(type);
    this.el.innerText = content
    document.body.append(this.el)
    this.el.addEventListener('click', () => {
        console.log(this.el)
    })
}

const array = ['a', 'b', 'c']
const myElement = array.map(item => {
    return new SuperElement('p', item)
})
const h1 = new SuperElement('h1', 'Hello')
*/