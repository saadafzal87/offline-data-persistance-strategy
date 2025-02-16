# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:


🚀 𝐎𝐟𝐟𝐥𝐢𝐧𝐞-𝐅𝐢𝐫𝐬𝐭 𝐃𝐚𝐭𝐚 𝐏𝐞𝐫𝐬𝐢𝐬𝐭𝐞𝐧𝐭 𝐒𝐭𝐫𝐚𝐭𝐞𝐠𝐲: 𝐇𝐚𝐧𝐝𝐥𝐢𝐧𝐠 𝐍𝐞𝐭𝐰𝐨𝐫𝐤 𝐋𝐨𝐬𝐬 𝐰𝐢𝐭𝐡 𝐆𝐫𝐚𝐜𝐞

The other day, I was catching up with Sanglap Mridha, and we stumbled upon a common yet often-overlooked challenge—🤔
"𝐰𝐡𝐚𝐭 𝐡𝐚𝐩𝐩𝐞𝐧𝐬 𝐰𝐡𝐞𝐧 𝐚 𝐮𝐬𝐞𝐫 𝐥𝐨𝐬𝐞𝐬 𝐢𝐧𝐭𝐞𝐫𝐧𝐞𝐭 𝐢𝐧 𝐭𝐡𝐞 𝐦𝐢𝐝𝐝𝐥𝐞 𝐨𝐟 𝐚 𝐜𝐫𝐢𝐭𝐢𝐜𝐚𝐥 𝐚𝐜𝐭𝐢𝐨𝐧?"

We’ve all been there—filling out a form, adding items to a cart, or making an update, only to see everything vanish due to a lost connection. That got me thinking: How can we make React apps truly offline-friendly?

There are multiple ways to tackle this, but I experimented with an approach using TanStack Query, Service Workers, IndexedDB, and Background Sync—and it works surprisingly well! Here’s how:

💡 Here’s how I tackled it and why it’s a game-changer:

🔥 𝐏𝐞𝐫𝐬𝐢𝐬𝐭𝐞𝐧𝐭 𝐃𝐚𝐭𝐚 𝐰𝐢𝐭𝐡 𝐈𝐧𝐝𝐞𝐱𝐞𝐝𝐃𝐁: Even if the user refreshes while offline, data stays intact—no blank screens! TanStack Query + IndexedDB caches API responses, ensuring a smooth experience.

⚡ 𝐎𝐩𝐭𝐢𝐦𝐢𝐬𝐭𝐢𝐜 𝐔𝐩𝐝𝐚𝐭𝐞𝐬 = 𝐍𝐨 𝐌𝐨𝐫𝐞 𝐖𝐚𝐢𝐭𝐢𝐧𝐠: UI updates instantly even before API calls succeed. If the request fails, it gracefully rolls back to the last known state.

🔄 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐜 𝐌𝐮𝐭𝐚𝐭𝐢𝐨𝐧 𝐑𝐞𝐭𝐫𝐲 𝐨𝐧 𝐑𝐞𝐜𝐨𝐧𝐧𝐞𝐜𝐭: Failed API calls? No problem. They get queued in localStorage and auto-retry once the user is back online. No more "oops, your action was lost" moments.

📡 𝐁𝐚𝐜𝐤𝐠𝐫𝐨𝐮𝐧𝐝 𝐒𝐲𝐧𝐜 𝐰𝐢𝐭𝐡 𝐒𝐞𝐫𝐯𝐢𝐜𝐞 𝐖𝐨𝐫𝐤𝐞𝐫𝐬: Even if the user closes the tab, pending API calls will sync in the background when they’re online. Perfect for ensuring zero data loss in critical workflows.

📶 𝐎𝐟𝐟𝐥𝐢𝐧𝐞 𝐃𝐞𝐭𝐞𝐜𝐭𝐢𝐨𝐧 𝐰𝐢𝐭𝐡 𝐚 𝐂𝐨𝐨𝐥 𝐁𝐚𝐧𝐧𝐞𝐫: A dynamic Offline Mode Warning alerts users that they’re offline. This ensures transparency—users know when their actions might be queued.

𝙒𝙝𝙮 𝘿𝙤𝙚𝙨 𝙏𝙝𝙞𝙨 𝙈𝙖𝙩𝙩𝙚𝙧?
✅ E-commerce? No more abandoned carts due to network failures.
✅ Dashboards? Ensure real-time insights without data gaps.
✅ Forms? No more users retyping everything because of a lost connection.

💻 Check out the GitHub repo in the description & play around with it! Let me know what you think—how else would you improve this? 🚀

https://lnkd.in/gBwivUtN

Well, last but not least, thanks to Sanglap for sharing this great problem statement! 🚀



```js


// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
