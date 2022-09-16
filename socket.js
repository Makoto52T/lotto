import io from 'socket.io-client';
import {SOCKET_URL} from './src/api';

const socket = io (SOCKET_URL);

socket.on ('connect', () => {
  console.log ('connect', socket.connected); // true
});

socket.on ('calling', data => {
  console.log (data);
});

socket.on ('disconnect', reason => {
  console.log ('disconnect', reason); // true
});

socket.on ('error', error => {
  console.log ('error', error); // true
});

export default socket;
