import { create } from "zustand";

interface ExampleStore {
	onoff: boolean;
	on: () => void;
	off: () => void;

	title: string;
	setTitle: (val: string) => void;
}

const useExampleStore = create<ExampleStore>((set) => ({
	onoff: false,

	on: () => {
		set({ onoff: true });
	},

	off: () => {
		set({ onoff: true });
	},

	title: "",

	setTitle: (val) => {
		set({ title: val });
	},
}));

export default useExampleStore;
