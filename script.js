function unlockVault() {
  const door = document.getElementById("door");
  const status = document.getElementById("status");

  status.innerText = "Cracking vault...";

  setTimeout(() => {
    door.classList.add("open");
    status.innerText = "ACCESS GRANTED";

    setTimeout(() => {
      window.location.href = "https://discord.gg/8ffj6BeHmC";
    }, 2000);

  }, 1500);
}
