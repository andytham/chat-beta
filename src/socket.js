const io = require('socket.io-client')

export default function() {
  // const socket = io.connect('http://localhost:3000')
  const socket = io();

  function receive(updateChat){
    socket.on('message', msg => {
      updateChat(msg)
    })
  }
  function message(msg, cb){
    console.log("socket msg");
    socket.emit("message", msg)
  }

  function join(){
    socket.emit("join", "hmm")
  }

  function history(updateChat){
    socket.on('history', function(hist){
      updateChat(hist)
    })
  }

  return {
    receive,
    message,
    join,
    history
  }
}
