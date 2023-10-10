import { createContext } from "react";

const state = {
    Telegram: new Object({}) as any,
    navigateTo: '',
    setNavigationPath: (path: string) => {
        state.navigateTo = path
    }
}

export const TelegramContext = createContext<typeof state>(state)