RegisterCommand("help", async (source, args) => {
  emitNet("sv:help", args);
});

RegisterCommand("getCoordinates", async (source, args) => {
  const ped = PlayerPedId();
  let currentPos = GetEntityCoords(ped, false);
  console.log(`${currentPos[0]} ${currentPos[1]} ${currentPos[2]}`);
  emitNet("sv:tp", { currentPos });

});

RegisterCommand("teleport", async (source, args) => {
  const ped = PlayerPedId();
  SetEntityCoords(ped, -1301.880615234375, 37.376678466796875, 52.36359405517578, false, false, false, true);

  emitNet("sv:tp", { playerPed, pos });
});