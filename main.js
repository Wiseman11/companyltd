// change navbar style on scroll

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
})

// show/hide faq answer
const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');


        // change icon
        const icon = faq.querySelector('.faq__icon ion-icon');
        if (icon.getAttribute("name") === 'chevron-down-outline') {
            icon.setAttribute("name", "chevron-up-outline");
        } else{
            icon.setAttribute("name", "chevron-down-outline");
        }
    })
})



// filters
document.addEventListener("DOMContentLoaded", function() {
    const filterButtons = document.querySelectorAll(".filter-button");
    const items = document.querySelectorAll(".service__member");

    filterButtons.forEach(button => {
        button.addEventListener("click", function() {
            filterButtons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");

            const filterValue = this.getAttribute("data-filter");

            items.forEach(item => {
                item.classList.remove("filtered");
                if (filterValue !== "all" && !item.classList.contains(filterValue)) {
                    item.classList.add("filtered");
                }
            })
        })
    })
})












// show/hide nav menu
const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");


menuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})


// close nav menu
const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}

closeBtn.addEventListener('click', closeNav)