/**
 * Created with PyCharm.
 * User: Administrator
 * Date: 13-4-22
 * Time: 下午7:59
 * To change this template use File | Settings | File Templates.
 */
Ext.define('cnblogs.model.blogsinfo', {
    extend: 'Ext.data.Model',
    store:'cnblogs.store.feedlist',
    config: {
        fields: [
            { name: 'id', type: 'int' },
            { name: 'value', type: 'string' }


        ]
    }
});
