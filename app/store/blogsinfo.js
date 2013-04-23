/**
 * Created with PyCharm.
 * User: Administrator
 * Date: 13-4-21
 * Time: 下午8:42
 * To change this template use File | Settings | File Templates.
 */
Ext.define('cnblogs.store.blogsinfo', {
    extend: 'Ext.data.Store',
    config:{
        autoLoad: false,
        fields: [
            { name: 'id', type: 'int' },
            { name: 'value', type: 'string' }
        ],
        proxy:{
            type: "jsonp",
            url : "http://http://qqloving.com/Account/getblogsinfo/0/",
            reader: {
                type: "json",
                rootProperty: "value"

            }
        }

    }
});