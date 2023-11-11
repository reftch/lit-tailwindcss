import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { TailwindElement } from "../tailwind/tailwind.element"

@customElement('button-element')
export class ButtonElement extends TailwindElement(LitElement) {

  @property({ type: Number }) count = 0;

  render() {
    return html`
      <button part="button" class="rounded-md border-2 px-4 py-2">
        count is ${this.count}
      </button>
    `
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'button-element': ButtonElement
  }
}