'use strict';

const fs = require('fs');

onNet("sv:help", (msg, color) => {
  console.log('received message');
  console.log(msg);
});

onNet("sv:tp", (obj) => {
  console.log(`${obj.currentPos[0]} ${obj.currentPos[1]} ${obj.currentPos[2]}`);

  let position = {
    x: obj.currentPos[0],
    y: obj.currentPos[1],
    z: obj.currentPos[2]
  };

  let data = JSON.stringify(position);
  fs.writeFileSync('position.json', data);
});

// todo: add multiple chat events based on System, Player, Admin
//  and so on with reusable and global accessible colors
onNet("sv:chat", function (msg, color) {
  emitNet("chat:addMessage", -1, {
    args: ["System ", msg],
    color: color,
    multiline: true
  })
})