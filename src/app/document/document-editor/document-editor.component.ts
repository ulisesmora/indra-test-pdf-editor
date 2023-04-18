import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ImageModalComponent } from '../../modals/image-modal/image-modal.component';

@Component({
  selector: 'app-document-editor',
  templateUrl: './document-editor.component.html',
  styleUrls: ['./document-editor.component.scss'],
})
export class DocumentEditorComponent implements OnInit {
  options: string = 'TEXT';
  zoom: number = 1;
  rotation: number = 0;
  actualImage:string = '';
  @Output() zoomReaction = new EventEmitter<number>();
  @Output() rotationReaction = new EventEmitter<number>();
  @Output() imageReaction = new EventEmitter<string>();
  @Output() saveDocumentReaction = new EventEmitter<void>();
  @Output() optionDocumentReaction = new EventEmitter<string>();

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  ChangeEdit(option: number) {
    if (option === 1) {
      this.options = 'IMAGE';
    }
    if (option === 2) {
      this.options = 'TEXT';
    }
    if (option === 3) {
      this.options = 'PENCIL';
    }
    if (option === 4) {
      this.options = 'REMOVE';
    }

    if (option === 5) {
      this.options = 'EDIT';
    }
    this.optionDocumentReaction.emit(this.options);
  }

  Rotation() {
    if (this.rotation === 0) {
      this.rotation = 90;
      this.rotationReaction.emit(this.rotation);
      return;
    }
    if (this.rotation === 90) {
      this.rotation = 180;
      this.rotationReaction.emit(this.rotation);
      return;
    }
    if (this.rotation === 180) {
      this.rotation = 270;
      this.rotationReaction.emit(this.rotation);
      return;
    }
    if (this.rotation === 270) {
      this.rotation = 0;
      this.rotationReaction.emit(this.rotation);
      return;
    }
  }

  Zoom(value: boolean) {
    if (this.zoom == 1.0 && !value) {
      return;
    }
    if (this.zoom == 3.5 && value) {
      return;
    }
    this.zoom += value ? 0.5 : -0.5;
    this.zoomReaction.emit(this.zoom);
  }

  openDialog() {
    const dialogRef = this.dialog.open(ImageModalComponent, {
      width: '250px',
      data: this.actualImage,
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.actualImage=result.data;
      this.imageReaction.emit(result.data);
      this.ChangeEdit(1);
    });
  }

  printAddElements() {
    this.saveDocumentReaction.emit();
  }
}
