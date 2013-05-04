/**
 * Created with PyCharm.
 * User: Administrator
 * Date: 13-4-25
 * Time: 下午7:58
 * To change this template use File | Settings | File Templates.
 */
Ext.define('cnblogs.view.newsinfo', {
    extend: 'Ext.Panel',
    xtype: 'newsinfo',
    requires: [
        'cnblogs.store.newsinfo'
    ],
    config: {
        layout:'fit',
        listeners:{
            painted:function(obj, eOpts){
                console.log('newsinfo painted');
                var aRecord= this.getRecord();
                var patrn = /http.+\/(\d+)\//;
                var result= patrn.exec(aRecord.data.link);
                var ss = result;
                if(result.length==2)
                {
                    console.log('newsinfo painted'+result[1]);

                }
                else
                {
                    return;
                }



                aRecord.data.text="loading.....";
                var  myblog=this.query("#myblog")[0];
                myblog.setData(aRecord.data);


                Ext.data.JsonP.request({
                    //we give it the url to the free worldweatheronline.com api
                    url: 'http://qqloving.com/Account/getnewsinfo/'+result[1]+'/',
                    callbackKey: 'callback',
                    success: function(result) {
                        aRecord.data.text=result.Content;

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
        console.log('newsinfo initialize');

        var head={
            docked: 'top',
            xtype: 'titlebar',
            title: '新闻'
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
                            history.back();
                            // alert('- -');
                           // Ext.Viewport.setActiveItem('newslist');
                        }

                }
            ]
        };

        var blog={
            xtype:'panel',
            fullscreen:true,
            html:'blog',
            tpl:'<h1>{title}</h1><br><br>{text}',
            id:'myblog',
            scrollable:'both'
        }



        this.add([head,blog,foot]);




    }


});