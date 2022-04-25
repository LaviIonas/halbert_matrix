import sdk from 'matrix-js-sdk';
import { lobi } from './my_login.js';

const client = sdk.createClient("https://matrix.org");
client.login("m.login.password", {"user": lobi.username, "password": lobi.password}).
  then((response) => {
    console.log(response.access_token);
  });

console.log(client.getAccessToken());


client.startClient();
client.once('sync', function(state, prev_state, res) {
  console.log(state);
});

// client.on("Room.timeline", function(event, room, to_start_of_timeline) {
//   console.log(event.event);
// });

// var rooms = client.getRooms();
// rooms.forEach(room => {
//     console.log(room.roomId);
// });

// var rooms = client.getRooms();
// rooms.forEach(room => {
//     var members = room.getJoinedMembers();
//     members.forEach(member => {
//         console.log(member.name);
//     });
// });
