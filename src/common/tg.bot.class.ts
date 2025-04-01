import { Injectable } from "@nestjs/common";
import TelegramBot, { Message } from "node-telegram-bot-api";
import * as dotenv from "dotenv";
dotenv.config();

@Injectable()
export class TelegramBotClass {
    private _tgBotApi: TelegramBot

    constructor() {
        this._tgBotApi = new TelegramBot(process.env.TG_BOT_TOKEN as string, { polling: true })
    }

    public async sendReport(msg: Message, text: string) {
        await this._tgBotApi.sendMessage(msg.chat.id, text);
    }
}
