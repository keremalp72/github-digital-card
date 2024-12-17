filterForm.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  const username = e.target["usernameInput"].value.trim();
  init(username)
}

async function getUser(username) {
    const user = await fetch(`https://api.github.com/users/${username}`).then(
        (r) => r.json()
      );
      return user;
}

async function init(username) {
    const data = await getUser(username);
  users.innerHTML = `
  <div class="user">
          <div class="user-profile">
            <img src=${data.avatar_url} alt="" />
            <div class="user-date">
              <h2>${data.name}</h2>
              <h3>@${data.name || data.login}</h3>
              <p>Joined ${data.created_at}</p>
            </div>
          </div>
          <div class="user-text">
            <h4>
            ${data.bio || 'Bu kullanıcı hakkında bilgi yok.'}
            </h4>
          </div>

          <div class="user-fallow-container">
            <div class="user-item">
              <p>Repos</p>
              <h3>${data.public_repos}</h3>
            </div>
            <div class="user-item">
              <p>Fallowers</p>
              <h3>${data.followers}</h3>
            </div>
            <div class="user-item">
              <p>Fallowing</p>
              <h3>${data.following}</h3>
            </div>
          </div>
          <div class="user-info-container">
            <div class="item">
              <img src="assets/images/konum-dark.svg" alt="" /><span
              >${data.location}</span
              >
            </div>
            <div class="item">
              <img src="assets/images/link-dark.svg" alt="" /><span
                >${data.blog}</span
              >
            </div>
            <div class="item">
              <img src="assets/images/twitter.svg" alt="" /><span
                >${data.twitter_username || 'Not Available.'}</span
              >
            </div>
            <div class="item">
              <img src="assets/images/bina-dark.svg" alt="" /><span
                >${data.company || 'Not Available.'}</span
              >
            </div>
          </div>
        </div>
  `
}
