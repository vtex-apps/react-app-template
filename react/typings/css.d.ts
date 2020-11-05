declare module '*.css' {
  type Styles = {
    [selector: string]: string
  }

  export default Styles
}
