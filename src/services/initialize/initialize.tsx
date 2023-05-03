import * as React from "react";

import Lang from "./events/lang";

declare global {
	interface Window {
		chrome: any;
		safari: any;
	}
	interface Document {
		querySelector: any;
	}
}

export default function Initialize() {
	React.useEffect(() => {}, []);

	return (
		<>
			<Lang />
		</>
	);
}
