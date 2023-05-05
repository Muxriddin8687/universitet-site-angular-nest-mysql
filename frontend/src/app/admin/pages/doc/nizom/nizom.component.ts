import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Editor, Toolbar } from 'ngx-editor';
import { environment } from 'src/environments/environments';

@Component({
  selector: 'app-nizom',
  templateUrl: './nizom.component.html',
  styleUrls: ['./nizom.component.scss']
})
export class NizomComponent {


  http = inject(HttpClient);
  api = environment.api + 'docs';


  content: any;
  editor!: Editor;
  editorToolbar: Toolbar = [
    ['bold', 'italic'],
    ['underline', 'strike'],
    ['code', 'blockquote'],
    ['ordered_list', 'bullet_list'],
    [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
    ['link', 'image'],
    ['text_color', 'background_color'],
    ['align_left', 'align_center', 'align_right', 'align_justify'],
  ];


  load() {
    this.http.get(this.api).subscribe((res: any) => {
      this.editor.setContent(res[0]['nizom']);
    });
  }


  save(form: NgForm) {
    this.http.post(this.api + '/nizom', form.value).subscribe(res => {
      this.load();
    });
  }


  ngOnInit(): void {
    this.editor = new Editor({
      keyboardShortcuts: true,
    });
    this.load();
  }
}
