import React from 'react'

declare module SvgComponent {
    interface BaseProps {
        element: {
            content: string,
            attributes: {
                [key: string]: string
            }
        },
        sizes?: {
            viewBox?: string,
            height?: string,
            width?: string,
        }
    }

    type TProps = BaseProps & { [key: string]: any }
    export type TMyComponent = (props: TProps) => React.ReactElement
}
declare module "*.svg" {
    const component: any
    export default component
}