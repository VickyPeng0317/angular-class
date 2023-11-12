import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-user-dialog',
  templateUrl: './create-user-dialog.component.html',
  styleUrls: ['./create-user-dialog.component.scss']
})
export class CreateUserDialogComponent {
  userData = { userName: '', userAccount: '', userGender: 'M' };

  constructor(public dialogRef: MatDialogRef<CreateUserDialogComponent>) {}

  onCancel(): void {
    this.dialogRef.close();
  }
}
