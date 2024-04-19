# @4rchx824/ui

## How to install

1. Install the package
   `npm install @4rchx824/ui`
2. Add the plugin to your _tailwind.config.ts_
   `plugins: [require("@4rchx824/ui")],`
3. Add the package location to the contents in your _tailwind.config.ts_
   `content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./node_modules/@4rchx824/ui/dist/**/*.{js,ts,jsx,tsx}",
],`
4. Import the component in your application
   `import { Alert } from "@4rchx824/ui/alert"`
