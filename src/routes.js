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
  { path: '/firstPage', name: 'first page', component: FirstPage },
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
