import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule,FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatDialogModule } from "@angular/material/dialog";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatSelectModule } from "@angular/material/select";
import { MatSortModule } from "@angular/material/sort";
import { MatStepperModule } from "@angular/material/stepper";
import { MatTableModule } from "@angular/material/table";
import { MatTooltipModule } from "@angular/material/tooltip";


/*Components*/
import { MatTabsModule } from "@angular/material/tabs";
import { MatDatepickerModule  } from "@angular/material/datepicker";
import  { MatNativeDateModule, MatRippleModule, MatOptionModule } from "@angular/material/core";
import { RouterModule } from "@angular/router";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatRadioModule } from "@angular/material/radio";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { HttpClientModule} from "@angular/common/http";
import { MatBadgeModule } from '@angular/material/badge';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatAutocompleteModule} from '@angular/material/autocomplete'; 
import {MatTreeModule} from '@angular/material/tree'; 
import {DragDropModule} from '@angular/cdk/drag-drop';
import {  MatMenuModule } from '@angular/material/menu';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from '../home/home/home.component';
import { DocumentViewerComponent } from '../document/document-viewer/document-viewer.component';
import { DocumentEditorComponent } from '../document/document-editor/document-editor.component';
import { PdfViewerModule } from "ng2-pdf-viewer";
import { NgOpendrawModule } from 'ng-opendraw';

@NgModule({
  
    declarations:[   
      HomeComponent,
      DocumentViewerComponent,
      DocumentEditorComponent  
    ],
    imports: [
        CommonModule,
        FormsModule,
        BrowserModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatCheckboxModule,
        MatExpansionModule,
        MatCardModule,
        MatSelectModule,
        MatOptionModule,
        MatFormFieldModule,
        MatIconModule,
        MatStepperModule,
        MatTreeModule,
        MatRippleModule,
        MatDialogModule,
        MatInputModule,
        MatProgressSpinnerModule,
        MatAutocompleteModule,
        MatMenuModule,
        MatTabsModule,
        MatDatepickerModule,
        MatListModule,
        MatNativeDateModule,
        MatRippleModule,
        RouterModule,
        MatBadgeModule,
        MatCardModule,
        MatTooltipModule,
        MatSnackBarModule,
        MatRadioModule,
        MatProgressBarModule,
        HttpClientModule,
        MatPaginatorModule,
        MatSortModule,
        DragDropModule,
        MatTableModule,
        BrowserAnimationsModule,
        PdfViewerModule,
        NgOpendrawModule
      ],
      exports: [
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatCheckboxModule,
        MatSelectModule,
        MatOptionModule,
        BrowserModule,
        MatAutocompleteModule,
        MatStepperModule,
        MatRippleModule,
        MatFormFieldModule,
        MatMenuModule,
        MatExpansionModule,
        MatIconModule,
        MatDialogModule,
        MatInputModule,
        MatTreeModule,
        MatBadgeModule,
        MatProgressSpinnerModule,
        MatTabsModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatListModule,
        MatRippleModule,
        MatCardModule,
        RouterModule,
        MatTooltipModule,
        MatRadioModule,
        MatSnackBarModule,
        MatProgressBarModule,
        HttpClientModule,
        MatListModule,
        DragDropModule,
        BrowserAnimationsModule,
        PdfViewerModule,
        NgOpendrawModule
      ],
      entryComponents: [
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]

    
    })
    export class SharedModule { }