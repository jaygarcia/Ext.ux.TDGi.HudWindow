Ext.ns('Ext.ux.TDGi');

 /**
 * @class Ext.plugins.TDGi.HudWindow
 * @extends Ext.Window
 * <p>A custom Ext JS Stylized Window that emulates OS X "HUD Window" behavior.</p>
 * @constructor
 * @param {Object} config The config object
 * @xtype Ext.plugins.TDGi.HudWindow
 */
Ext.ux.TDGi.HudWindow = Ext.extend(Ext.Window,{
    // private
    onRender : function(ct, position){
        var me = this;
        Ext.ux.TDGi.HudWindow.superclass.onRender.call(me, ct, position);
        me.el.addClass('hw');  // Add a base CSS class to allow us to have namespaced overrides
        me.header.down('.x-tool-close').addClass('hw-tool');
        me.header.child('span').addClass('hw-header-text');
        me.mc.addClass('hw-mc');

        me.bwrap.addClass('hw-bwrap');

        if (me.title) {
            me.titleEl = me.header.child('span');
            me.titleEl.applyStyles({position: 'relative'});
        }
    },
    // private
    centerTitle : function() {
        var me          = this,
            hdr         = me.header,
            headerWidth = hdr.getWidth(),
            toolWidth   = hdr.child('div').getWidth(),
            titleWidth  = me.titleEl.getWidth(),
            left        = Math.floor((headerWidth / 2) - (titleWidth / 2) - toolWidth);

        me.titleEl.setLeft(left);
    },
    // private
    onLayout : function() {
        Ext.ux.TDGi.HudWindow.superclass.onLayout.apply(this, arguments);
        this.centerTitle();
    },
    // private
    setTitle : function() {
        Ext.ux.TDGi.HudWindow.superclass.setTitle.apply(this, arguments);
        this.centerTitle();
    },
    // private
    ghost : function() {
        var ghost = Ext.ux.TDGi.HudWindow.superclass.ghost.apply(this, arguments);
        ghost.addClass('hw');

        return ghost;
    }
});