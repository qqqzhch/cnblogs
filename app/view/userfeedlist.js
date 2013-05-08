Ext.define('cnblogs.view.userfeedlist', {
    extend: 'Ext.Panel',
    xtype: 'userfeedlist',

    requires: [
        'Ext.TitleBar',
        'cnblogs.store.userfeedlist',
        'Ext.plugin.ListPaging'



    ],
    config: {
        layout:'fit',


        listeners:{
            painted:function(obj, eOpts){
                console.log('userfeedlist painted');
                 aRecord= this.getData();

                ////http://wcf.open.cnblogs.com/blog/u/{BLOGAPP}/posts/1/10
                Ext.data.userfeedlist._proxy._url='https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=15&q=http://wcf.open.cnblogs.com/blog/u/'+aRecord+'/posts/1/10/'
                Ext.data.userfeedlist._proxy._url2='https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=15&q=http://wcf.open.cnblogs.com/blog/u/'+aRecord+'/posts/'

                Ext.data.userfeedlist.load();


            }
        }
    },

    initialize:function(){

        var head={
            docked: 'top',
            xtype: 'titlebar',
            title: '博客园-博主主页'
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

                        }

                }
            ]
        };
        Ext.data.userfeedlist=  Ext.create("cnblogs.store.userfeedlist");
        var feedlist={
            xtype:'list',
            itemTpl:'<h2 style=" font-weight: bolder; font-size: large;">{title}@{author}</h2><p>{contentSnippet}</p>',
            store: Ext.data.userfeedlist,
            id:'userfeedlist'


            /*
            ,
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
            }
            */


          }

        this.add([head,feedlist,foot]);





    }
});
