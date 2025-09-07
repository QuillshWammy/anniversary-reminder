import type { Table } from "dexie";
import Dexie from "dexie";

export type Event = {
  id?: number;
  title: string;
  date: string;
  description?: string;
  [key: string]: any;
};

// データベース定義
export class MyDB extends Dexie {
  events!: Table<Event, number>;

  constructor() {
    super("MyCalendarDB");
    this.version(1).stores({
      events: "++id,date,title",
    });
  }
}

export const db = new MyDB();
