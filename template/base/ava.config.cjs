module.exports = {
  ignoredByWatcher: ['!**/*.{js,ts}'],
  files: ['./tests/specs/**/*'],
  snapshotDir: './tests/snapshots',
  babel: true,
  tap: false,
  verbose: true,
  color: true,
};
