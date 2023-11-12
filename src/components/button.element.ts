import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { TailwindElement } from "../tailwind/tailwind.element"

@customElement('button-element')
export class ButtonElement extends TailwindElement(LitElement) {

  @property()
  label = ''
  @property({ type: Boolean, reflect: true })
  disabled = false

  render() {
    return html`
      <button
        data-testid=${this.id}
        part="button" 
        ?disabled=${this.disabled}
        class="rounded-md border m-2 px-4 py-2 cursor-pointer disabled:text-slate-500"
      >
        ${this.label}
      </button>
    `
  }
}