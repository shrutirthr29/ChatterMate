/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "chat-background": "url('/chat-bg.png')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
        "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        secondary: "#545556",
        "photopicker-overlay-background": "rgba(30,42,49,0.8)",
        "dropdown-background": "#233138",
        // "dropdown-background-hover": "#182229",
        "input-background": "#1f5d69",
        // "primary-strong": "#e9edef",
        // "panel-header-background": "#202c33",
        // "panel-header-icon": "#aebac1",
        // "icon-lighter": "#8696a0",
        // "icon-green": "#00a884",
        "search-input-container-background": "#dde5eb",
        "conversation-border": "rgba(134,150,160,0.15)",
        "conversation-panel-background": "#0b141a",
        "background-default-hover": "#202c33",
        // "incoming-background": "#202c33",
        // "outgoing-background": "#005c4b",
        "bubble-meta": "hsla(0,0%,100%,0.6)",
        "icon-ack": "#53bdeb",
        "panelbackground": "#F0EFF7",
        "lightwhite":"#cac7d9",
        "greenishblue": "#265b72",
        "aqua": "#0fb6f9",
        "calendar-text-light": "#5a6067"
      },
      gridTemplateColumns: {
        main: "1fr 2.4fr",
      },
    },
  },
  plugins: [],
};
