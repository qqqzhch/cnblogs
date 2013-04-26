/**
 * Created with PyCharm.
 * User: Administrator
 * Date: 13-4-20
 * Time: 下午1:10
 * To change this template use File | Settings | File Templates.
 */

Ext.define('cnblogs.store.newslist', {
    extend: 'Ext.data.Store',


    config: {
        autoLoad: true,
        fields: [
            { name: 'id', type: 'int' },
            { name: 'title', type: 'string' },
            { name: 'contentSnippet', type: 'string' },
            { name: 'published', type: 'string' },

            { name: 'link', type: 'string' },

            { name: 'diggs', type: 'string' },
            { name: 'views', type: 'string' },
            { name: 'comments', type: 'string' }

        ],
        proxy:{
            type: "jsonp",

            url : "https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=15&q=http://wcf.open.cnblogs.com/news/recent/paged/1/10",
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
       console.log('- -');
        this._proxy._url='https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=15&q=http://wcf.open.cnblogs.com/news/recent/paged/'+(this.currentPage + 1)+'/10'
        this.loadPage(1, options);
    }
});
