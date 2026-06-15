function unlockVault() {
  const status = document.getElementById("status");
  status.innerText = "Unlocking vault...";

  setTimeout(() => {
    status.innerText = "Access Granted → Redirecting...";
    
    setTimeout(() => {
      window.location.href = "https://discord.gg/8ffj6BeHmC";
    }, 1500);

  }, 2000);
}
