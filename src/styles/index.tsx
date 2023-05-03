import * as React from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
	-webkit-tap-highlight-color: transparent;
	box-sizing: border-box;
	color: var(--font);
	word-wrap: break-word;
}

body {
	margin: 0;
	padding: 0;
	scroll-behavior: smooth;
	-webkit-overflow-scrolling: touch;
	-moz-osx-font-smoothing: grayscale;
	-webkit-font-smoothing: antialiased;
	font-family: "Arial", "Microsoft JhengHei", "sans-serif";
	background-color: var(--bg);
}

.none {
	display: none;
}

.no-transition * {
	-webkit-transition: none !important;
	-moz-transition: none !important;
	-ms-transition: none !important;
	-o-transition: none !important;
	transition: none !important;
}

.fixed {
	touch-action: none;
	-ms-touch-action: none;
	overflow: hidden !important;
}

::selection {
	color: var(--bg);
	background: var(--font);
}

svg {
	fill: var(--font);
}

// input
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
	-webkit-appearance: none;
	appearance: none;
}

.input[type=number] {
	-moz-appearance: textfield;
	appearance: none;
}
`;

export default GlobalStyles;
