import { html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { TailwindElement } from "../shared/tailwind.element";

import style from "./my.element.scss?inline";

@customElement('my-element')
export class MyElement extends TailwindElement(style) {

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
          <button @click=${this._onClick} part="button" class="rounded-md border-2 px-4 py-2">
            count is ${this.count}
          </button>
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