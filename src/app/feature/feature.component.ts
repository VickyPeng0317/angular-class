import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

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
}
