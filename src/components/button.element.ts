import { LitElement, html } from 'lit'
import { customElement } from 'lit/decorators.js'
import { TailwindElement } from "../tailwind/tailwind.element"
import { store } from '../store/store'
import { CounterState } from '../store/reducers'

@customElement('button-element')
export class ButtonElement extends TailwindElement(LitElement) {

  get count() {
    return (store.getState().counter as CounterState).counter
  } 

  stateChanged = () => this.renderSelector('div#title-btn', `count is ${this.count}`)

  render() {
    return html`
      <button part="button" class="rounded-md border-2 px-4 py-2 cursor-pointer">
        <div id="title-btn">count is 0</div>
      </button>
    `
  }
}