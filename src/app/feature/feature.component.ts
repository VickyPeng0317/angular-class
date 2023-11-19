import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateUserDialogComponent } from '../create-user-dialog/create-user-dialog.component';
import { FormControl } from '@angular/forms';
import { IUser, UserService } from '../user.service';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss']
})
export class FeatureComponent implements OnInit {
  searchForm = new FormControl('');
  users: IUser[] = [];
  constructor(
    public dialog: MatDialog,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.search();
  }

  openCreateUserDialog(): void {
    const dialogRef = this.dialog.open(CreateUserDialogComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      // 這裡可以處理用戶數據 result
    });
  }

  executeDeleteUser(userId: number) {
    this.users = this.users.filter(user => user.userId !== userId);
  }

  search() {
    this.users = this.userService.getUsers(this.searchForm.value);
  }
}
