import { Controller, Get, Res, Headers } from '@nestjs/common';
import { NextResponse } from 'nest-next-module';

@Controller()
export class MainController {

    @Get()
    index(@Res() res: NextResponse, @Headers('cookie') cookie?: string) {
        return res.nextRender('/index');
    }
}
