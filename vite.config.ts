import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { searchForWorkspaceRoot } from 'vite'


export default defineConfig({
	plugins: [sveltekit()],

	server: {
		fs: {
		  allow: [
			// search up for workspace root
			searchForWorkspaceRoot(process.cwd()),
			// your custom rules
			'/static',
		  ],
		},
	  },
});

