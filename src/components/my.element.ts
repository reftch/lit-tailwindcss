import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { TailwindElement } from "../tailwind/tailwind.element";
import style from "./my.element.scss?inline";
import './button.element';

@customElement('my-element')
export class MyElement extends TailwindElement(LitElement, style) {

  @property({ type: Number }) count = 0
  @property() accessor myProperty = "initial value"

  render() {
    return html`
      <div class="text-center mx-auto my-0 p-8">
        <div>
          ${this.myProperty}
        </div>
        <slot></slot>
        <div class="p-1">
          <button-element .count=${this.count} @click=${this._onClick}></button-element>
        </div>
      </div> 
    `
  }

  private _onClick() {
    this.count++
    this.myProperty = 'Hello, from accessor property'
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-element': MyElement
  }
}