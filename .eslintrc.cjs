module.exports = {
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:astro/recommended',
        'plugin:tailwindcss/recommended',
    ],
    files: ["*.astro"],
    parser: "astro-eslint-parser",
    parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
    },
    plugins: ['@typescript-eslint'],
    root: true,
};