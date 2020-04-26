RegisterCommand("help", async (source, args) => {
    emitNet("sv:help", args);
}, false);
RegisterCommand("getCoordinates", async (source, args) => {
    const ped = PlayerPedId();
    const currentPos = GetEntityCoords(ped, false);
    console.log(`${currentPos[0]} ${currentPos[1]} ${currentPos[2]}`);
    emitNet("sv:tp", { currentPos });
}, false);
RegisterCommand("teleport", async (source, args) => {
    const ped = PlayerPedId();
    SetEntityCoords(ped, -1301.880615234375, 37.376678466796875, 52.36359405517578, false, false, false, true);
    emitNet("sv:tp", { playerPed: PlayerPedId() });
}, false);
RegisterCommand("teleport2", async (source, args) => {
    const ped = PlayerPedId();
    SetEntityCoords(ped, -155.3307342529297, 859.9042358398438, 232.2334747314453, false, false, false, true);
    emitNet("sv:tp", { playerPed: PlayerPedId() });
}, false);
