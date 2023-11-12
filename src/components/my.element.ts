import { LitElement, html } from 'lit'
import { customElement } from 'lit/decorators.js'
import { TailwindElement } from "../tailwind/tailwind.element"
import style from "./my.element.scss?inline"
import { store } from '../store/store'
import './button.element'
import { CounterState } from '../store/reducers'

@customElement('my-element')
export class MyElement extends TailwindElement(LitElement, style) {

  get count() {
    return (store.getState().counter as CounterState).counter
  } 

  stateChanged = () => {
    this.renderSelector('div#count', `count is ${this.count}`)
    this.setAtrribute('button-element#dec-btn', 'disabled', this.count <= 0)
  }

  render() {
    return html`
      <div class="text-center mx-auto my-0 p-8">
        <slot></slot>
        <div class="p-1">
          <div id="count" class="p-3">count is ${this.count}</div>
          <button-element 
            id="inc-btn"
            label="+" 
            @click=${() => store.dispatch({ type: 'INCREMENT' })}
          ></button-element>
          <button-element 
            id="dec-btn"
            label="-"
            disabled 
            @click=${() => store.dispatch({ type: 'DECREMENT' })}
          ></button-element>
        </div>
      </div>
    `
  }
}