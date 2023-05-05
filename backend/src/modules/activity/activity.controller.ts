import { Body, Controller, Get, Post } from '@nestjs/common';
import { ActivityService } from './activity.service';

@Controller('activity')
export class ActivityController {
  constructor(private readonly activityService: ActivityService) { }

  @Post('study')
  study(@Body() newData: any) {
    return this.activityService.study(newData);
  }

  @Post('social')
  social(@Body() newData: any) {
    return this.activityService.social(newData);
  }

  @Post('scientific')
  scientific(@Body() newData: any) {
    return this.activityService.scientific(newData);
  }

  @Post('international')
  international(@Body() newData: any) {
    return this.activityService.international(newData);
  }

  @Get()
  findAll() {
    return this.activityService.findAll();
  }

}
