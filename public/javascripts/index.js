(function(_elm){
    var _ctrls = _elm.getElementsByTagName('i');
    var _lists = _elm.getElementsByTagName('li');
    (function(){
        each(_ctrls,function(_ctrl,i){
            _ctrl.onclick=function(){
                each(_lists,function(_list,i){
                    delClass(_list,"z-crt");
                });
                each(_ctrls,function(_ctrl,i){
                    delClass(_ctrl,"z-crt");
                });
                addClass(_lists[i],"z-crt");
                addClass(_ctrls[i],"z-crt");
            }
        });
    })();
    function hasClass(_object,_clsname){
        var _clsname = _clsname.replace(".","");
        var _sCls = " "+(_object.className)+" ";
        return (_sCls.indexOf(" "+_clsname+" ") != -1) ? true : false;
    }
    function toClass(_str){
        var _str = _str.toString();
        _str = _str.replace(/(^\s*)|(\s*$)/g,"");
        _str = _str.replace(/\s{2,}/g," ");
        return _str;
    }
    function addClass(_object,_clsname){
        var _clsname = _clsname.replace(".","");
        if(!hasClass(_object,_clsname)){
            _object.className = toClass(_object.className+(" "+_clsname));
        }
    }
    function delClass(_object,_clsname){
        var _clsname = _clsname.replace(".","");
        if(hasClass(_object,_clsname)){
            _object.className = toClass(_object.className.replace(new RegExp("(?:^|\\s)"+_clsname+"(?=\\s|$)","g")," "));
        }
    }
    function each(_objects,_fn){
        for(var i=0,len=_objects.length;i<len;i++){
            _fn(_objects[i],i);
        }
    }
    var index = 0;
    function interval(){
        each(_lists,function(_list,i){
            delClass(_list,"z-crt");
        });
        each(_ctrls,function(_ctrl,i){
            delClass(_ctrl,"z-crt");
        });
        addClass(_lists[index],"z-crt");
        addClass(_ctrls[index],"z-crt");
        index++;
        index = index%5;
    }
    setInterval(interval, 5000);
})(document.getElementById('j-slide'));

(function(){
    function MarqueeL(){
        if(_elist.scrollLeft > 1540)
            _elist.scrollLeft = 0;
        else
            _elist.scrollLeft += 1;
    }
    var _elist = document.getElementById('picbox');
    if (_elist) {
        setInterval(MarqueeL, 50);
    }
    /*function MarqueeL(){
    if(_scene1.offsetWidth-_elist.scrollLeft<=0)
        _elist.scrollLeft-=_elist.offsetWidth;
    else
        _elist.scrollLeft++;
    }
    var MyMar;
    _elist.onmouseover=function() {
        if(MyMar){
            clearInterval(MyMar)
        }
    }

    function moveout()
    {
        if(MyMar)
        {
            clearInterval(MyMar);
        }
    }
    function moveThis(){
        if(MyMar)
        {
            clearInterval(MyMar);
        }
        MyMar=setInterval(MarqueeL,50);
        _elist.onmouseout=function() {
            MyMar=setInterval(MarqueeL,50)
        }
    }  
    moveThis();*/
})();