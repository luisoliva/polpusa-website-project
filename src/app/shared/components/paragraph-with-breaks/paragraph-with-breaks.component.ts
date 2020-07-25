import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-paragraph-with-breaks',
  templateUrl: './paragraph-with-breaks.component.html',
  styleUrls: ['./paragraph-with-breaks.component.css']
})
export class ParagraphWithBreaksComponent implements OnInit, AfterViewInit {
  @Input() text:string;
  @Input() textColor:string = '#888888';
  @Input() marginTop:string = '0px';
  @Input() maxWidth:string = '100%';
  @Input() fontFamily:string = "Lato-Regular";
  @ViewChild('textArea') textAreaElement:ElementRef;
  height:string;

  constructor() { }

  ngOnInit(): void {
    //this.text  = this.text.replace(/(?:\r\n|\r|\n)/g, '<br />');
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.height = '30px';
    setTimeout(()=>{
      this.height = String(this.textAreaElement.nativeElement.scrollHeight) + 'px';
    },250)
  }

  ngAfterViewInit(): void {
    setTimeout(()=>{
      this.height = String(this.textAreaElement.nativeElement.scrollHeight) + 'px';
    })
  }
}
