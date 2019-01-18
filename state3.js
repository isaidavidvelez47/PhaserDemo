demo.state3 = function(){};
demo.state3.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = '#43ed3b';
        addChangeStateEventListeners();
    },
    update: function(){}
};

function changeState(i, stateNum) {
    game.state.start('state'+ stateNum);
}