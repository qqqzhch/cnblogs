/**
 * Created with PyCharm.
 * User: Administrator
 * Date: 13-4-25
 * Time: 下午7:44
 * To change this template use File | Settings | File Templates.
 */
Ext.define('cnblogs.store.newsinfo', {
    extend: 'Ext.data.Store',

    config:{
        autoLoad: false,
        fields: [
            { name: 'id', type: 'int' },
            { name: 'Content', type: 'string' },
            { name: 'Title', type: 'string' },
            { name: 'ImageUrl', type: 'string' }
        ],
        proxy:{
            type: "jsonp",
            url : "http://http://qqloving.com/Account/getnewsinfo/0/",
            reader: {
                type: "json",
                rootProperty: "value"

            }
        }

    }
});
