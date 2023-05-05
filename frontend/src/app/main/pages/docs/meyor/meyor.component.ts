import { Component, inject } from '@angular/core';
import { GetDataService } from 'src/app/main/services/get-data.service';

@Component({
  selector: 'app-meyor',
  templateUrl: './meyor.component.html',
  styleUrls: ['./meyor.component.scss']
})
export class MeyorComponent {

  getDataService = inject(GetDataService);

  docs$: any = this.getDataService.docs();
}
