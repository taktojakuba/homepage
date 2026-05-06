async function dc() {
  try {
    const response = await fetch(
      "https://api.lanyard.rest/v1/users/768727776323829790",
    );
    const data = await response.json();

    if (data.success) {
      const user = data.data.discord_user;
      const status = data.data.discord_status;
      document.getElementById("discord-status").innerHTML =
        `<p>${user.display_name} is ${status}</p>`;
    } else {
      console.log("error");
    }
  } catch (err) {
    console.error(err);
    console.log("error");
  }
}
dc();
