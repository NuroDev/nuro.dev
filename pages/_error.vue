<script>
export default {
	// Redirect all traffic back to
	// the homepage
	asyncData({ redirect }) {
		redirect('/');
	},
};
</script>
