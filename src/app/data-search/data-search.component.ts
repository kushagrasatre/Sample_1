import { Component, OnInit } from '@angular/core';
import {SearchJsonService} from "../search-json.service"

@Component({
  selector: 'app-data-search',
  templateUrl: './data-search.component.html',
  styleUrls: ['./data-search.component.scss']
})
export class DataSearchComponent implements OnInit {
  name = "Angular";
  characters = [
    "Finn the human",
    "Jake the dog",
    "Princess bubblegum",
    "Lumpy Space Princess",
    "Beemo1",
    "Beemo2"
  ];
searchData:any;
lead=[];
followers=[];
  constructor(private service:SearchJsonService) {
    this.service.getJson().subscribe(
      (data)=>{
      this.searchData=data;
      //const mapped = Object.keys(this.searchData[0].orders).map(key => ({type: key, value: this.searchData[0].orders[key]});
      //console.log(this.searchData[0].orders);
      
      this.searchData.forEach(order => {
        console.log(this.lead);
        this.lead.push(order.orders.lead)
        order.orders.followers.forEach(element => {
          this.followers.push(element);
        });
        console.log(this.followers)

      });
      }
    );
   }

  ngOnInit() {
    
    // console.log(this.searchData);
  }

}
