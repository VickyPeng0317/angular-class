import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateUserDialogComponent } from '../create-user-dialog/create-user-dialog.component';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss']
})
export class FeatureComponent {
  users = [
    // 生成8 筆用戶數據示例
    ...Array.from({ length: 8 }).map((_, index) => ({
      userId: index,
      userName: `User ${index}`,
      userAccount: `user${index}`,
      userGender: index % 2 === 0 ? 'M' : 'W',
      createTime: new Date()
    }))
  ];
  constructor(public dialog: MatDialog) { }

  openCreateUserDialog(): void {
    const dialogRef = this.dialog.open(CreateUserDialogComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      // 這裡可以處理用戶數據 result
    });
  }
}
