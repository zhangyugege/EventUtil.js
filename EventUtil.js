/**
 * Created by Administrator on 2016/3/25.
 */
var EventUtil={

    //绑定事件
    addHandler:function(ele,type,handler){
        if(ele.addEventListener){
            ele.addEventListener(type,handler,false);
        }else if(ele.attachEvent){
            ele.attachEvent("on"+type,handler);
        }else{
            ele["on"+type]=handler;
        }
    },
    //解绑事件
    removeHandler:function(ele,type,handler){
        if(ele.removeEventListener){
            ele.removeEventListener(type,handler,false);
        }else if(ele.detachEvent){
            ele.detachEvent("on"+type,handler);
        }else {
            ele["on"+type]=null;
        }
    },
    //获取响应事件 IE下事件对象为window.event
    getEvent:function(event){
        return event?event:window.event;
    },
    getTarget:function(event){
        return event.target?event.target:event.srcElement;
    },
    //阻止事件传递 IE下为置returnValue为true
    preventDefault:function(event){
      if(event.preventDefault){
          event.preventDefault();
      } else {
          event.returnValue=false;
      }
    },
    //阻止事件冒泡
    stopPropagation:function(event){
        if(event.stopPropagation){
            event.stopPropagation();
        }else {
            event.cancelBubble=true;
        }
    }
};