import { Component, OnInit, OnChanges } from '@angular/core';
import { NewsSerService } from '../dashbord/news-ser.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  responseData : any = [];
  selectedResponseData : any = [];

  constructor(private NewsSerService : NewsSerService,private activatedRoute: ActivatedRoute) {
   
  }
  
   ngOnInit() {
  this.NewsSerService.getNews().subscribe(res =>{
      this.responseData = res.articles;
      console.log('responseData ',this.responseData);
      console.log(' inside news component id',  this.activatedRoute.snapshot)
    const id = this.activatedRoute.snapshot.params.id; 
    const data = this.activatedRoute.snapshot.queryParams.someData;

    this.activatedRoute.data.subscribe((value) => {
      console.log('subject', value)
    });
    console.log("data",data);
     this.awaitExpression(id,data);
    })

    
  }

  // ngOnChanges() {
  //   if(this.responseData) {
  //     const id = this.activatedRoute.snapshot.params.id; 
  //   const data = this.activatedRoute.snapshot.queryParams.someData;
  //   console.log("data",data);
  //    this.awaitExpression(id,data);
  //   }
  // }
   awaitExpression(id,data){
     console.log('id', id, 'data', data)
     console.log( 'this.responseData', this.responseData);
    //  data = JSON.parse(data)
  //   this.responseData.forEach(element => {
  //      console.log('element', element)
  //   // if (element.source.id === id && element.description === data) {
  //   //   console.log('true ',element.source.id,element.description);
  //   //   console.log('selected object ',element);
  //   //   this.selectedResponseData = element;
  //   //   console.log('this.selectedResponseData',this.selectedResponseData);
  //   // }
    
  // });
  for (let index = 0; index < this.responseData.length; index++) {
    if (this.responseData[index].source.id === id && this.responseData[index].description === data) {

    this.selectedResponseData.push (this.responseData[index]);
    // console.log( ' inside loop this.responseData', this.selectedResponseDatadummy.title );
    // return

    //  console.log('element', element)
  } 
}
}
}
