import { Controller, Get, Query, Post, Req } from '@nestjs/common';
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

  @Get('api/pm/v2/counters/M55131C00001/objects')
  getSpecialPmCounter(): string {
    return JSON.parse('["MRBTS-11/NRBTS-11"]');
  }

  @Get('api/pm/v2/counters/values')
  getSpecialPmCounterValue(@Query('counter') counter: string): string {
    // console.log('counter', counter);
    return JSON.parse('{"M55131C00001:MRBTS-11/NRBTS-11":[{"startTime":"2021-11-15T22:30:00+08:00","value":"0"}]}');
  }

  @Get('api/asm/v1/cu')
  getCu(): string {
    return JSON.parse('{"amfs":[{"ipAddress":"0.0.0.0","name":null,"ngLinkStatus":"Inactive"}],"btsName":"TL1113_CU","id":"11","ipAddresses":{"f1Interface":{"cPlaneIpAddress":[{"v4":"10.106.255.83"}],"uPlaneIpAddress":[{"v4":"10.106.255.99"}]},"mPlaneIpAddress":{"v4":"10.106.255.67"},"ngInterface":{"cPlaneIpAddress":[{"v4":"10.106.255.83"}],"uPlaneIpAddress":null},"vnfIpAddress":"0","x2Interface":{"cPlaneIpAddress":[{"v4":"10.106.255.117"}],"uPlaneIpAddress":[{"v4":"10.106.255.133"}]},"xnInterface":{"cPlaneIpAddress":[{"v4":"10.106.255.117"}],"uPlaneIpAddress":null}},"mcc":262,"mnc":3,"mncLength":2,"mrbtsId":"11","name":"TL1112_CU","numberOfAlarms":1,"operationalState":"enabled","readyForCommissioning":true,"serverIpAddressPrimary":null,"softwareVersion":"5G22R2_0.250.2245","timeZone":"GMT+0800","type":"NSA"}');
  }

  @Get('api/asm/v1/account/users/system')
  getSystemUsersAccount(): string {
    return JSON.parse('{"passwordExpirationDate":"2022-02-09T23:59:59+00:00"}');
  }

  @Get('api/fm/v2/alarms/active')
  getActiveAlarms(): string {
    return JSON.parse('{"alarms":[{"additionalInfo":"supplAlarmInfo=BTS booted at 2021-11-12T14:09:34.943112209+08:00 due to oam recovery reset;","affectedCells":{"impactOnCells":[],"impactScope":"unknown"},"alarmId":7115,"alarmName":"BASE STATION INFORMATION","alarmingObject":"MRBTS-11","appearTime":"2021-11-12T14:12:31+08:00","cellIds":[],"clearedTime":"","degradedCells":{"impactOnCells":[],"impactScope":"notAvailable"},"eventTypeName":"Quality of service","faultId":"4592","faultName":"BTS Reset Cause","faultyCells":{"impactOnCells":[],"impactScope":"notAvailable"},"lastUpdatedTime":"2021-11-12T14:12:31+08:00","probableCauseName":"Indeterminate","severity":"minor","uuid":"231"}],"total":1}');
  }

  @Get('api/fm/v2/alarms/active/summary')
  getAlarmsSummary(): string {
    return JSON.parse('{"severity":{"critical":0,"major":0,"minor":0,"warning":0,"indeterminate":0}}');
  }

  @Get('api/asm/v1/dus/summary')
  getDusSummary(): string {
    return JSON.parse('{"administrativeState":{"locked":0,"unlocked":0},"f1LinkStatus":{"available":0,"unavailable":0}}');
  }

  @Get('api/asm/v1/cu-cells/summary')
  getCucellsSummary(): string {
    return JSON.parse('{"basicCellsSummary":{"administrativeState":{"locked":0,"unlocked":0,"shutting down":0},"operationalState":{"enabled":0,"disabled":0}}}');
  }

  @Get('api/asm/v1/x2links/summary')
  getX2linksSummary(): string {
    return JSON.parse('{"x2LinkLock":{"locked":0,"unlocked":0},"x2LinkStatus":{"available":0,"unavailable":0}}');
    // return JSON.parse('{}');
  }

  @Get('api/sec/v1/token-info')
  getTokenInfo(): string {
    return JSON.parse('{"Expires":"Mon Oct 28 06:21:22 UTC 2019","FailedLoginAttempts":"There were 3 failed login attempts since the last successful login","LastFailedLogin":"Mon Oct 28 05:21:22 UTC 2019 from 10.110.70.37 on APIGW","LastLogin":"Tue Nov 5 04:03:59 2019 from 10.110.70.37 on APIGW","Type":"Bearer","PasswordExpirationDate":"2020-01-01","User":"user","ReadOnlyMode":false,"EnforceLogout":false,"EnforceLogoutDelay":60,"Role":"offLineUser","EnforceLogoutReason":"2.Logout For Higher Priority User","_id":"reia7azklo:1636699146926"}');
  }

  @Get('api/asm/v1/system/info')
  getSystemInfo(): string {
    return JSON.parse('{"securityNotice":"You are about to access a pri￥$d!@#$%^&*()_|+~`阿拉伯123456vate system. This system is for the use of authorized users only. All connections are logged to the extent and by means acceptable by the local legislation.\\n\\nAny unauthorized access or access attempts may be punished to the fullest extent possible under the applicable local legislation.","_id":"5b4kjuevgo:1636699143907"}');
  }
}
