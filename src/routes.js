import HelloWorld from './components/HelloWorld';
import HomePage from './components/HomePage';
import FirstPage from './components/FirstPage';
import SecondPage from './components/SecondPage';
import SecondProfile from './components/SecondProfile';
import SecondPosts from './components/SecondPosts';
import ThirdPage from './components/ThirdPage';
import ThirdPageA from './components/ThirdPageA';
import ThirdPageB from './components/ThirdPageB';
import FourPage from './components/FourPage';
import FourPageA from './components/FourPageA';
import FourPageB from './components/FourPageB';
import NotFound from './components/NotFound';

const routes = [
  // { path: '/', redirect: '/home' },
  { path: '/', redirect: { name: 'home page' } },
  { path: '/home', name: 'home page', component: HomePage },
  { path: '/helloWorld', name: 'hello world', component: HelloWorld },
  {
    path: '/firstPage', name: 'first page', component: FirstPage,
    beforeEnter: (to, from, next) => {
      console.log('firstPage == beforeEnter == to, from: ', to, from);
      next();
    },
  },
  {
    path: '/secondPage/:id', name: 'second page',component: SecondPage, children: [
      {
        path: 'profile', name: 'second profile page',
        component: SecondProfile
      },
      {
        path: 'posts', name: 'second posts page',
        component: SecondPosts
      }
    ]
  },
  {
    path: '/thirdPage', name: 'thirdPage', components: {
      default: ThirdPage,
      a: ThirdPageA,
      b: ThirdPageB
    }
  },
  {
    path: '/fourthPage/:id', name: 'fourthPage', components: {
      default: FourPage,
      a: FourPageA,
      b: FourPageB

    },
    props: {
      default: true,
      a: { objId: '777' },
      b: route => {
        console.log('route: ', route);
        return{ objId: route.params.id}
      }
    }
  },
  {
    path: '*', component: NotFound
  }
];

export default routes;


// 导航被触发。
// 在失活的组件里调用 beforeRouteLeave 守卫。
// 调用全局的 beforeEach 守卫。
// 在重用的组件里调用 beforeRouteUpdate 守卫 (2.2+)。
// 在路由配置里调用 beforeEnter。
// 解析异步路由组件。
// 在被激活的组件里调用 beforeRouteEnter。
// 调用全局的 beforeResolve 守卫 (2.5+)。
// 导航被确认。
// 调用全局的 afterEach 钩子。
// 触发 DOM 更新。
// 调用 beforeRouteEnter 守卫中传给 next 的回调函数，创建好的组件实例会作为回调函数的参数传入。