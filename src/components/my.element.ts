import { LitElement, html } from 'lit'
import { customElement } from 'lit/decorators.js'
import { BaseElement } from "../core/base.element"
import style from "./my.element.scss?inline"
import { store } from '../store/store'
import './button.element'

@customElement('my-element')
export class MyElement extends BaseElement(LitElement, style) {

  get count() {
    return store.getState().counter['counter']
  } 

  stateChanged = () => this.requestUpdate()

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
            ?disabled=${this.count <= 0} 
            @click=${() => store.dispatch({ type: 'DECREMENT' })}
          ></button-element>
        </div>
      </div>
    `
  }
}