import Path from "path";
import { Client } from "@notionhq/client";
import { loadJson, saveJson } from "jnj-lib-base";
import dotenv from "dotenv";
dotenv.config(); // 실행 경로에 있는 `.env`

const settingsPath =
  process.env.ENV_SETTINGS_PATH ?? "C:/JnJ-soft/Developments/_Settings";

class Notion {
  token: string;
  client;

  // & CONSTRUCTOR
  // <name>_<sn>.json   ex: monblue_0.json
  constructor(name: string = "monblue", sn: number = 0) {
    this.token = loadJson(
      Path.join(settingsPath, `Apis/notion/${name}_${sn}.json`)
    ).token;
    this.client = new Client({
      auth: this.token,
    });
  }

  getUsers = async () => {
    return await this.client.users.list({});
  };
}

module.exports = new Notion();

// & TEST
// const notion = new Notion();
// console.log(await notion.getUsers());
