1、state，又称为state tree， 可能是这么一种结构（只能看不能动）

    {
        dothing:'show_all'
        login:{
            isLogin : false,
            show : true

            inputbutton:{
                active: false
                text: 'sign up'
            }
        }
    }

2、reducer，主要就是通过action更新state，其中是主要的业务逻辑处理
    
    参数： 旧的state(没有可以默认一个对象)， action   返回：新的state

3、store，store用来管理state tree，只是一个拥有几个方法的对象

    获取：  store要创建它，只需要把根部的reducer函数传递给createStore（来自于import redux）
            const store = createStore(reducer);
    
    比如：   {
                getState: function(){...},
                dispatch: function(action){...}, // 触发state发生变化
                ...   
            }
    
    store改变state的值的办法，只有dispatch一个action，即store.dispatch(action)

4、action, 是一个对象（vue呢，是一些方法）

    action: {
        type: 'ADD_TODO'   // 表示它的类型 
        payload: ''        // 负载的值
    }

创建步骤：

1、基于一定的处理原则(reducer)，获取到store

    const store = createStore(reducer)

2、根据reducer中的处理逻辑，传入对应的action，进行处理state

    store.dispatch(action)

3、生成相应的映射方法
    
    mapStateToProps, 负责输入逻辑，即将state映射到 UI 组件的参数（props）

    mapDispatchToProps, 负责输出逻辑，即将用户对 UI 组件的操作映射成 Action。

4、连接组件

    connect方法，用于从 UI 组件（react定义的组件）生成容器组件（为UI组件管理数据和业务逻辑，充当数据源）

    const App = connect(mapStateToProps,mapDispatchToProps)(Counter)

5、Provider在帮助容器组件拿到state，生成UI组件的参数（比如this.state.islogin等等）

    connect方法生成容器组件以后，需要让容器组件拿到state对象，才能生成 UI 组件的参数。

    Provider在根组件外面包了一层，这样一来，App的所有子组件就默认都可以拿到state了
    
    Provider帮助所有的子组件拿到store，从而通过store.getState方法拿到state    

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/)

For beginners like me to learn the concepts in [Redux](https://github.com/reactjs/redux)

To run this example:

1. [Download this repo](https://github.com/jackielii/simplest-redux-example/archive/master.zip) or `git clone https://github.com/jackielii/simplest-redux-example.git`
2. From the repo folder run:  
   `npm install`
3. `npm start`
4. open [http://localhost:8000/](http://localhost:8000/) in the browser

And also head over to http://redux.js.org/ for some great documentation.

There is also a [webpack](https://github.com/jackielii/simplest-redux-example/tree/webpack) and an [ES5](https://github.com/jackielii/simplest-redux-example/tree/es5) example.
