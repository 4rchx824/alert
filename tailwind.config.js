/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.tsx"],
    prefix: "inc-",
    theme: {
        extend: {
            colors: {
                "success": "#58BE62",
                "danger": "#ED452E",
                "warning": "#FEC84B",
                "info": "#58A1D4",
                "success-accent": "#ECFBEE",
                "danger-accent": "#FFF4F3",
                "warning-accent": "#FFFAEB",
                "info-accent": "#E2EFF8",
            }
        },
    },
    plugins: [],
};
