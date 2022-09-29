import { isServer } from "solid-js/web"

export interface ConfigurableWindow {
    /*
     * Specify a custom `window` instance, e.g. working with iframes or in testing environments.
     */
    window?: Window
  }

  export interface ConfigurableDocument {
    /*
     * Specify a custom `document` instance, e.g. working with iframes or in testing environments.
     */
    document?: Document
  }

  export interface ConfigurableNavigator {
    /*
     * Specify a custom `navigator` instance, e.g. working with iframes or in testing environments.
     */
    navigator?: Navigator
  }

  export interface ConfigurableLocation {
    /*
     * Specify a custom `location` instance, e.g. working with iframes or in testing environments.
     */
    location?: Location
  }

  export const defaultWindow =  !isServer ? window : undefined
  export const defaultDocument = !isServer ? window.document : undefined
  export const defaultNavigator = !isServer ? window.navigator : undefined
  export const defaultLocation = !isServer ? window.location : undefined
