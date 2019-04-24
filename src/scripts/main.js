/**
 * This strikes through list item on click once and item is marked as done
 */
const listItem = document.getElementsByTagName('li')

for (let i = 0; i < listItem.length; i++) {
  listItem[i].addEventListener('click', () => {
    listItem[i].classList.toggle('checked')
  })
}
