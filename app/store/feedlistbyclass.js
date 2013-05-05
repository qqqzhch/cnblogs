/**
 * Created with PyCharm.
 * User: Administrator
 * Date: 13-5-5
 * Time: 下午2:52
 * To change this template use File | Settings | File Templates.
 */
Ext.define('cnblogs.store.feedlistbyclass', {
    extend: 'Ext.data.Store',

    modal:'cnblogs.model.feedlist',

    config: {
        autoLoad: false,
        storeId:'feedlistbyclass',
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
            reader: {
                type: "json",
                rootProperty: "responseData.feed.entries"

            }
        }
    }

});