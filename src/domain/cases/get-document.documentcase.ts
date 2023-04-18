import { Observable } from 'rxjs';
import { UseCase } from '../base/use-case';
import { pdfModel } from '../models/pdf-model';
import { DocumentRepository } from '../repositories/pdf.repository';
export class GetUserProfileUseCase implements UseCase<void, pdfModel> {
    constructor(private documentRepository: DocumentRepository) { }
    execute(): Observable<pdfModel> {
        return this.documentRepository.getDocument();
    }
}