'use server';

import SteinStore from "stein-js-client";
import { ContactType } from "../types";

export async function addRecord(data: ContactType){
    const store = new SteinStore(
        "https://api.steinhq.com/v1/storages/6783aa26c088333365651d92"
      )

    return store.append("Sheet1", [data]).then((res: any) => {
        return {
            status: true,
            message: "Record added successfully"
        }
    })
      .catch((err: any) => {
        return {
            status: false,
            message: "Unable to add Record"
        }
      })
}
