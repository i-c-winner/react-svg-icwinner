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
        },
    }

  export type TProps = BaseProps & { [key: string]: any }
}

declare module '*.svg' {
    const content: any
    export default content;
}

