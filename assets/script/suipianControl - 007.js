
cc.Class({
    extends: cc.Component,

    properties: {
        ControlNumber:0,

    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
       if (levelControl8 == this.ControlNumber)
       {
           this.node.active = false;
       }
    },


});
