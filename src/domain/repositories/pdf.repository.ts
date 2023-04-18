import { Observable } from 'rxjs';
import { pdfModel } from '../models/pdf-model';
export abstract class DocumentRepository {
    abstract getDocument(): Observable<pdfModel>;
}