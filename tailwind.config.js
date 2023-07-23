/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "paper-texture": "url('../assets/images/paper.png')",
        "example-couple": "url('../assets/images/couple.jpg')",
      },
    },
    fontFamily: {
      // merienda: ["Merienda", "cursive"],
      // sansita: ["Sansita Swashed", "cursive"],
      // sansita: ["sansita", "sans-serif"],
    },
  },
  plugins: [],
};
