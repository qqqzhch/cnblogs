/**
 * Created with PyCharm.
 * User: Administrator
 * Date: 13-5-5
 * Time: 上午10:24
 * To change this template use File | Settings | File Templates.
 */
Ext.define('cnblogs.model.blogclass', {
    extend: 'Ext.data.Model',
    store:'cnblogs.store.blogclass',
    config: {
        fields: [
            { name: 'Name', type: 'string' },
            { name: 'url', type: 'string' },
            { name: 'far', type: 'string' },
            { name: 'id', type: 'string' }


        ]
    }
});
