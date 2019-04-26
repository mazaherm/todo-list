/**
 * This strikes through list item on click once and item is marked as done
 */
const checkItem = (event) => {
  if (event.target.tagName === 'LI') {
    event.target.classList.toggle('checked')
  }
}

document.addEventListener('click', checkItem)

/**
 * This deletes an item from the list on click
 */
const deleteItem = (event) => {
  if (event.target.tagName === 'SPAN') {
    let span = event.target, li = span.parentNode, ul = li.parentNode
    ul.removeChild(li)
    event.stopPropagation()
  }
}

document.addEventListener('click', deleteItem)

/**
 * This adds a new item to the list
 */

const addListItem = (event) => {
  let key = event.which || event.keyCode
  if (event.target.tagName === 'INPUT' && key === 13) {
    let inputValue = event.target.value
    let newListItem = document.createElement('LI')
    let newItemValue = document.createTextNode(inputValue)
    newListItem.appendChild(newItemValue)
    document.querySelector('ul').appendChild(newListItem)
    event.target.value = '' // clears the input on enter keypress
  }
}

document.addEventListener('keypress', addListItem)
