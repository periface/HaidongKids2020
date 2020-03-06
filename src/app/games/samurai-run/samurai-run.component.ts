import { OnInit, Component, AfterViewInit } from "@angular/core";
declare var startSamuraiGame;
@Component({
    templateUrl: './samurai-run.component.html'
})
export class SamuraiGameComponent implements AfterViewInit {

    canvas: HTMLElement;
    constructor() {
    }
    ngOnInit(): void {

    }
    ngAfterViewInit(): void {
        // setTimeout(() => {
        //     startSamuraiGame();
        // }, 1000);
    }
}