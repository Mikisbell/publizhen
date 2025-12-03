/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--bg-main)",
                surface: "var(--surface-main)",
                primary: "var(--primary)",
                secondary: "var(--secondary)",
                accent: "var(--accent)",
                "brand-pink": "#F2275D",
                "brand-magenta": "#D9298A",
                "brand-yellow": "#F2A71B",
                "brand-orange": "#F26E22",
                "brand-gray": "#F2F2F2",
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
