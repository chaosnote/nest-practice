import { Get, Controller } from '@nestjs/common';

// 預設根節點設置
@Controller()
export class AppController {
	@Get()
	root(): string {
    return 'Welcome !!';
  }
}