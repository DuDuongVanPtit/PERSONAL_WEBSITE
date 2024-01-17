const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const click = $('#click')
const items = $$(".item-link")
const navItems = $$(".nav_item-link")

click.onclick = function(){
    const navTableOfContent = $('.nav-table_of_content');
    const hasActiveClass = navTableOfContent.classList.contains('active');

    if (hasActiveClass) {
        navTableOfContent.classList.remove('active');
    } else {
        navTableOfContent.classList.add('active');
    }
}

items.forEach((item, index)=>{
    item.onclick = function(){
        $('.item-link.active-color').classList.remove('active-color');
        this.classList.add('active-color');
        console.log(this)
    }
})
navItems.forEach((item, index)=>{
    item.onclick = function(){
        $('.nav-table_of_content').classList.remove('active');
        $('.nav_item-link.active-color').classList.remove('active-color');
        this.classList.add('active-color');
        console.log(this)
    }
})

