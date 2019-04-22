/**
 * This strikes through list item on click once and item is marked as done
 */
const listItem = document.querySelectorAll('li')

for (let i = 0; i < listItem.length; i++) {
  listItem[i].addEventListener('click', () => {
    listItem[i] = listItem[i].style.setProperty('text-decoration', 'line-through')
  })
}
