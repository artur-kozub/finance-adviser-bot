import { Message } from "node-telegram-bot-api";
export declare class TelegramBotClass {
    private _tgBotApi;
    constructor();
    sendReport(msg: Message, text: string): Promise<void>;
}
