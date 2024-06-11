import ReactDom from "react-dom/client";
// @ts-ignore
import icon from "./logo.svg";
import {SvgElement} from "../src/components/SvgElement";


import React from "react";

const container = document.getElementById('root');
const RootElement=React.createElement('div', <SvgElement element={icon} />)
ReactDom.createRoot(container).render(<SvgElement sizes={{width: "750px"}} element={icon} />)