import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { selectedElement } from '../../../domain/models/selectedElement.model';
import { documentInsert } from '../../../domain/models/documentInsert.model';
import { MockupDocumentsService } from 'src/data/mockups/documents-service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-document-viewer',
  templateUrl: './document-viewer.component.html',
  styleUrls: ['./document-viewer.component.scss'],
})
export class DocumentViewerComponent implements OnInit {
  public pdfSrc: string  = 'undefined';
  public rotation: number = 0;
  public images: documentInsert[] = [];
  public draws: documentInsert[] = [];
  public texts: documentInsert[] = [];
  public options: string = 'TEXT';
  public widthDocument: number = 0;
  public heightDocument: number = 0;
  public zoom: number = 1.0;
  public selectedElement: selectedElement = { id: -1, type: '' };
  public image: string =
    'https://www.sdpnoticias.com/resizer/dY70OJk-HGPfPj0QGOfZLkevLOc=/arc-photo-sdpnoticias/arc2-prod/public/RSRLW77EDJBUHEGMQUQWLY3HFI.jpeg';

  constructor(
    private elRef: ElementRef,
    private documentService:MockupDocumentsService,
    private route:ActivatedRoute) {}

  ngOnInit(): void {
    console.log(this.route.snapshot.params.id);
    this.documentService.getDocumentById(this.route.snapshot.params.id)?.subscribe(val => val ? this.pdfSrc = val.documentReference : this.pdfSrc = 'undefined')
    
  }

  SelectedOrRemoveElement(event: MouseEvent) {
    const e = (event.target as HTMLInputElement);
    if (this.options == 'REMOVE') {
      if (e.nodeName === 'TEXTAREA') {
        this.texts.splice(Number.parseInt(e.id), 1);
      }
      if (e.nodeName === 'IMG') {
        this.images.splice(Number.parseInt(e.id), 1);
      }
    }
    if (this.options == 'EDIT' && this.selectedElement.id == -1) {
      if (e.nodeName === 'TEXTAREA') {
        const ids = e.name;
        const id = ids.split('key_');
        if (Number.parseInt(id[1]) >= 0 && Number.parseInt(id[1]) <= this.images.length) {
          this.selectedElement = { id: Number.parseInt(id[1]), type: 'TEXT' };
          this.texts[this.selectedElement.id] = {
            ...this.texts[this.selectedElement.id],
            selected: true,
          };
        }
      }
      if (e.nodeName === 'IMG') {
        this.selectedElement = {
          id: Number.parseInt(e.id),
          type: 'IMAGE',
        };
        this.images[this.selectedElement.id] = {
          ...this.images[this.selectedElement.id],
          selected: true,
        };
      }
    }
  }

  GetClick(event: MouseEvent) {
    if (this.options != 'EDIT') {
      const image: documentInsert = {
        type: this.options,
        content: this.options === 'IMAGE' ? this.image : '',
        posx: event.pageX.toString(),
        posy: event.pageY.toString(),
        zoomAded: this.zoom,
        selected: false,
      };
      if (this.options === 'IMAGE') {
        this.images.push(image);
      }
      if (this.options === 'TEXT') {
        this.texts.push(image);
      }
      if (this.options === 'PENCIL') {
        this.draws.push(image);
      }
    }
  }

  DragElement(event: MouseEvent) {
    if (this.selectedElement.id >= 0) {
      if (this.selectedElement.type === 'TEXT') {
        this.texts[this.selectedElement.id] = {
          ...this.texts[this.selectedElement.id],
          selected: false,
          posx: event.pageX.toString(),
          posy: event.pageY.toString(),
        };
        this.selectedElement.id = -1;
      }
      if (this.selectedElement.type === 'IMAGE') {
        this.images[this.selectedElement.id] = {
          ...this.images[this.selectedElement.id],
          selected: false,
          posx: event.pageX.toString(),
          posy: event.pageY.toString(),
        };
        this.selectedElement.id = -1;
      }
    }
  }

  getActualOption(event: string) {
    this.options = event;
  }

  Zoom(event: number) {
    this.zoom = event;
    this.getDimensionOfContainers();
  }

  Rotation(rotation: number) {
    this.rotation = rotation;
    this.getDimensionOfContainers();
  }

  getColor(): string {
    return 'black';
  }

  ResizeAddedElements() {}

  getDimensionOfContainers() {
    setTimeout(() => {
      const div2 = this.elRef.nativeElement.querySelector('.pdfViewer');
      this.widthDocument = div2.clientWidth;
      this.heightDocument = div2.clientHeight;
    }, 1000);
  }

  getImage(image: string) {
    this.image = image;
  }

  printAddElements() {
    console.log(this.images, 'images');
    console.log(this.texts, 'notes');
    console.log([...this.images, ...this.texts], 'all');
  }
}
