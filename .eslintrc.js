module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
        node: true,
        jest: true,
    },
    rules: {
        "@typescript-eslint/no-empty-interface": "off",
    },
    settings: {
        react: {
            version: "detect",
        },
    },
}