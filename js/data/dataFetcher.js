import { UserActivity } from "./userActivity.js";

export class DataFetcher {
  constructor(dataSource) {
    this._dataSource = dataSource;
  }

  async fetchSource() {
    let response = await fetch(this._dataSource);

    if (response.ok) {
      let json = await response.json();

      const userActivity = new UserActivity(
        json.userName,
        json.avatar,
        json.activity
      );

      return userActivity;
    } else {
      console.error(`Unable to fetch data from ${this._dataSource}`);
    }
  }
}
