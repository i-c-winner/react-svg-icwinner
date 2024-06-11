## Install

`npm install react-svg-icwinner`

## Use

 `import {SvgElement} from "react-svg-icwinner"
  import image from "path/to/svgfile"
  function App() {
  return <SvgElement element={image} sizes={} />  
 }
 `

## Setiings

  В качестве loader нужно использовать svg-loader https://www.npmjs.com/package/svg-loader
  либо аналог с подобным интерфейсом.

  Если используете TypeScript необходимо добавить тип для модуля

`
//index.d.ts
declare module 'react-svg-icwinner' {
interface BaseProps {
element: {
content: string,
color?: string,
attributes: {
[key: string]: string
}
},
}
type TProps=BaseProps & {[key: string]: string}
export type TMyComponent = (props: TProps) => React.ReactElement
}
`
## License
  ISC



