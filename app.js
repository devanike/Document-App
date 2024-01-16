const hideIcon = document.getElementById('myIcon');
const topBar = document.getElementById('topBar');

hideIcon.addEventListener('click', () => {
    topBar.classList.add('hidden');
})

// Search bar
function searchList() {
    const searchInput = document.getElementById('search');
    const filter = searchInput.value.toUpperCase();
    const itemList = document.getElementById('itemList');
    const items = itemList.getElementsByTagName('li');

    for (let i = 0; i < items.length; i++) {
        const icon = items[i].getElementsByTagName('img')[0];
        const paragraph = items[i].getElementsByTagName('p')[0];
        const textContent = icon.textContent + paragraph.textContent;

        if (textContent.toUpperCase().indexOf(filter) > -1) {
            items[i].style.display = '';
        } else {
            items[i].style.display = 'none';
        }
    }
}