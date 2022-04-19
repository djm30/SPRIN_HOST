let sidebar = document.querySelector("#sidebar");
let sidebarParent = document.querySelector("#sidebar-parent");
console.log(sidebar);

document.addEventListener("scroll", (e) => {
    const navHeight = 70;

    const distanceFromTop = Math.abs(document.body.getBoundingClientRect().top);

    if (distanceFromTop >= navHeight) {
        sidebar.classList.add("sidebar--fixed");
    }

    if (distanceFromTop < navHeight) {
        sidebar.classList.remove("sidebar--fixed");
    }
});
