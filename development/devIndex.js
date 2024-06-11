import ReactDom from "react-dom/client";
import React from "react";
import icon from './logo';
import { SvgElement } from "../src/components/SvgElement";
console.log(icon);
const container = document.getElementById('root');
const RootElement = React.createElement('div', React.createElement(SvgElement, { element: icon }));
ReactDom.createRoot(container).render(React.createElement(SvgElement, { sizes: { width: "750px" }, element: icon }));
