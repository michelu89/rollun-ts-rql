import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import { resolve } from 'path';

export default defineConfig({
	plugins: [tsconfigPaths()],
	build: {
		target: 'esnext',
		lib: {
			entry: resolve(__dirname, 'src/index.ts'),
			name: 'RollunRql',
			fileName: (format) => `rollun-ts-rql.${format}.js`,
			formats: ['es', 'cjs'],
		},
		rollupOptions: {
			external: [
				'typescript'
			],
			output: {
				globals: {
					'typescript': 'ts'
				},
			},
		},
	},
	resolve: {
		alias: {
			'@': resolve(__dirname, 'src'),
		},
	},
});
