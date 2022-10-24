/**
 * Sets Background color of HTML body tag
 */
export default function setBodyColor (color: string): void {
  document.documentElement.style.setProperty('--bodyColor', color)
}
