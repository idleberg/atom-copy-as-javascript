import { defineConfig } from 'tsup';

export default defineConfig({
	bundle: true,
	clean: true,
	entry: ['src/index.ts'],
	external: ['atom', 'electron'],
	format: 'cjs',
	minify: true,
	outDir: 'lib',
	platform: 'node',
	target: 'node14',
	treeshake: true,
});
