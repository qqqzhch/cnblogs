/**
 * Created with PyCharm.
 * User: Administrator
 * Date: 13-4-20
 * Time: 下午1:11
 * To change this template use File | Settings | File Templates.
 */
Ext.define('cnblogs.controller.main', {
    extend: 'Ext.app.Controller',

    config: {
        routes: {
            '': 'viewHomePage',
            'newspage': 'newspage',
            'blogsinfo/:id': 'blogsinfo',
            'newsinfo/:id':'newsinfopage',
            'userfeedlistpage/:name':'userfeedlistpage',
            'blogsinfo/:id/:name': 'blogsinfo',
            'classpage': 'classpage',
            'feedbyclass/:id':'feedbyclass',
            'blogsinfo/:id/:id2': 'blogsinfo',
            'blogsinfo2/:id': 'blogsinfo2'



        },
        refs: {
        newsbutn:"#newsbutton",
        feedlist:"#feedlist",
        newslist:'#newslist',
        seebloguser:'#seebloguser',
        userfeedlisttab:'#userfeedlist',
        classbutton:'#classbutton',
        blogclasslist:'#blogclasslist',
        feedlist2:'#feedlistbyclass'




        },
        control: {
            newsbutn: {
                tap: 'newsbutntap'
            },
            feedlist:{
                itemtap:'feedtab',
                itemswipe:'feedlistitemswipe'
            },
            feedlist2:{
                itemtap:'feedtab2',
                itemswipe:'userfeedlistwipe'
            },
            newslist:{
                itemtap:'newstab',
                itemswipe:'newslistwipe'
            },
            seebloguser:{
                tap: 'seeblogusertap'//,
               // scope:this
            },
            userfeedlisttab:{
                itemtap: 'userfeedlisttabon',
                itemswipe:'userfeedlistwipe'
            },
            classbutton:{
                tap: 'classbuttontap'//,
            },
            blogclasslist:{
                itemtap:'blogclassitemtab',
                itemswipe:'blogclasslistwipe'
            }





        }
    },




   newspage:function(){
       if(Ext.Viewport.newslist==undefined)
       {
           Ext.Viewport.newslist=Ext.create('cnblogs.view.newslist');
       }

       Ext.Viewport.setActiveItem(Ext.Viewport.newslist);
   },
    newsbutntap:function(){
        this.redirectTo('newspage');

    },

    feedtab:function(obj, index, target, record, e, eOpts ){
        console.log('feedlist itemtap');
        this.redirectTo('blogsinfo/'+index);
    },
    feedtab2:function(obj, index, target, record, e, eOpts ){
        console.log('feedlist itemtap');
        this.redirectTo('blogsinfo2/'+index);
    },

    feedlistitemswipe:function(obj, index, target, record, e, eOpts){
        console.log('feedlistitemswipe');
        if(e.direction=="right")
        {
            this.redirectTo('classpage');
        }
        else
        if(e.direction=="left")
        {
            this.redirectTo('newspage');
        }

    },
    blogclasslistwipe:function(obj, index, target, record, e, eOpts){
        if(e.direction=="left")
        {
            this.redirectTo('');
        }

    },
    newslistwipe:function(obj, index, target, record, e, eOpts){
        if(e.direction=="right")
        {
            this.redirectTo('');
        }
    },
    userfeedlistwipe:function(obj, index, target, record, e, eOpts){
        if(e.direction=="right")
        {
            history.back();
        }
    },
    newstab:function(obj, index, target, record, e, eOpts ){
        console.log('newslist itemtap');
        this.redirectTo('newsinfo/'+index);
    },
    userfeedlisttabon:function(obj, index, target, record, e, eOpts ){
        console.log('userfeedlisttabon itemtap');
        this.redirectTo('blogsinfo/'+index+"/user");

    },
    blogclassitemtab:function(obj, index, target, record, e, eOpts){
        console.log('blogclassitemtab itemtap');
        this.redirectTo('feedbyclass/'+index);
    },
    feedbyclass:function(id){
        console.log('feedbyclass');

        record= Ext.getStore('blogclass').getAt(id)
        if(Ext.Viewport.feedlistbyclass==undefined )
        {
            Ext.Viewport.feedlistbyclass=Ext.create('cnblogs.view.feedlistbyclass');
        }

        Ext.Viewport.feedlistbyclass.setRecord(record);

        Ext.Viewport.setActiveItem('feedlistbyclass');

    },
    blogsinfo:function(id,obj){

        if(obj==undefined)
        {
            record= Ext.getStore('feedlist').getAt(id)
        }
        else
        {
            record= Ext.getStore('userfeedlist').getAt(id)
        }


        if(Ext.Viewport.blogsinfo==undefined )
        {
            Ext.Viewport.blogsinfo = Ext.create('cnblogs.view.blogsinfo');
            Ext.Viewport.add(Ext.Viewport.blogsinfo);
        }
        Ext.Viewport.blogsinfo.setRecord(record);

        Ext.Viewport.setActiveItem('blogsinfo');
    },

    blogsinfo2:function(id,obj){

        if(obj==undefined)
        {
            record= Ext.getStore('feedlistbyclass').getAt(id)
        }
        else
        {
            //record= Ext.getStore('userfeedlist').getAt(id)
        }


        if(Ext.Viewport.blogsinfo==undefined )
        {
            Ext.Viewport.blogsinfo = Ext.create('cnblogs.view.blogsinfo');
            Ext.Viewport.add(Ext.Viewport.blogsinfo);
        }
        Ext.Viewport.blogsinfo.setRecord(record);

        Ext.Viewport.setActiveItem('blogsinfo');
    },


    classbuttontap:function(){

        this.redirectTo('classpage');
    },
    classpage:function(){
        if(Ext.Viewport.blogclass==undefined )
        {
            Ext.Viewport.blogclass= Ext.create('cnblogs.view.blogclass');
            Ext.Viewport.add(Ext.Viewport.blogclass);
        }
        Ext.Viewport.setActiveItem('blogclass');
    },
    newsinfopage:function(id){
        console.log('newsinfopage');
        record= Ext.getStore('newsliststore').getAt(id)
        if(Ext.Viewport.newsinfo==undefined )
        {
            Ext.Viewport.newsinfo= Ext.create('cnblogs.view.newsinfo');
            Ext.Viewport.add(Ext.Viewport.newsinfo);
        }
        Ext.Viewport.newsinfo.setRecord(record);

        Ext.Viewport.setActiveItem('newsinfo');
    },
    userfeedlistpage:function(name){
        if(Ext.Viewport.userfeedlist==undefined)
        {
            Ext.Viewport.userfeedlist=Ext.create('cnblogs.view.userfeedlist');
        }
        Ext.Viewport.userfeedlist.setData(name);
        Ext.Viewport.setActiveItem(Ext.Viewport.userfeedlist);
    },
    seeblogusertap:function(){
        console.log('seeblogusertap');
        var aRecord= Ext.Viewport.blogsinfo.getRecord();


        //var patrn =  new RegExp(re1+re2+re3+re4+re5+re6+re7+re8+re9+re10,["i"]);
        var patrn =  /\.com\/([^\/]+?)\//;
       // var result= patrn.exec(aRecord.data.link);
        var result= aRecord.data.link.match(patrn);
        if(result!= null)
        {
           // alert(result[1]);
            //name=result[1].replace(/</, "&lt;");
            name=result[1]
            this.redirectTo('userfeedlistpage/'+name);

        }
        else
        {
            alert('异常url'+aRecord.data.link);
        }

        //alert('- -');
    },

    viewHomePage:function()
    {
        Ext.Viewport.setActiveItem('main');
    }

});
