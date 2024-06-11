import React, { useRef, useEffect } from "react";
import { defaultOptions } from "../constants";
const SvgElement = (props) => {
    let { width, height, viewBox } = defaultOptions.sizes;
    if (props.sizes) {
        if (props.sizes.height)
            height = props.sizes.height;
        if (props.sizes.width)
            width = props.sizes.width;
        if (props.sizes.viewBox)
            viewBox = props.sizes.viewBox;
    }
    const refElement = useRef(null);
    useEffect(() => {
        refElement.current.insertAdjacentHTML('afterbegin', props.element.content);
    }, []);
    return React.createElement("svg", { viewBox: viewBox, width: width, height: height, ref: refElement });
};
export { SvgElement };
