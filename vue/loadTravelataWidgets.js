export default async function() {
    const script = document.createElement('script');
    const src = `https://unpkg.com/travelata_library_components@latest/dist/widgetsInit.js`;
    script.async = true;
    script.src = src;
    console.log(script);
    script.type = 'text/javascript';
    const cl = document.getElementsByTagName('script')[0];
    cl.parentNode.insertBefore(script, cl)
    return new Promise((res, rep) => {
        script.onload = function() {
            res(window.travelata);
        }
    });
}