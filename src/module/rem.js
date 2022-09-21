var baseFontSzie = 100;
var baseWidth = 375;
function setFontSize() {
    const windowWidth = window.innerWidth > 750 ? 750 : window.innerWidth;
    document.querySelector('html').style.fontSize = windowWidth / baseWidth * baseFontSzie + 'px'
}
setFontSize()
window.addEventListener('resize', () => {
    setFontSize()
}, false)