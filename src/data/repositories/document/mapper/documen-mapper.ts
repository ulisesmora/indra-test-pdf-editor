
import { Mapper } from 'src/base/utils/mapper';
import { pdfEntity } from '../entities/document-entity';
import { pdfModel } from '../../../../domain/models/pdf-model';
export class DocumentImplementationRepositoryMapper extends Mapper<pdfEntity, pdfModel> {
    mapFrom(param: pdfEntity): pdfModel {
        return {
            documentReference: param.documentReference,
            name: param.name,
            size: param.size,
            active: param.active,
            createdAt: param.created_at
        };
    }
    mapTo(param: pdfModel ): pdfEntity {
        return {
            documentReference: param.documentReference,
            size: param.size,
            name: param.name,
            active: param.active,
            created_at: param.createdAt
        }
    }
}