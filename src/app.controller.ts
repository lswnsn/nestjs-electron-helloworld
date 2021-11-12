import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    const initResult = this.appService.getEmServiceLib().handleRequest('/path/to/SnapshotFile', 'params');
    console.log(`init result: code : ${initResult.code} , data: ${initResult.data}`);
    if (initResult.code != 200) {
      console.error('interface test for handleRequest failed, check!');
    } else {
      console.log('interface test for handleRequest pass!');
    }

    return this.appService.getHello();
  }

  @Get('api/sec/v1/sessions')
  getSessionList(): string {
    const initResult = this.appService.getEmServiceLib().handleRequest('/path/to/SnapshotFile', 'params');
    console.log(`init result: code : ${initResult.code} , data: ${initResult.data}`);
    if (initResult.code != 200) {
      console.error('interface test for handleRequest failed, check!');
    } else {
      console.log('interface test for handleRequest pass!');
      return JSON.parse(initResult.data);
    }
  }

  @Get('api/sec/v1/token-info')
  getTokenInfo(): string {
    return JSON.parse('{"Expires":"Mon Oct 28 06:21:22 UTC 2019","FailedLoginAttempts":"There were 3 failed login attempts since the last successful login","LastFailedLogin":"Mon Oct 28 05:21:22 UTC 2019 from 10.110.70.37 on APIGW","LastLogin":"Tue Nov 5 04:03:59 2019 from 10.110.70.37 on APIGW","Type":"Bearer","PasswordExpirationDate":"2020-01-01","User":"user","ReadOnlyMode":true,"EnforceLogout":false,"EnforceLogoutDelay":60,"Role":"secUserAccessMode","EnforceLogoutReason":"2.Logout For Higher Priority User","_id":"reia7azklo:1636699146926"}');
  }

  @Get('api/asm/v1/system/info')
  getSystemInfo(): string {
    return JSON.parse('{"securityNotice":"You are about to access a pri￥$d!@#$%^&*()_|+~`阿拉伯123456vate system. This system is for the use of authorized users only. All connections are logged to the extent and by means acceptable by the local legislation.\\n\\nAny unauthorized access or access attempts may be punished to the fullest extent possible under the applicable local legislation.","_id":"5b4kjuevgo:1636699143907"}');
  }
}
