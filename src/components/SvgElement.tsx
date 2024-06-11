import React,  {useRef, useEffect} from "react";
import {SvgComponent} from "../../index";
import {defaultOptions} from "../constants";

const  SvgElement: SvgComponent.TMyComponent = (props)  =>{
    let {width, height, viewBox}= defaultOptions.sizes
    if (props.sizes) {
        if (props.sizes.height) height=props.sizes.height
        if (props.sizes.width) width=props.sizes.width
        if (props.sizes.viewBox) viewBox=props.sizes.viewBox
    }
    const refElement = useRef<SVGSVGElement>(null);
    useEffect(() => {
            refElement.current.insertAdjacentHTML('afterbegin', props.element.content)
    }, []);
    return <svg
        viewBox={viewBox}
        width={width}
        height={height}
        ref={refElement}
     >
    </svg>
}

export {SvgElement};