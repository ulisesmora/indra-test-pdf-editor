


import { Observable, of } from 'rxjs';
import { pdfEntity } from '../repositories/document/entities/document-entity';
import { pdfModel } from '../../domain/models/pdf-model';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { DocumentImplementationRepositoryMapper } from '../repositories/document/mapper/documen-mapper';

@Injectable({
    providedIn: 'root'
  })
export class MockupDocumentsService {


    documentMapper = new DocumentImplementationRepositoryMapper();

public documents:pdfEntity[] = [
    {
    "active":true,
    "created_at":new Date(),
    "documentReference":"../../assets/principito.pdf",
    "name":"El principito",
    "size":25000
   },
   {
    "active":true,
    "created_at":new Date(),
    "documentReference":"../../assets/iphone.pdf",
    "name":"Iphone quick guide",
    "size":25000
   },
   {
    "active":true,
    "created_at":new Date(),
    "documentReference":"../../assets/manual_ps2.pdf",
    "name":"Manual_ps2",
    "size":25000
   },
   {
    "active":true,
    "created_at":new Date(),
    "documentReference":"../../assets/su37.pdf",
    "name":"SU-37",
    "size":25000
   }
]

  getDocuments(): Observable<pdfModel[]> {
    return of(this.documents).pipe(
        map(data => data.map(this.documentMapper.mapFrom)));
  }

  getDocumentById(id:string):Observable<pdfModel >| undefined{
    const document = this.documents.find(value => value.name === id);
    console.log(document)
    if(document){
    return of(document).pipe(
        map(this.documentMapper.mapFrom));
    }

    return undefined;
    
  }
}