import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUsers(searchValue: string | null): IUser[] {
    const allUsers = [
      ...Array.from({ length: 8 }).map((_, index) => ({
        userId: index,
        userName: `User ${index}`,
        userAccount: `user${index}`,
        userGender: index % 2 === 0 ? 'M' : 'W',
        createTime: new Date()
      }))
    ];
    const res = allUsers.filter(user => !searchValue ? true : user.userName.includes(searchValue));
    return res;
  }
}

export interface IUser {
  userId: number;
  userName: string;
  userAccount: string;
  userGender: string;
  createTime: Date;
}
