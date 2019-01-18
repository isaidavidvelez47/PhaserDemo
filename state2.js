demo.state2 = function(){};
demo.state2.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = '#11adb2';
        addChangeStateEventListeners();
    },
    update: function(){}
};

function changeState(i, stateNum) {
    game.state.start('state'+ stateNum);
}