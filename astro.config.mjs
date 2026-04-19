// @ts-check
import { defineConfig } from 'astro/config';

const repository = import.meta.env.GITHUB_REPOSITORY || '';
const repositoryName = repository.split('/')[1] || '';
const owner = import.meta.env.GITHUB_REPOSITORY_OWNER || '';
const githubPagesUrl = import.meta.env.GITHUB_PAGES_URL || '';
const isUserSite = repositoryName.endsWith('.github.io');

// https://astro.build/config
export default defineConfig({
	site: githubPagesUrl || (owner ? `https://${owner}.github.io` : 'http://localhost:4321'),
	base: repositoryName && !isUserSite ? `/${repositoryName}` : '/',
});
