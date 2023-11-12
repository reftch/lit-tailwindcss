import { LitElement, html } from 'lit'
import { customElement } from 'lit/decorators.js'
import { TailwindElement } from "../tailwind/tailwind.element";
import style from "./my.element.scss?inline";
import './button.element';
import { store } from '../store/store';

@customElement('my-element')
export class MyElement extends TailwindElement(LitElement, style) {

  render() {
    return html`
      <div class="text-center mx-auto my-0 p-8">
        <slot></slot>
        <div class="p-1">
          <button-element @click=${this.onClick}></button-element>
        </div>
      </div>
    `
  }

  private onClick = () => store.dispatch({ type: 'INCREMENT' })
}

declare global {
  interface HTMLElementTagNameMap {
    'my-element': MyElement
  }
}