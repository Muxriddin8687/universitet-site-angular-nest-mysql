import { Component, inject } from '@angular/core';
import { GetDataService } from '../../services/get-data.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent {
  getDataService = inject(GetDataService);

  news$: any = this.getDataService.news();
  searchText: string = '';

  onSearch(text: string) {
    if (text.length > 3)
      this.searchText = text;
    else
      this.searchText = '';
  }
}
