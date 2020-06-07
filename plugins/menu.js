export default ({ app }) => {
    const script = document.createElement("script");
    script.defer = true;
    script.src = "/js/menu.js"

    document.head.appendChild(script);
}