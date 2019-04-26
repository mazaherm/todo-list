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
