demo.state1 = function(){};
demo.state1.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = '#753189';
        addChangeStateEventListeners();
    },
    update: function(){}
};

function changeState(i, stateNum) {
    game.state.start('state'+ stateNum);
}