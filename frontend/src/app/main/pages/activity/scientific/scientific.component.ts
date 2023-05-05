import { Component, inject } from '@angular/core';
import { GetDataService } from 'src/app/main/services/get-data.service';

@Component({
  selector: 'app-scientific',
  templateUrl: './scientific.component.html',
  styleUrls: ['./scientific.component.scss']
})
export class ScientificComponent {
  getDataService = inject(GetDataService);

  activity$: any = this.getDataService.activity();
}
