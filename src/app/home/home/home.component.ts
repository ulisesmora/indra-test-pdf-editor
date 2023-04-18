import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MockupDocumentsService } from 'src/data/mockups/documents-service';
import { pdfModel } from 'src/domain/models/pdf-model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public documents:pdfModel[]=[];

  constructor(
    private documentService:MockupDocumentsService,
    private router:Router) { 

  }

  GoToDocument(id:string){
    this.router.navigate([`/document/${id}`]);
  }

  ngOnInit(): void {
    const data = this.documentService.getDocuments().subscribe(document => this.documents = document);
    
  }

}
