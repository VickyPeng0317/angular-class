import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:3000'; // 根據您的後端服務調整

  constructor(private http: HttpClient) {}

  /**
   * 新增使用者
   */
  createUser(createForm: ICreateUserForm): Observable<IApiResult<IUser>> {
    const url = this.baseUrl + '/users';
    return this.http.post<IApiResult<IUser>>(url, createForm);
  }

  /**
   * 取得使用者列表
   */
  getUsers(searchValue: string | null): Observable<IApiResult<IUser[]>> {
    const url = this.baseUrl + `/users?searchValue=${searchValue}`;
    return this.http.get<IApiResult<IUser[]>>(url);
  }

  /**
   * 取得使用者資訊
   */
  getUser(userId: string): Observable<IApiResult<IUser>> {
    const url = this.baseUrl + `/users/${userId}`;
    return this.http.get<IApiResult<IUser>>(url);
  }

  /**
   * 更新使用者資訊
   */
  updateUser(userId: string, updateForm: IUpdateUserForm): Observable<IApiResult<null>> {
    const url = this.baseUrl + `/users/${userId}`;
    return this.http.put<IApiResult<null>>(url, updateForm);
  }

  /**
   * 刪除使用者
   */
  deleteUser(userId: number): Observable<IApiResult<null>> {
    const url = this.baseUrl + `/users/${userId}`;
    return this.http.delete<IApiResult<null>>(url);
  }
}

export interface IUser {
  userId: number;
  userName: string;
  userAccount: string;
  userGender: string;
  createTime: Date;
}

export interface ICreateUserForm {
  userName: string;
  userAccount: string;
  userGender: string;
}

export interface IUpdateUserForm {
  userName: string;
  userAccount: string;
  userGender: string;
}


export interface IApiResult<T> {
  isSuccess: boolean;
  msg: string;
  data: T;
}


