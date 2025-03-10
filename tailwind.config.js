/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",

        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                geologica: ['Geologica', 'Roboto', 'system-ui', 'sans-serif'],
                roboto: ['Roboto', 'system-ui', 'sans-serif'],
                code: ['source-code-pro', 'Menlo', 'Monaco', 'Consolas', 'Courier New',
                    'monospace']
            }
        },
    },
    plugins: [],
}