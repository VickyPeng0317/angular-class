import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user-info-card',
  templateUrl: './user-info-card.component.html',
  styleUrls: ['./user-info-card.component.scss']
})
export class UserInfoCardComponent implements OnInit, OnChanges, OnDestroy, AfterViewInit {
  @Input()
  userInfo = {
    userId: 0,
    userName: `User 0`,
    userAccount: `user0`,
    userGender: 'M',
    createTime: new Date()
  }
  @Output()
  onDeleteUserEvent = new EventEmitter<number>();

  deleteUser() {
    const isDelete = confirm(`確定要刪除用戶 ${this.userInfo.userName} 嗎？`);
    if (!isDelete) {
      return;
    }
    this.onDeleteUserEvent.emit(this.userInfo.userId);
  }

  ngOnInit(): void {
    console.log(`ngOnInit`);
  }

  ngOnChanges(): void {
    console.log(`ngOnChanges`);
  }

  ngOnDestroy(): void {
    console.log(`ngOnDestroy`);
  }

  ngAfterViewInit(): void {
    console.log(`ngAfterViewInit`);
  }


}
