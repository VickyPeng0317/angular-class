import { Component } from '@angular/core';

@Component({
  selector: 'app-user-info-card',
  templateUrl: './user-info-card.component.html',
  styleUrls: ['./user-info-card.component.scss']
})
export class UserInfoCardComponent {
  user = {
    userId: 0,
    userName: `User 0`,
    userAccount: `user0`,
    userGender: 'M',
    createTime: new Date()
  }
}
