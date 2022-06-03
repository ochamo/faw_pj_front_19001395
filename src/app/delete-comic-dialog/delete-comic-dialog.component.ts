import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-comic-dialog',
  templateUrl: './delete-comic-dialog.component.html',
  styleUrls: ['./delete-comic-dialog.component.scss']
})
export class DeleteComicDialogComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<DeleteComicDialogComponent>
  ) {
    this.dialogRef.disableClose = true;
  }

  ngOnInit(): void {
  }

  onOk(): void {
    this.dialogRef.close({action: 'Ok'})
  }

  onCancel(): void {
    this.dialogRef.close({action: 'cancel'})
  }

}
