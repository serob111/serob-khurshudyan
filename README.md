# serob-khurshudyan

Personal portfolio built with Next.js.

## Contact form → Telegram setup

The contact form on the site posts to `app/api/contact/route.ts`, which forwards each message to a Telegram chat via the Bot API. To receive messages, create a bot and point its token/chat ID at this project:

1. **Create a bot.** In Telegram, open a chat with [@BotFather](https://t.me/BotFather) and send `/newbot`. Follow the prompts (choose a name and a username ending in `bot`). BotFather replies with a token that looks like `123456789:AAH...` — this is your `TELEGRAM_BOT_TOKEN`.
2. **Start a chat with your new bot.** Search for the bot's username in Telegram and send it any message (e.g. "hi"). Bots can't message you first, so this step is required.
3. **Get your chat ID.** Visit `https://api.telegram.org/bot<YOUR_TOKEN>/getUpdates` in a browser (replace `<YOUR_TOKEN>` with the token from step 1). Look for `"chat":{"id": ...}` in the JSON response — that number is your `TELEGRAM_CHAT_ID`. If the response is empty, make sure you sent the bot a message first, then refresh.
4. **Set the environment variables.** Copy `.env.example` to `.env.local` and fill in both values:

   ```bash
   cp .env.example .env.local
   ```

   ```
   TELEGRAM_BOT_TOKEN=123456789:AAH...
   TELEGRAM_CHAT_ID=123456789
   ```

5. **Restart the dev server** (`npm run dev`) so the new environment variables are picked up. Submit the contact form to confirm you receive a message in Telegram.

When deploying (e.g. to Vercel), add the same two environment variables in the project's dashboard settings.

## Analytics

[Vercel Analytics](https://vercel.com/docs/analytics) is wired up via `<Analytics />` in `app/layout.tsx`. It only collects data once the site is deployed on Vercel — enable **Analytics** for the project in the Vercel dashboard to start seeing visitor data. No extra configuration is needed locally.
