/*
* 2019-04-18
* 第 58 题：箭头函数与普通函数（function）的区别是什么？构造函数（function）可以使用 new 生成实例，那么箭头函数可以吗？为什么？
*/
 
箭头函数是普通函数的简写，可以更优雅的定义一个函数，和普通函数相比，有一下几点差异：
1、函数体内的 this 对象，就是定义时所在的对象，而不是使用时所在的对象。
2、不可以使用 arguments 对象，该对象在函数体内不存在。如果要用，可以使用rest参数代替。 
3、不可以使用yield命令，因为箭头函数函数不能用作Generator函数。
4、不能使用new命令，因为
    没有自己的this，无法调用call，apply。
    没有prototype属性，而new命令在执行的时候需要将构造函数的prototype赋值给新的对象的__proto__


new过程大致是这样的：
function newFunc(father, ...rest){
    var result={};
    result.__proto__=father.prototype;
    var result2=father.apply(result,rest);
    if((typeof result2 == 'object' || typeof result2=='function')&&result2!==null){
        return result2;
    }
    return result;
}  