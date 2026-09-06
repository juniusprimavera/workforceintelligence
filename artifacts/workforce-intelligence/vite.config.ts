import path from 'path';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig, type OutputChunk, type Plugin } from 'vite';

import runtimeErrorOverlay from '@replit/vite-plugin-runtime-error-modal';

const rawPort = process.env.PORT;

if (!rawPort) {
  throw new Error(
    'PORT environment variable is required but was not provided.',
  );
}

const port = Number(rawPort);

if (Number.isNaN(port) || port <= 0) {
  throw new Error(`Invalid PORT value: "${rawPort}"`);
}

const basePath =
  process.env.NODE_ENV === 'production'
    ? '/workforceintelligence/'
    : process.env.BASE_PATH;

if (!basePath) {
  throw new Error(
    'BASE_PATH environment variable is required but was not provided.',
  );
}

const ENTRY_BUNDLE_BUDGET_BYTES = 300_000;

function enforceEntryBundleBudget(maxBytes: number): Plugin {
  return {
    name: 'enforce-entry-bundle-budget',
    generateBundle(_options, bundle) {
      const entryChunks = Object.values(bundle).filter(
        (output): output is OutputChunk =>
          output.type === 'chunk' && output.isEntry,
      );
      const largestEntry = entryChunks.reduce<OutputChunk | undefined>(
        (largest, current) =>
          !largest || Buffer.byteLength(current.code) > Buffer.byteLength(largest.code)
            ? current
            : largest,
        undefined,
      );

      if (!largestEntry) {
        throw new Error('Entry bundle budget could not find an entry chunk.');
      }

      const entrySize = Buffer.byteLength(largestEntry.code);

      if (entrySize > maxBytes) {
        throw new Error(
          `Entry bundle budget exceeded: ${largestEntry.fileName} is ` +
            `${entrySize} bytes (limit ${maxBytes} bytes). ` +
            'Keep deferred workspaces out of the first-visit entry.',
        );
      }
    },
  };
}

export default defineConfig({
  base: basePath,
  plugins: [
    react(),
    tailwindcss(),
    runtimeErrorOverlay(),
    enforceEntryBundleBudget(ENTRY_BUNDLE_BUDGET_BYTES),
    ...(process.env.NODE_ENV !== 'production' &&
    process.env.REPL_ID !== undefined
      ? [
          await import('@replit/vite-plugin-cartographer').then((m) =>
            m.cartographer({
              root: path.resolve(import.meta.dirname, '..'),
            }),
          ),
        ]
      : []),
  ],
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, 'src'),
      '@assets': path.resolve(
        import.meta.dirname,
        '..',
        '..',
        'attached_assets',
      ),
    },
    dedupe: ['react', 'react-dom'],
  },
  root: path.resolve(import.meta.dirname),
  build: {
    outDir: path.resolve(import.meta.dirname, 'dist/public'),
    emptyOutDir: true,
  },
  server: {
    port,
    strictPort: true,
    host: '0.0.0.0',
    allowedHosts: true,
    fs: {
      strict: true,
    },
  },
  preview: {
    port,
    host: '0.0.0.0',
    allowedHosts: true,
  },
});
