import  {Routes, RouterModule} from '@angular/router';
import { InfouserComponent } from './infouser/infouser.component';

const app: Routes =
[
		{ path: "info/:name/:des/:cname", component: InfouserComponent }
]

export const routing = RouterModule.forRoot(app);
