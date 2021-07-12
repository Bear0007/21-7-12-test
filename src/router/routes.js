import Index from '@/pages/index';
    import Page1 from '@/pages/item/page1';
    import Page2 from '@/pages/item/page2';

import Login from '@/pages/login';
import Register from '@/pages/register';

export default [
    // 初始化
    {
        path: '/',
        redirect: { name: 'index' }
    },
    {
        path: "*",
        redirect: "/"
    },
    
    // router
    {   
        name: "index",
        path: '/index',
        component: Index,
        meta: { name:"首页", auth:true }, 
        children: [
            {
                name: "page1",
                path: 'page1',
                component: Page1,
                meta: { name:"首页", auth:true }, 
            },
            {
                name: "page2",
                path: 'page2',
                component: Page2,
                meta: { name:"首页", auth:true }, 
            }
        ]
    },
    {   
        name: "login",
        path: '/login',
        component: Login,
        meta: { name:"登录", auth:true },
    },
    {   
        name: "register",
        path: '/register',
        component: Register,
        meta: { name:"注册", auth:true },
    },
]