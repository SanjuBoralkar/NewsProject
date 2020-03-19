import { Component, OnInit } from '@angular/core';
import { NewsSerService } from '../dashbord/news-ser.service';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {
  responseData: any = [];
  paginationNews: any = [];


  constructor(private NewsSerService: NewsSerService, private router: Router) { }

  ngOnInit() {
    this.NewsSerService.getNews().subscribe(res => {
      this.responseData = res.articles;
      console.log('responseData ', this.responseData);
      // this.paginationNews = this.responseData.slice(0,5);
    })

  }

  showFullNews(id, dataUpdate) {
    console.log('inside getNews ', id, dataUpdate);
    this.router.navigate([`/pages/news/${id}`], {
      queryParams: { someData: dataUpdate }

    });
  }
  // pageChanged(event: PageChangedEvent): void {
  //   console.log('pageEvent ',event);
  //   const startItem = (event.page - 1) * event.itemsPerPage;
  //   console.log('startItem ',startItem);
  //   const endItem = event.page * event.itemsPerPage;
  //   console.log('endItem ',endItem);
  //   // this.paginatedBooks = this.bookList.slice(startItem, endItem);
  //   this.paginationNews = this.responseData.slice(startItem,endItem);
  // }

}
