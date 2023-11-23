import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { UserService } from '../user.service';

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

  constructor(
    public dialogRef: MatDialogRef<CreateUserDialogComponent>,
    private userService: UserService
  ) {}

  onCancel(): void {
    this.dialogRef.close();
  }

  onSubmit() {
    const createForm = this.userFormGroup.value;
    this.userService.createUser(createForm).subscribe(result => {
      // 失敗
      if (!result.isSuccess) {
        alert(result.msg);
        return;
      }
      // 成功
      this.dialogRef.close();
    });
  }
}
