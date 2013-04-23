/**
 * Created with PyCharm.
 * User: Administrator
 * Date: 13-4-20
 * Time: 下午1:10
 * To change this template use File | Settings | File Templates.
 */
Ext.define('cnblogs.model.feedlist', {
    extend: 'Ext.data.Model',
    store:'cnblogs.store.feedlist',
    config: {
        fields: [
            { name: 'id', type: 'int' },
            { name: 'title', type: 'string' },
            { name: 'summary', type: 'string' },
            { name: 'published', type: 'string' },
            { name: 'author', type: 'string' },
            { name: 'link', type: 'string' },
            { name: 'blogapp', type: 'string' },
            { name: 'diggs', type: 'string' },
            { name: 'views', type: 'string' },
            { name: 'comments', type: 'string' }

        ]

    }
});