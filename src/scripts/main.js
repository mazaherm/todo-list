/**
 * This strikes through list item on click once and item is marked as done
 */
const listItem = document.getElementsByTagName('li')

for (let i = 0; i < listItem.length; i++) {
  listItem[i].addEventListener('click', () => {
    listItem[i].classList.toggle('checked')
  })
}

/**
 * This deletes an item from the list on click
 */
const deleteItem = document.getElementsByTagName('span')

for (let i = 0; i < deleteItem.length; i++) {
  deleteItem[i].addEventListener('click', () => {
    deleteItem[i].parentNode.remove()
  })
}
