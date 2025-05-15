export default {
  '*.{js,jsx,ts,tsx}': (stagedFiles) => [
    `prettier --write ${filenames.join(' ')}`,
  ],
}
