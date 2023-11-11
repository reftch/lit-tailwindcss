import { LitElement, unsafeCSS } from "lit"
import style from "./tailwind.global.css?inline"

const tailwindElement = unsafeCSS(style)
type Constructor<T = {}> = new (...args: any[]) => T

export const TailwindElement = <T extends Constructor<LitElement>>(superClass: T, style?: unknown) => {
  class TailwindCSSClass extends superClass {
    static styles = [tailwindElement, unsafeCSS(style)]
  }
  // Cast return type to the superClass type passed in
  return TailwindCSSClass as T;
}  