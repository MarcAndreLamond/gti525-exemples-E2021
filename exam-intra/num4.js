const MOVES = { Up: 0, Down: 1, Right: 2, Left: 3 };
var GoodGame = function () {
  var moves = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  var player = {
    x: 0,
    y: 0,
  };
  var lostChild = {
    x: 20,
    y: -18,
  };

  var move = function (entity, offsetX, offsetY) {
    entity.x = entity.x + offsetX;
    entity.y = entity.y + offsetY;
  };

  return {
    movePlayer: function (indMove) {
      move(player, ...moves[indMove]);
    },
    rescue: function () {
      var result = player.x == lostChild.x && player.y == lostChild.y;
      if (result) {
        console.log("You Win!");
      } else {
        console.log("Nothing to rescue");
      }
      return result;
    },
  };
};

var gg = new GoodGame();
gg.movePlayer(MOVES.Up);
gg.rescue();
