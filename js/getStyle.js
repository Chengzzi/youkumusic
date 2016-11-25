 function getStyle(obj,prop,value)
        {
            //传递两个参数的时候的功能是获取该对象的属性值
            //传递三个参数的时候的功能是设置该对象的属性的值
            //arguments 就是保存传递参数的数组
            if(arguments.length==2)
            {
                if(obj.currentStyle)
                {
                    return obj.currentStyle[prop];  // IE 浏览器的使用
                }
                else
                {
                    return getComputedStyle(obj,false)[prop];  //FF  chrome 高版本的浏览器
                }
            }
            else if(arguments.length==3)
            {
                obj.style[prop]=value;
            }
            else
            {

            }
        }