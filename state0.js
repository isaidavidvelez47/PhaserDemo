var demo = {};
demo.state0 = function(){};
demo.state0.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = '#452456';
        addChangeStateEventListeners();
    },
    update: function(){}
};

function changeState(i, stateNum) {
    game.state.start('state'+ stateNum);
}

function addKeyCallback(key, num) {
    game.input.keyboard.addKey(key).onDown.add(changeState, null, null, num);
}

function addChangeStateEventListeners(){
    addKeyCallback(Phaser.Keyboard.ZERO, 0);
    addKeyCallback(Phaser.Keyboard.ONE, 1);
    addKeyCallback(Phaser.Keyboard.TWO, 2);
    addKeyCallback(Phaser.Keyboard.THREE, 3);
    addKeyCallback(Phaser.Keyboard.FOUR, 4);
    addKeyCallback(Phaser.Keyboard.FIVE, 5);
    addKeyCallback(Phaser.Keyboard.SIX, 6);
    addKeyCallback(Phaser.Keyboard.SEVEN, 7);
    addKeyCallback(Phaser.Keyboard.EIGHT, 8);
    addKeyCallback(Phaser.Keyboard.NINE, 9);
}