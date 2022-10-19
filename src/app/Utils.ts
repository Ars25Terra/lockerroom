/**
 * Sets Background color of HTML body tag
 */
export default function setBodyColor(color: string) {
    document.documentElement.style.setProperty('--bodyColor', color)
}
