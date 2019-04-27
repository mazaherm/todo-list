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
 * This adds a new item to the list on ENTER keypress
 */

const addListItemOnEnter = (event) => {
  let key = event.which || event.keyCode
  if (event.target.tagName === 'INPUT' && key === 13) {
    let inputValue = event.target.value
    let newLi = document.createElement('LI')

    // creates delete span inside newLi
    let deleteButton = document.createElement('SPAN')
    deleteButton.innerHTML = 'X '
    newLi.appendChild(deleteButton)

    if (inputValue) {
      let newItemValue = document.createTextNode(inputValue)
      newLi.appendChild(newItemValue)
      document.querySelector('ul').appendChild(newLi)
    }
    event.target.value = '' // clears the input on ENTER keypress
  }
}

document.addEventListener('keypress', addListItemOnEnter)
