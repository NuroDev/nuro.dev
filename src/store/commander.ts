import { defineStore } from 'pinia';

interface CommanderState {
	isOpen: boolean;
}

export const useCommanderStore = defineStore({
	id: 'commander',
	state: (): CommanderState => ({
		isOpen: false,
	}),
	actions: {
		toggle(state?: boolean) {
			this.isOpen = state ?? !this.isOpen;
		},
		open() {
			this.toggle(true);
		},
		close() {
			this.toggle(false);
		},
	},
});
