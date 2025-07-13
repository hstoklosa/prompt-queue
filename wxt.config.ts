import { defineConfig } from "wxt";

// See https://wxt.dev/api/config.html
export default defineConfig({
  modules: ["@wxt-dev/module-vue"],
  srcDir: "src",
  manifest: {
    name: "PromptQueue",
    description: "Queue up prompts on ChatGPT website",
    permissions: ["storage", "activeTab", "scripting"],
    host_permissions: ["https://chatgpt.com/*", "https://chat.openai.com/*"],
  },
});
