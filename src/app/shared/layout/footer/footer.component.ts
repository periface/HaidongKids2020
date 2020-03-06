import { Component, OnInit } from '@angular/core';
declare var startFooter;
@Component({
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  selector: 'app-footer'
})
export class FooterComponent implements OnInit {
  year: number;
  /**
   *
   */
  constructor() {
    this.year = new Date().getFullYear();
  }
  ngOnInit(): void {
    // if (!startFooter) {
    //   startFooter = () => { }
    // }

    // setTimeout(() => {
    //   startFooter();
    // }, 1000);
  }

}
