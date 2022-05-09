import { colors } from '~/lib/theme';

export const GlobalStyles = () => (
	<style jsx global>{`
		#nprogress .bar {
			height: 0.25rem;
			background: ${colors.primary[500]};
		}
	`}</style>
);
