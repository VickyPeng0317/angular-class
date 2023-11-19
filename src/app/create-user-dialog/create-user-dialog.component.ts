import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-user-dialog',
  templateUrl: './create-user-dialog.component.html',
  styleUrls: ['./create-user-dialog.component.scss']
})
export class CreateUserDialogComponent {
  userFormGroup: FormGroup = new FormGroup({
    userName: new FormControl('', Validators.required),
    userAccount: new FormControl('', Validators.required),
    userGender: new FormControl('W', Validators.required)
  });

  constructor(public dialogRef: MatDialogRef<CreateUserDialogComponent>) {}

  onCancel(): void {
    this.dialogRef.close();
  }

  onSubmit() {
    console.log(this.userFormGroup.value);
    // TODO: 呼叫 API 新增用戶
  }
}
