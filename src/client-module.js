export function onRouteDidUpdate({location, previousLocation}) {
    const regex = /^\/\d+\.\d+$/;
    const regex2 = /^\/\d+\.\d+\/CoreShop.*$/;
    const regex3 = /^\/CoreShop.*$/;

    let pathName = location.pathname;

    if (pathName === '/') {
        return;
    }

    if (pathName.endsWith('/')) {
        pathName = pathName.substring(0, pathName.length - 1);
    }

    if (regex.test(pathName) || regex2.test(pathName) || regex3.test(pathName)) {
        return;
    }

    const e = document.querySelector("main .container .col");

    if (e && !e.classList.contains("enterprise-extension")) {
        e.insertAdjacentHTML("afterbegin", '<div class="ribbon-box"><div class="ribbon"><span>Enterprise</span></div></div>');
        e.classList.add("enterprise-extension");
    }
}
