import { Detail } from './detail.component';
import { Index } from './index.component';
import { List } from './list.component';

// async components must be named routes for WebpackAsyncRoute
export const routes = {
  path: 'detail', component: Detail,
  children: [
    { path: '', component: Index },
    { path: 'list', component: List },
  ]
};