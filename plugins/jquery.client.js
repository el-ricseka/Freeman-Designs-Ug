export default ({ app }) => {
    const script = document.createElement("script");
    script.defer = true;
    script.src = "https://code.jquery.com/jquery-3.5.1.slim.min.js"

    document.head.appendChild(script);
}