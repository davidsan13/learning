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
