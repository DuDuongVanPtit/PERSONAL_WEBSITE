const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const items = $$(".item-link");
const navItems = $$(".nav_item-link");
const sections = $$("section");

// Intersection Observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            items.forEach(item => {
                if (item.getAttribute("href").substring(1) === entry.target.id) {
                    $('.item-link.active-color').classList.remove('active-color');
                    item.classList.add('active-color');
                }
            });
            navItems.forEach(navItem => {
                if (navItem.getAttribute("href").substring(1) === entry.target.id) {
                    $('.nav_item-link.active-color').classList.remove('active-color');
                    navItem.classList.add('active-color');
                }
            });
        }
    });
}, {
    threshold: 0.7 
});

sections.forEach(section => {
    observer.observe(section);
});

items.forEach(item => {
    item.onclick = function() {
        $('.item-link.active-color').classList.remove('active-color');
        this.classList.add('active-color');
    };
});

navItems.forEach(navItem => {
    navItem.onclick = function() {
        $('.nav-table_of_content').classList.remove('active');
        $('.nav_item-link.active-color').classList.remove('active-color');
        this.classList.add('active-color');
    };
});

// Toggle menu function (for mobile view)
const click = $('#click');
click.onclick = function() {
    const navTableOfContent = $('.nav-table_of_content');
    const hasActiveClass = navTableOfContent.classList.contains('active');
    if (hasActiveClass) {
        navTableOfContent.classList.remove('active');
    } else {
        navTableOfContent.classList.add('active');
    }
};


// const $ = document.querySelector.bind(document)
// const $$ = document.querySelectorAll.bind(document)

// const click = $('#click')
// const items = $$(".item-link")
// const navItems = $$(".nav_item-link")

// click.onclick = function(){
//     const navTableOfContent = $('.nav-table_of_content');
//     const hasActiveClass = navTableOfContent.classList.contains('active');

//     if (hasActiveClass) {
//         navTableOfContent.classList.remove('active');
//     } else {
//         navTableOfContent.classList.add('active');
//     }
// }

// items.forEach((item, index)=>{
//     item.onclick = function(){
//         $('.item-link.active-color').classList.remove('active-color');
//         this.classList.add('active-color');
//         console.log(this)
//     }
// })
// navItems.forEach((item, index)=>{
//     item.onclick = function(){
//         $('.nav-table_of_content').classList.remove('active');
//         $('.nav_item-link.active-color').classList.remove('active-color');
//         this.classList.add('active-color');
//         console.log(this)
//     }
// })

