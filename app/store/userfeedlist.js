/**
 * Created with PyCharm.
 * User: Administrator
 * Date: 13-4-20
 * Time: 下午1:10
 * To change this template use File | Settings | File Templates.
 */

Ext.define('cnblogs.store.userfeedlist', {
    extend: 'Ext.data.Store',

    config: {
        autoLoad: false,

        storeId:'userfeedlist',
        fields: [
            { name: 'id', type: 'int' },
            { name: 'title', type: 'string' },
            { name: 'contentSnippet', type: 'string' },
            { name: 'published', type: 'string' },
            { name: 'author', type: 'string' },
            { name: 'link', type: 'string' },
            { name: 'blogapp', type: 'string' },
            { name: 'diggs', type: 'string' },
            { name: 'views', type: 'string' },
            { name: 'comments', type: 'string' }

        ],
        proxy:{
            type: "jsonp",
           //http://wcf.open.cnblogs.com/blog/u/{BLOGAPP}/posts/{PAGEINDEX}/{PAGESIZE}
            url2:'',
            extraParams:{

            },
            reader: {
                type: "json",
                rootProperty: "responseData.feed.entries"

            }
        }
    },
    nextPage:function(options ){
        //重写原来的方法
    //alert('- -');
        if(this.currentPage2==null)
        {
            this.currentPage2=1;
        }
        this.currentPage2=this.currentPage2+1;
        this._proxy._url=this._proxy._url2+this.currentPage2+'/10/'

        this.loadPage(1, options);
    }
});
