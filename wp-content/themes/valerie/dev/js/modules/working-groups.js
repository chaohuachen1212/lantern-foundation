// js for Working Groups section of About Us page

const workingGroupsMenu = document.querySelector('.about__working-groups-menu');
const menuItems = document.querySelectorAll('.about__working-groups-menu-item');
const contentItems = document.querySelectorAll('.about__working-groups-content-item');

if (workingGroupsMenu) {

    // first menu item and content item is selected by default
    menuItems[0].classList.add('selected');
    contentItems[0].classList.add('selected');

    function getItemIndex(item) {
        return [...menuItems].indexOf(item);
    }
    
    // select new menu item on click and deselect previous item
    menuItems.forEach( item => {
        item.addEventListener('click', () => {
            menuItems.forEach( item => item.classList.remove('selected'));
            item.classList.add('selected');
            contentItems.forEach( item => item.classList.remove('selected'));
            
            let index = getItemIndex(item);
            contentItems[index].classList.add('selected');
        })
    })
}