import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from 'src/environments/environments';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  http = inject(HttpClient);
  sanitizer = inject(DomSanitizer);
  api = environment.api + "contact";
  iframeUrl: string = '';

  address: String = '';
  phone1: String = '';
  phone2: String = '';
  email1: String = '';
  email2: String = '';
  map: string = '';



  load() {
    this.http.get(this.api).subscribe((res: any) => {
      this.address = res[0]["address"];
      this.phone1 = res[0]["phone1"];
      this.phone2 = res[0]["phone2"];
      this.email1 = res[0]["email1"];
      this.email2 = res[0]["email2"];
      this.map = res[0]["map"];
      this.iframeUrl = res[0]["map"];
    });
  }


  setIframeUrl() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      this.iframeUrl
    );
  }


  save(form: NgForm) {
    this.http.post(this.api, form.value).subscribe((res) => {
      this.load();
      form.reset();
    });
  }

  ngOnInit(): void {
    this.load();
  }
}
