/**
 * Created with PyCharm.
 * User: Administrator
 * Date: 13-5-11
 * Time: 下午6:51
 * To change this template use File | Settings | File Templates.
 */
Ext.define('cnblogs.view.imgview', {
    extend: 'Ext.Panel',
    xtype: 'imgview',


    config: {
        //modal:true,
        layout: 'fit',

        scrollable: {
            direction: 'both'

        },
        items: [
            {
                id:'imgviewcon',
                xtype: 'panel'



            },
            {
                xtype: 'panel',
                docked: 'bottom',

                items:[
                    {
                        xtype:'button',
                        text:'关闭',
                        handler:
                            function(){
                                //history.back();
                                // alert('- -');
                                // Ext.Viewport.setActiveItem('main');
                                Ext.Viewport.imgview.hide();

                            }

                    }
                ]
            }
        ],
        listeners:{
            show:function(obj, eOpts){
                data=this.getData();

                //alert(data);
                this.down("#imgviewcon").setHtml("<div><img src='"+data+"'></div>");
            }
        }
    }

});