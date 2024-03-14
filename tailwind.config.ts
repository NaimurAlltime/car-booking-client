import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //   "gradient-conic":
      //     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      // },
      backgroundImage: {
        "banner-bg": "url('/assets/backgorund-image/banner-hd.png')",
        "banner-blur": "url('/assets/backgorund-image/bg-blur.jpg')",
      },
      backgroundColor: {
        "backgrund-color":
          "url('https://www.freepik.com/free-photo/decorations-made-chrysanthemums-threads-stand-along-glance-path-dark-hall_1137221.htm#query=backgorund%20color%20wedding%20photo%20in%20blur&position=2&from_view=search&track=ais&uuid=04fae2a1-761b-48ae-b21d-d77acb69c142')",
      },
    },
  },
  plugins: [],
};
export default config;
