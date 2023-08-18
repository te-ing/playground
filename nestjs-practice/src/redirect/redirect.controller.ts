import { Controller, Get, Query, Redirect } from '@nestjs/common';

@Controller('redirect')
export class RedirectController {
  @Redirect('https://www.typescriptlang.org/docs/handbook/release-notes', 302)
  @Get()
  redirectDocs(@Query('version') version: string) {
    if (version && version === '5') {
      return {
        url: 'https://www.typescriptlang.org/docs/handbook/release-notes/typescript-5-1.html',
      };
    }
  }
}
