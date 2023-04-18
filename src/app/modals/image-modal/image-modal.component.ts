import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-image-modal',
  templateUrl: './image-modal.component.html'
})
export class ImageModalComponent implements OnInit {

  public renderImage:boolean=false;
  public image:string='';

  public imageForm:FormGroup  = new FormGroup({
    image: new FormControl(this.data, [
      Validators.required,
      Validators.pattern("^http.+(png|jpeg|gif|jpg)$")
    ])
  });

  constructor(
    public dialogRef: MatDialogRef<ImageModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string) { }

  ngOnInit(): void {
  }

  validateImage(){
    this.renderImage = true;
  }

  AddImage(){
    this.dialogRef.close({data:this.imageForm.value.image});
  }

}
