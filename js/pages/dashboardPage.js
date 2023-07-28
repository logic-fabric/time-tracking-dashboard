export class DashboardPage {
  constructor(dataFetcher) {
    this._dataFetcher = dataFetcher;

    this._render();
  }

  async _render() {
    const userActivity = await this._dataFetcher.fetchSource();

    this._renderUserAvatar(userActivity);
    this._renderUserName(userActivity);
  }

  _renderUserAvatar(userActivity) {
    const avatarContainer = document.getElementById("avatar-container");

    avatarContainer.innerHTML = `
      <div class="header__avatar">
        <img src="${userActivity.avatar}" alt="${userActivity.userName}" />
      </div>
    `;
  }

  _renderUserName(userActivity) {
    const userNameContainer = document.getElementById("username");

    userNameContainer.textContent = userActivity.userName;
  }
}
