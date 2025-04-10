import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      // Add custom utilities for clip-path
      clipPath: {
        triangle: "polygon(50% 0%, 0% 100%, 100% 100%)",
      },
      
   
    },
    
  },
  plugins: [
    // Add the plugin for custom clip-path utilities
    function ({ addUtilities }: { addUtilities: (utilities: Record<string, any>) => void }) {
      const newUtilities = {
        ".clip-path-triangle": {
          clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
        },
      };
      addUtilities(newUtilities);
    },
  ],
} satisfies Config;