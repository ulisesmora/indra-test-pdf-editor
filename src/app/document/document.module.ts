import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentViewerComponent } from './document-viewer/document-viewer.component';
import { DocumentEditorComponent } from './document-editor/document-editor.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    DocumentViewerComponent,
    DocumentEditorComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class DocumentModule { }
