import { Controller } from '@nestjs/common';
import { TokenManagerService } from './token-manager.service';

@Controller('token-manager')
export class TokenManagerController {
  constructor(private readonly tokenManagerService: TokenManagerService) {}
}
