import { LitElement, unsafeCSS } from "lit"
import { store } from "../store/store"
import style from "./tailwind.global.css?inline"

const tailwindCSS = unsafeCSS(style)

export declare class BaseTailwindCSSClass {
  protected stateChanged(): unknown
}

type Constructor<T = {}> = new (...args: any[]) => T

export const BaseElement = <T extends Constructor<LitElement>>(superClass: T, style?: unknown) => {
  class BaseTailwindCSSClass extends superClass {
    static styles = [tailwindCSS, unsafeCSS(style)]

    connectedCallback(): void {
      super.connectedCallback()
      store.subscribe(this.stateChanged)
    }
  
    protected stateChanged = (): void => {}

    // protected getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    //   return obj[key]
    // }
  }

  // Cast return type to the superClass type passed in
  return BaseTailwindCSSClass as Constructor<BaseTailwindCSSClass> & T;
}  