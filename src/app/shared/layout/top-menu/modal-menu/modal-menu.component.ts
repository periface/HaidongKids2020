import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { Router } from "@angular/router";

@Component({
    templateUrl: './modal-menu.component.html',
    styleUrls: ['./modal-menu.component.scss']
})
export class ModalMenuComponent {
    routes: any;
    /**
     *
     */
    constructor(public dialogRef: MatDialogRef<ModalMenuComponent>, @Inject(MAT_DIALOG_DATA) public data: any
        , private router: Router) {
        console.log(data);
        this.routes = data;
        this.router.events.subscribe(() => {
            this.onCancel();
        })
    }
    onCancel(): void {
        this.dialogRef.close();
    }
}