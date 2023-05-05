import { Component, inject } from '@angular/core';
import { GetDataService } from 'src/app/main/services/get-data.service';

@Component({
  selector: 'app-nizom',
  templateUrl: './nizom.component.html',
  styleUrls: ['./nizom.component.scss']
})
export class NizomComponent {

  getDataService = inject(GetDataService);

  docs$: any = this.getDataService.docs();
}
