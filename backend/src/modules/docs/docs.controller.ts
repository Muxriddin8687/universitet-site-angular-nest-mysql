import { Body, Controller, Get, Post } from '@nestjs/common';
import { DocsService } from './docs.service';

@Controller('docs')
export class DocsController {
  constructor(private readonly docsService: DocsService) {}
  
  @Post('nizom')
  study(@Body() newData: any) {
    return this.docsService.nizom(newData);
  }

  @Post('meyor')
  social(@Body() newData: any) {
    return this.docsService.meyor(newData);
  }

  @Post('grant')
  scientific(@Body() newData: any) {
    return this.docsService.grant(newData);
  }

  @Get()
  findAll() {
    return this.docsService.findAll();
  }
}
