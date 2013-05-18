/**
 * Created with PyCharm.
 * User: Administrator
 * Date: 13-5-5
 * Time: 下午1:56
 * To change this template use File | Settings | File Templates.
 */
Ext.define('cnblogs.view.blogclass', {
    extend: 'Ext.Panel',
    xtype: 'blogclass',

    requires: [
      'cnblogs.model.blogclass',
      'cnblogs.store.blogclass'
    ],
    config: {

        layout:'fit'
    },
    initialize:function(){
     var list={
         xtype:'list',
         store:Ext.create('cnblogs.store.blogclass'),
         itemTpl:'<div class="tweet"><span class="posted">@{far}</span><h2>{Name}</h2></div>',
         id:'blogclasslist'
     }
        var head={
            docked: 'top',
            xtype: 'titlebar',
            title: '博客园-分类',
            items:[
                {
                    xtype:'button',
                    text:'返回',
                    handler:
                        function(){
                            history.back();

                        }

                }
            ]
        };
        this.add([head,list]);

    }
});