Ext.define('cnblogs.view.Main', {
    extend: 'Ext.Panel',
    xtype: 'main',

    requires: [
        'Ext.TitleBar',
        'cnblogs.store.feedlist',
        'Ext.plugin.ListPaging'



    ],
    config: {
        layout:'fit'
    },

    initialize:function(){

        var head={
            docked: 'top',
            xtype: 'titlebar',
            title: '博客园-首页'
        };
        var foot={
            docked: 'bottom',
            xtype: 'titlebar',
            title: 'foot'
        };
        var feedlist={
            xtype:'list',
            itemTpl:'<h1>{title}@{author}</h1>',
            store: Ext.create("cnblogs.store.feedlist"),
            listeners:{
              itemtap:function( obj, index, target, record, e, eOpts ){
                  console.log('feedlist itemtap');
                  //这里直接做页面跳转吧
                  //var view = Ext.create('cnblogs.view.blogsinfo');

                  if(Ext.Viewport.blogsinfo==undefined )
                  {
                      Ext.Viewport.blogsinfo = Ext.create('cnblogs.view.blogsinfo');
                      Ext.Viewport.add(Ext.Viewport.blogsinfo);
                  }
                  Ext.Viewport.blogsinfo.setRecord(record);

                  Ext.Viewport.setActiveItem('blogsinfo');


              }
            },
            plugins: [
                {
                    xclass: 'Ext.plugin.ListPaging',
                    autoPaging: true
                }
            ]

          }

        this.add([head,feedlist,foot]);




    }
});
