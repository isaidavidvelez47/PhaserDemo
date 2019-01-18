demo.state9 = function(){};
demo.state9.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = '#42f1f4';
        addChangeStateEventListeners();
    },
    update: function(){}
};

function changeState(i, stateNum) {
    game.state.start('state'+ stateNum);
}