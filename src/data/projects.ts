export interface Project {}

/**
 * Get all the projects you want to show on the projects page.
 *
 * This function allows you to either manually write out
 * your projects by hand, or you can fetch it from an
 * external API.
 *
 * @returns {Promise<Array<Project>>} The array of projects
 */
export async function getProjects(): Promise<Array<Project>> {
	return [];
}
