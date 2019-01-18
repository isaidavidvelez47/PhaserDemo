demo.state4 = function(){};
demo.state4.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = '#8e698e';
        addChangeStateEventListeners();
    },
    update: function(){}
};

function changeState(i, stateNum) {
    game.state.start('state'+ stateNum);
}