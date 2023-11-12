import { LitElement, unsafeCSS } from "lit"
import { store } from "../store/store"
import style from "./tailwind.global.css?inline"

const tailwindElement = unsafeCSS(style)

export declare class TailwindCSSClass {
  protected renderSelector(selector: string, value: string): unknown;
  protected stateChanged(): unknown;
}

type Constructor<T = {}> = new (...args: any[]) => T

export const TailwindElement = <T extends Constructor<LitElement>>(superClass: T, style?: unknown) => {
  class TailwindCSSClass extends superClass {
    static styles = [tailwindElement, unsafeCSS(style)]

    connectedCallback(): void {
      super.connectedCallback()
      store.subscribe(this.stateChanged)
    }
  
    renderSelector(selector: string, value: string): void {
      const el = this.shadowRoot?.querySelector(selector)
      if (el) {
        el.innerHTML = value
      }
    }

    protected stateChanged = (): void => {}
  }
  // Cast return type to the superClass type passed in
  return TailwindCSSClass as Constructor<TailwindCSSClass> & T;
}  