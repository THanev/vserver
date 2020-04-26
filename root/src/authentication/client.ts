// todo: refactor this file to something simpler and reusable
// todo: change commands to events when user logs / logs out

FreezeEntityPosition(PlayerPedId(), true);
DisplayRadar(false);

emitNet("sv:chat", "Hello there, please log in!", [255, 0, 0]);

RegisterCommand("on", function () {
  FreezeEntityPosition(PlayerPedId(), true);
  SendNuiMessage(JSON.stringify({
    display: true
  }));
  DisplayRadar(false);
}, false);

RegisterCommand("off", function () {
  SendNuiMessage(JSON.stringify({
    display: false
  }));
  FreezeEntityPosition(PlayerPedId(), false);
  DisplayRadar(true);
}, false);