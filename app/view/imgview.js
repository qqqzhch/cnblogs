/**
 * Created with PyCharm.
 * User: Administrator
 * Date: 13-5-11
 * Time: 下午6:51
 * To change this template use File | Settings | File Templates.
 */
Ext.define('cnblogs.view.imgview', {
    extend: 'Ext.Panel',
    xtype: 'imgview',


    config: {
        //modal:true,
        layout: 'fit',
        id:'imgviewpanel',

        scrollable:false,
        items: [
            {
                id:'imgviewcon',
                xtype: 'panel'





            },
            {
                xtype: 'panel',
                docked: 'bottom',

                items:[
                    {
                        xtype:'button',
                        text:'关闭',
                        handler:
                            function(){
                                //history.back();
                                // alert('- -');
                                // Ext.Viewport.setActiveItem('main');
                                Ext.Viewport.imgview.hide();

                            }

                    }
                ]
            }
        ],
        listeners:{
            show:function(obj, eOpts){
                data=this.getData();
               console.log('view');
                //alert(data);
              var aWidth=0;
              var aHeight=0;
               // alert(data);
                this.down("#imgviewcon").setHtml('<div id="imgvewtag" "></div>');

                Ext.Array.each(Ext.dom.Element.select("#imgvewtag").elements, function(name, index, countriesItSelf) {
                Ext.get(name).setStyle('background',"url('" + data + "')" + "  " + 0 + "px   " + 0 + "px  " + "no-repeat scroll  transparent");
                Ext.get(name).setStyle("width",Ext.getBody().getWidth()+"px");
                Ext.get(name).setStyle("height",Ext.getBody().getHeight()+"px");

                 Ext.get(name).on('drag',
                     function(event,node,options,eOpts){
                        // event.deltaX;
                        // event.deltaY;
                         //Ext.scroll.View.getScroller().scrollTo(event.deltaX,event.deltaY,true);
                         //Ext.getCmp('imgviewpanel').getScrollable().getScroller().scrollBy(event.deltaX,event.deltaY,true);
                         var foot=8;
                         if(event.deltaX>0)
                         {
                             aWidth+=foot;
                         }
                         else
                         {
                             aWidth+=-foot;
                         }
                         if(event.deltaY>0)
                         {
                             aHeight+=foot;
                         }
                         else
                         {
                             aHeight+=-foot;
                         }
                         Ext.get(this).setStyle("background", "url('" + data + "')" + "  " + aWidth + "px   " + aHeight + "px  " + "no-repeat scroll  transparent");
                         //Ext.get(this).setX(event.deltaX);
                         //Ext.get(this).setY(event.deltaY);
                         //alert('- -');




                     }, this
                 );

                });



            }
        }
    }

});