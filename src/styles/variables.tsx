import * as React from "react";
import { createGlobalStyle } from "styled-components";

const GlobalVariables = createGlobalStyle`
html {
	--font: #222222;
	--line: #eeeeee;

	--bg: #ffffff;
	--bg2: #e1e1e1;

	--block: #f5f5f5;
	--block2: #e5e5e5;
}

html[theme=dark] * {
	color-scheme: dark;

	--font: #ffffff;
	--line: #333333;

	--bg: #000000;
	--bg2: #222222;

	--block: #222222;
	--block2: #333333;
}
`;

export default GlobalVariables;
