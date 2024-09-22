import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import Unfonts from "unplugin-fonts/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Unfonts({
      custom: {
        families: [
          {
            name: "Lato",
            local: "Lato",
            src: "./src/assets/Lato-Regular.ttf",
          },
        ],
        preload: true,
        display: "swap",
      },
    }),
  ],
  base: "/animated-buttons",
});
