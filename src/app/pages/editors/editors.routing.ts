import { Routes, RouterModule }  from '@angular/router';

import { Editors } from './editors.component';
import { Ckeditor } from './components/ckeditor/ckeditor.component';
import { MessageContact } from './components/messageContact/messageContact.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Editors,
    children: [
      { path: 'ckeditor', component: Ckeditor },
      { path: 'message-contact', component: MessageContact }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
