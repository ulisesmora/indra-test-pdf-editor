import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable, Injector } from '@angular/core';
import { DocumentRepository } from 'src/domain/repositories/pdf.repository';
import { DocumentImplementationRepositoryMapper } from './mapper/documen-mapper';
import { pdfModel } from '../../../domain/models/pdf-model';
import { pdfEntity } from './entities/document-entity';
import { HttpClient } from '@angular/common/http';
@Injectable({
    providedIn: 'root',
})
export class DocumentImplementationRepository extends DocumentRepository  {
    documentMapper = new DocumentImplementationRepositoryMapper();
    constructor(
        private http: HttpClient,
        private injector: Injector) {
        super();
    }
    
    getDocument(): Observable<pdfModel>{
        return this.http.get<pdfEntity>('https://example.com/user').pipe(
            map(this.documentMapper.mapFrom));
    }


}