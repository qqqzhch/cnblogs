/**
 * Created with PyCharm.
 * User: Administrator
 * Date: 13-4-21
 * Time: 下午4:06
 * To change this template use File | Settings | File Templates.
 */
Ext.define('cnblogs.view.blogsinfo', {
    extend: 'Ext.Panel',
    xtype: 'blogsinfo',
    requires: [
      'cnblogs.store.blogsinfo'
    ],
    config: {
        layout:'fit',
        listeners:{
            painted:function(obj, eOpts){
                console.log('blogsinfo painted');
               var aRecord= this.getRecord();
                var patrn = /http.+\/(\d+)\.html/;
                var result= patrn.exec(aRecord.data.link);
                if(result==null)
                {
                    alert('该文章为知识库文章，暂时不支持浏览');
                }
                else
                {
                if(result.length==2)
                {
                    console.log('blogsinfo painted'+result[1]);

                }
                else
                {
                    return;
                }
                }


               var blogsinfo= Ext.data.blogsinfo;
                aRecord.data.text="loading.....";
               var  myblog=this.query("#myblog")[0];
                myblog.setData(aRecord.data);
                blogsinfo._proxy._url='http://qqloving.com/Account/getblogsinfo/'+result[1]+'/';

                Ext.data.JsonP.request({
                    //we give it the url to the free worldweatheronline.com api
                    url: 'http://qqloving.com/Account/getblogsinfo/'+result[1]+'/',
                    callbackKey: 'callback',
                    success: function(result) {
                        aRecord.data.text=result.text;
                        myblog.setData(aRecord.data);
                        //alert('- -');



                    }
                });
                //





            }

        }

    },
    initialize:function(){
        var objthis=this;
    console.log('blogsinfo initialize');

        var head={
            docked: 'top',
            xtype: 'titlebar',
            title: '博客详情'
        };
        var foot={
            docked: 'bottom',
            xtype: 'titlebar',
            title: 'foot',
            items:[
                {
                    xtype:'button',
                    text:'fanhui',
                    handler:
                        function(){
                            //history.back();
                            // alert('- -');
                            Ext.Viewport.setActiveItem('main');
                        }

                }
            ]
        };

        var blog={
            xtype:'panel',
            fullscreen:true,
            html:'blog',
            tpl:'<h1>{title}</h1><br><h2>@{author}</h2><br>{text}',
            id:'myblog',
            scrollable:'both'
        }



        this.add([head,blog,foot]);
        Ext.data.blogsinfo=  Ext.create("cnblogs.store.blogsinfo");



    }


});