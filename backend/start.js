import('./src/index.js').catch(err => {
  console.error('Error importing index.js:', err);
  process.exit(1);
});
