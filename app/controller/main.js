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
            'blogsinfo/:id/:name': 'blogsinfo'


        },
        refs: {
        newsbutn:"#newsbutton",
        feedlist:"#feedlist",
        newslist:'#newslist',
        seebloguser:'#seebloguser',
        userfeedlisttab:'#userfeedlist'

        },
        control: {
            newsbutn: {
                tap: 'newsbutntap'
            },
            feedlist:{
                itemtap:'feedtab'
            },
            newslist:{
                itemtap:'newstab'
            },
            seebloguser:{
                tap: 'seeblogusertap'//,
               // scope:this
            },
            userfeedlisttab:{
                itemtap: 'userfeedlisttabon'//,
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
    newstab:function(obj, index, target, record, e, eOpts ){
        console.log('newslist itemtap');
        this.redirectTo('newsinfo/'+index);
    },
    userfeedlisttabon:function(obj, index, target, record, e, eOpts ){
        console.log('userfeedlisttabon itemtap');
        this.redirectTo('blogsinfo/'+index+"/user");

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
        var aRecord= Ext.Viewport.blogsinfo.getRecord();
        var re1 = '.*?'; // Non-greedy match on filler
        var re2 = '(?:[a-z][a-z]+)'; // Uninteresting: word
        var re3 = '.*?'; // Non-greedy match on filler
        var re4 = '(?:[a-z][a-z]+)'; // Uninteresting: word
        var re5 = '.*?'; // Non-greedy match on filler
        var re6 = '(?:[a-z][a-z]+)'; // Uninteresting: word
        var re7 = '.*?'; // Non-greedy match on filler
        var re8 = '(?:[a-z][a-z]+)'; // Uninteresting: word
        var re9 = '.*?'; // Non-greedy match on filler
        var re10 = '((?:[a-z][a-z]+))'; // Word 1

        var patrn = new RegExp(re1 + re2 + re3 + re4 + re5 + re6 + re7 + re8 + re9 + re10, ["i"]);
        var result= patrn.exec(aRecord.data.link);
        if(result!= null)
        {
            name=result[1].replace(/</, "&lt;");


            this.redirectTo('userfeedlistpage/'+name);

        }

        //alert('- -');
    },

    viewHomePage:function()
    {
        Ext.Viewport.setActiveItem('main');
    }

});
