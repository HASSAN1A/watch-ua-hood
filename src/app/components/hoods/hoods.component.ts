import { Component, OnInit } from '@angular/core';
import { HoodService } from 'src/app/hood.service';


@Component({
  selector: 'app-hoods',
  templateUrl: './hoods.component.html',
  styleUrls: ['./hoods.component.css'],
  providers: [HoodService]
})
export class HoodsComponent implements OnInit {

  public hoods;

  constructor(private hood: HoodService) { }

  ngOnInit(){
    this.getHoods();
  }

  getHoods() {
    this.hood.getAllhoods().subscribe(
      data => {
        this.hoods = data;
        console.log(data);
        
      },
      err => console.error(err),
      () => console.log('done loading hoods')
    );
  }

}
