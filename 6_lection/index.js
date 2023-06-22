async function getUsers() {
  const users = localStorage.getItem("users");

  if (users) {
    return JSON.parse(users);
  }

  const response = await fetch("https://dummyjson.com/users");
  const data = await response.json();
  const fetchedUsers = data.users;

  localStorage.setItem("users", JSON.stringify(fetchedUsers));

  return data;
}

const root = document.getElementById("root");

function deleteUser(eventTarget) {
  const wrapper = eventTarget.parentElement;
  const deleteId = Number(wrapper.getAttribute("data-id"));

  const users = localStorage.getItem("users");
  const parsedUsers = JSON.parse(users);

  const filteredUsers = parsedUsers.filter((user) => {
    return user.id !== deleteId;
  });

  localStorage.setItem("users", JSON.stringify(filteredUsers));

  wrapper.remove();
}

function renderUser(imageSource, name, username, userId) {
  const wrapper = document.createElement("div");
  wrapper.classList.add("user-wrapper");
  wrapper.setAttribute("data-id", userId);

  const userImage = document.createElement("img");
  userImage.src = imageSource;

  const infoWrapper = document.createElement("div");
  infoWrapper.classList.add("info-wrapper");

  const userName = document.createElement("h4");
  userName.innerText = `Name: ${name}`;

  const userUsername = document.createElement("p");
  userUsername.innerHTML = `Username: <span>${username}</span>`;

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "x";
  deleteButton.classList.add("delete-button");

  deleteButton.addEventListener("click", (event) => {
    deleteUser(event.target);
  });

  infoWrapper.appendChild(userName);
  infoWrapper.appendChild(userUsername);

  wrapper.appendChild(userImage);
  wrapper.appendChild(infoWrapper);
  wrapper.appendChild(deleteButton);

  root.appendChild(wrapper);
}

function render() {
  getUsers().then((users) => {
    users.forEach((user) => {
      const userName = `${user.firstName} ${user.lastName}`;
      renderUser(user.image, userName, user.username, user.id);
    });
  });
}

render();
