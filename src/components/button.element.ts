import { LitElement, html } from 'lit'
import { customElement } from 'lit/decorators.js'
import { TailwindElement } from "../tailwind/tailwind.element"
import { store } from '../store/store'
import { CounterState } from '../store/reducers';

@customElement('button-element')
export class ButtonElement extends TailwindElement(LitElement) {

  connectedCallback(): void {
    super.connectedCallback();
    store.subscribe(() => {
      this.requestUpdate()
    })  
  }

  get count() {
    return (store.getState().counter as CounterState).counter
  }

  render() {
    return html`
      <button part="button" class="rounded-md border-2 px-4 py-2 cursor-pointer">
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