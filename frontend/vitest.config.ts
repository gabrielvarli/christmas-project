import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true, // Gör så att 'expect' är tillgängligt globalt
    environment: 'jsdom', // Använd jsdom för frontend-tester
    setupFiles: './setupTests.ts', // Valfritt: en setup-fil för ytterligare konfiguration
  },
});
