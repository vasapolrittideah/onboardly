import { resolve } from 'path';

import tailwindcss from 'tailwindcss';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

import { peerDependencies } from './package.json';

export default defineConfig({
  build: {
    lib: {
      entry: [
        resolve(__dirname, 'lib/components.ts'),
        resolve(__dirname, 'lib/hooks.ts'),
      ],
      fileName: (format, entryName) => `${entryName}.${format}.js`,
      cssFileName: 'styles',
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'tailwindcss',
        ...Object.keys(peerDependencies),
      ],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          tailwindcss: 'tailwindcss',
        },
      },
    },
    sourcemap: true,
    emptyOutDir: true,
  },
  plugins: [
    dts({
      rollupTypes: true,
    }),
  ],
  resolve: {
    alias: {
      '@/lib/': `${resolve(__dirname, 'lib')}/`,
      '@/': `${resolve(__dirname, 'src')}/`,
    },
  },
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
});
