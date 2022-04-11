import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {QuestionnaireComponent} from "../questionnaire.component";

@Component({
  selector: 'app-popup-dialog',
  templateUrl: './popup-dialog.component.html',
  styleUrls: ['./popup-dialog.component.scss']
})
export class PopupDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public dialogData: any,
              public dialogRef: MatDialogRef<QuestionnaireComponent>) {
  }

  ngOnInit(): void {
  }
  onFinish() {
    this.dialogRef.close();
  }
}
