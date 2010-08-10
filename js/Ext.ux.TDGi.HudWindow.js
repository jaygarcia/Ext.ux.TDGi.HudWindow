Ext.ns('Ext.ux.TDGi');
Ext.ux.TDGi.HudWindow = Ext.extend(Ext.Window,{

    initComponent : function() {

        Ext.ux.TDGi.HudWindow.superclass.initComponent.call(this);
    },
    // private
    onRender : function(ct, position){
//        this.header.removeAllListeners();


        Ext.ux.TDGi.HudWindow.superclass.onRender.call(this, ct, position);
        this.header.down('.x-tool-close').addClass('hw-tool');
        this.header.child('span').addClass('hw-header-text');
        this.mc.addClass('hw-mc');


        if (this.title) {
//            this.header.child('span');
        }
    }

});