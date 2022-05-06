function Person(name) {
    this.name = name
    this.talk = () => {
        return 'Hello I am ${this.name}'
    }
}

const david = new Person('David')
