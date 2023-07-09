import HelloWorld from './components/HelloWorld';
import HomePage from './components/HomePage';
import FirstPage from './components/FirstPage';
import SecondPage from './components/SecondPage';
import SecondProfile from './components/SecondProfile';
import SecondPosts from './components/SecondPosts';
import NotFound from './components/NotFound';

const routes = [
  { path: '/', name: 'home page', component: HomePage },
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
    path: '*', component: NotFound
  }
];

export default routes;
