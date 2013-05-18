/**
 * Created with PyCharm.
 * User: Administrator
 * Date: 13-5-5
 * Time: 下午2:59
 * To change this template use File | Settings | File Templates.
 */
Ext.define('cnblogs.view.feedlistbyclass', {
    extend: 'Ext.Panel',
    xtype: 'feedlistbyclass',

    requires: [
        'Ext.TitleBar',
        'cnblogs.store.feedlistbyclass'
    ],
    config: {
        layout:'fit',
        masked:false,

        listeners:{
            painted:function(obj, eOpts){
                console.log('feedlistbyclass painted');
                aRecord= Ext.Viewport.feedlistbyclass.getRecord();
                Ext.ComponentQuery.query('#readbycladsstitle')[0].setTitle(aRecord.data.Name);
                ////http://wcf.open.cnblogs.com/blog/u/{BLOGAPP}/posts/1/10
                Ext.data.feedlistbyclass._proxy._url='https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=15&q='+aRecord.data.url;
                Ext.data.feedlistbyclass.load();



            }
        }
    },

    initialize:function(){

        var head={
            docked: 'top',
            xtype: 'titlebar',
            title: '博客园-分类阅读',
            id:'readbycladsstitle',
            items:[
                {
                    xtype:'button',
                    text:'返回',
                    handler:
                        function(){
                            history.back();
                            // alert('- -');

                        }

                }
            ]
        };
        var foot={
            docked: 'bottom',
            xtype: 'titlebar',

            items:[
                {
                    xtype:'button',
                    text:'返回',
                    handler:
                        function(){
                            history.back();
                            // alert('- -');

                        }

                }
            ]
        };
        Ext.data.feedlistbyclass=  Ext.create("cnblogs.store.feedlistbyclass");
        var feedlist={
            xtype:'list',
            itemTpl:'<h2 style=" font-weight: bolder; font-size: large;">{title}@{author}</h2><p>{contentSnippet}</p>',
            store: Ext.data.feedlistbyclass,
            id:'feedlistbyclass'

        }

        this.add([head,feedlist]);





    }
});