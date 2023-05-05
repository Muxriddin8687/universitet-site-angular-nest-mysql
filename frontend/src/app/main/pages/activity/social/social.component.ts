import { Component, inject } from '@angular/core';
import { GetDataService } from 'src/app/main/services/get-data.service';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss']
})
export class SocialComponent {
  getDataService = inject(GetDataService);

  activity$: any = this.getDataService.activity();
}
