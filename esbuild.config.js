//! Basic
// require('esbuild').buildSync({
//     entryPoints: ['src/index.js'],
//     bundle: true,
//     minify: true,
//     sourcemap: true,
//     platform: 'node',
//     target: ['chrome58', 'firefox57', 'safari11', 'edge16'],
//     outdir: 'dist',
// });

const { context } = require('esbuild');
const chokidar = require('chokidar');
const liveServer = require('live-server');

(async () => {
  const builder = await context({
    entryPoints: ['src/index.js'],
    bundle: true,
    minify: true,
    sourcemap: true,
    platform: 'node',
    splitting: true,
    target: ['node18.20.4'],
    outdir: 'dist',
    loader: {
      '.js': 'jsx',
      '.ts': 'tsx',
    },
    format: 'esm',
  });
  chokidar
    .watch('src/**/*.{ts,tsx,js,jsx}', {
      interval: 0, // No delay
    })
    .on('all', () => {
      builder.rebuild();
    });
  liveServer.start({
    open: false,
  });
})();
