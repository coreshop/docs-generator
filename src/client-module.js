export function onRouteDidUpdate({location, previousLocation}) {
    let showRibbon = true;

    if (location.pathname === '/4.0.0' || location.pathname.startsWith('/4.0.0/CoreShop')) {
        showRibbon = false;
    }

    if (!showRibbon) {
        return;
    }

    const e = document.querySelector(".container .col");

    if (!e.classList.contains("enterprise-extension")) {
        e.insertAdjacentHTML("afterbegin", '<div class="ribbon-box"><div class="ribbon"><span>Enterprise</span></div></div>');
        e.classList.add("enterprise-extension");
    }
}
