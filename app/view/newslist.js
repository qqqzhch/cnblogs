/**
 * Created with PyCharm.
 * User: Administrator
 * Date: 13-4-24
 * Time: 下午9:06
 * To change this template use File | Settings | File Templates.
 */
Ext.define('cnblogs.view.newslist', {
    extend: 'Ext.Panel',
    xtype: 'newslist',

    requires: [
        'Ext.TitleBar',
        'cnblogs.store.newslist',

        'Ext.plugin.ListPaging'



    ],

    config: {
        html: 'Welcome to my app',
        fullscreen: true,
        layout:'fit'
    },

    initialize:function(){
        console.log('news list')
        var head={
            docked: 'top',
            xtype: 'titlebar',
            title: '博客园-新闻'
        };
        var foot={
            docked: 'bottom',
            xtype: 'titlebar',
            title: 'foot',
            items:[
                {
                    xtype:'button',
                    text:'返回',
                    handler:
                        function(){
                            history.back();
                            // alert('- -');

                           // Ext.Viewport.setActiveItem('main');
                        }

                }
            ]
        };
        var newslist={
            xtype:'list',
            itemTpl:'<h1 style=" font-weight: bolder; font-size: large;">{title}</h1><p>{contentSnippet}</p>',
            store: Ext.create("cnblogs.store.newslist"),
            id:'newslist',
            /*
            listeners:{
                itemtap:function( obj, index, target, record, e, eOpts ){
                    console.log('feedlist itemtap');
                    //这里直接做页面跳转吧
                    //var view = Ext.create('cnblogs.view.blogsinfo');

                    if(Ext.Viewport.newsinfo==undefined )
                    {
                        Ext.Viewport.newsinfo= Ext.create('cnblogs.view.newsinfo');
                        Ext.Viewport.add(Ext.Viewport.newsinfo);
                    }
                    Ext.Viewport.newsinfo.setRecord(record);

                    Ext.Viewport.setActiveItem('newsinfo');


                }
            },
            */
            plugins: [
                {
                    xclass: 'Ext.plugin.ListPaging',
                    autoPaging: true
                }
            ]

        }

        this.add([head,newslist,foot]);

    }

});
