module.exports = {
    root: true,
    parser: "@typescript-eslint/parser",
    parserOptions: {
        project: "./tsconfig.json",
        tsconfigRootDir: __dirname,
        ecmaVersion: 2020,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true,
        },
    },
    plugins: ["react", "react-hooks", "@typescript-eslint", "eslint-plugin-import", "prettier"],
    ignorePatterns: ["*.scss", "*.js"],
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "prettier",
        // "plugin:storybook/recommended",
    ],
    rules: {
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/no-unused-vars": "warn",
        "@typescript-eslint/no-unsafe-assignment": "off",
        "react/jsx-filename-extension": [
            "warn",
            {
                extensions: [".jsx", ".tsx"],
            },
        ],
        "react/prop-types": "off",
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
        "react/jsx-uses-react": "off",
        "react/react-in-jsx-scope": "off",
        "@typescript-eslint/no-misused-promises": "off",
        "no-void": [
            "error",
            {
                allowAsStatement: true,
            },
        ],
        "no-loss-of-precision": "off",
        "@typescript-eslint/no-loss-of-precision": ["error"],
    },
    env: {
        node: true,
        browser: true,
        es6: true,
    },
    settings: {
        react: {
            version: "17.0.2",
        },
        "import/resolver": {
            alias: {
                map: [["~", "./src/"]],
                extensions: [".ts", ".js", ".tsx", ".jsx"],
            },
        },
    },
};
