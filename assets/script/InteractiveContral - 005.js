
cc.Class({
    extends: cc.Component,

    properties: {

    },

    start () {
        var flag = false;
        if(levelControl5 == 1)
        {
            flag = true;
        }
        else
        {
            flag = false;
        }
        this.node.getComponent(cc.Button).interactable = flag;
    },

});