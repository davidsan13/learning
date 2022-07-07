

const minHeap = () => {
  let items = new Array(20);
  let size = 1;

  function insert(num) {
    this.items[size] = num;
    size += 1
    swap()
    return items
  }

  function remove() {
    firstIndex = 1;
    lastIndex = size - 1;
    [items[firstIndex], items[lastIndex]] = [items[lastIndex], items[firstIndex]];
    items.splice(lastIndex, lastIndex +1)
    
    let swapIndex;
    while(items[firstIndex * 2]) {
      console.log('hello')
      if(items[firstIndex * 2] < items[firstIndex * 2 + 1]) {
        swapIndex = firstIndex * 2
      } else {
        swapIndex = firstIndex * 2 + 1
      }
      if(items[firstIndex] > items[swapIndex]) {
        [items[firstIndex], items[swapIndex]] = [items[swapIndex], items[firstIndex]];
        firstIndex = swapIndex
      } else {
        break
      }
    }
    size -= 1
  
  }
  function swap() {
    currentIndex = size - 1
    // console.log(currentIndex)
    // console.log(this.items[currentIndex]) 
    // console.log(this.items[parentIndex])
    parentIndex = Math.floor(currentIndex / 2)
    console.log(parentIndex)
    console.log(currentIndex)
    console.log(items[currentIndex])
    if(parentIndex === 0) {return}
    while(items[currentIndex] < items[parentIndex]){
      if (items[currentIndex] < items[parentIndex]) {
        [items[currentIndex], items[parentIndex]] = [items[parentIndex], items[currentIndex]];
        currentIndex = parentIndex
        parentIndex = Math.floor(currentIndex/2)
      }
    }
  }

  
  return {items, insert, size, remove}
}

// (e) => {
//   let value = e.target.value
//   minHeap(value)
// }

let b = minHeap();

const submit = document.getElementById("submit");
const remove = document.getElementById("remove")
submit.addEventListener('click', (e) => {
  e.preventDefault()
  
  const input = document.getElementById("min").value;
  b.insert(input)
  console.log(b.items)
})

remove.addEventListener('click', (e) => {
  e.preventDefault()
  b.remove()
  console.log(b.items)
})