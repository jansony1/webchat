// Generated by CoffeeScript 1.6.2
(function() {
  var Message, Room;

  $(function() {
    Room.checkWs();
    window.room = new Room("ws://" + window.location.host + window.location.pathname + "/chatting");
    room.ws_conn.onopen = room.joinRoom();
    return $('#sayit-button').click(function() {
      var text;

      text = $('#chat-form').val();
      if (text) {
        return alert(text);
      } else {

      }
    });
  });

  Room = (function() {
    function Room(ws_url) {
      this.ws_url = ws_url;
      this.ws_conn = new WebSocket(this.ws_url);
    }

    Room.checkWs = function() {
      if (!window.WebSocket) {
        alert("you brower is not support websocket");
      }
    };

    Room.prototype.roomAddr = function() {
      return console.log(this.ws_url);
    };

    Room.prototype.joinRoom = function() {
      var message;

      return message = new Message("join", "" + (this.currentUser()) + " has join room");
    };

    Room.prototype.currentUser = function() {
      return $("#user-name").text();
    };

    Room.prototype.sendMessage = function(message) {};

    return Room;

  })();

  Message = (function() {
    function Message(type, text) {
      this.type = type;
      this.text = text;
    }

    return Message;

  })();

}).call(this);
