import { Component, inject } from '@angular/core';
import { GetDataService } from 'src/app/main/services/get-data.service';

@Component({
  selector: 'app-grantlar',
  templateUrl: './grantlar.component.html',
  styleUrls: ['./grantlar.component.scss']
})
export class GrantlarComponent {
  getDataService = inject(GetDataService);

  docs$: any = this.getDataService.docs();
}
