import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CKEditorModule } from 'ng2-ckeditor';
import { NgaModule } from '../../theme/nga.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';


import { routing }       from './editors.routing';
import { Editors } from './editors.component';
import { Ckeditor } from './components/ckeditor/ckeditor.component';
import { MessageContact } from './components/messageContact/messageContact.component';
import { MessagesTablesService } from './components/ckeditor/messages.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    CKEditorModule,
    routing,
    Ng2SmartTableModule,
  ],
  declarations: [
    Editors,
    Ckeditor,
    MessageContact
  ],
  providers: [
    MessagesTablesService
  ]
})
export default class EditorsModule {
}
