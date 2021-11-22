import { Controller, Get, Query, Post, Req, Res } from '@nestjs/common';
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

  @Get('api/asm/v1/dus/diff')
  getDusDiff(): string {
    return JSON.parse('{"created":[],"removed":[],"revision":"25","updated":[]}');
  }

  @Get('api/asm/v1/cu-cells/diff')
  getCellsDiff(): string {
    return JSON.parse('{"created":[],"removed":[],"revision":"25","updated":[]}');
  }

  @Get('api/asm/v1/x2links/diff')
  getX2linksDiff(): string {
    return JSON.parse('{"created":[],"removed":[],"revision":"25","updated":[]}');
  }

  @Get('api/asm/v1/xnlinks/diff')
  getXnlinksDiff(): string {
    return JSON.parse('{"created":[],"removed":[],"revision":"25","updated":[]}');
  }

  @Get('api/asm/v1/nglinks/diff')
  getNglinksDiff(): string {
    return JSON.parse('{"created":[],"removed":[],"revision":"25","updated":[]}');
  }

  @Get('api/asm/v1/network-slicing/diff')
  getNetworkSlicingDiff(): string {
    return JSON.parse('{"created":[],"removed":[],"revision":"25","updated":[]}');
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
    return JSON.parse('{"amfs":[{"ipAddress":"","name":null,"ngLinkStatus":""}],"btsName":"","id":"","ipAddresses":{"f1Interface":{"cPlaneIpAddress":[],"uPlaneIpAddress":[]},"mPlaneIpAddress":{"v4":""},"ngInterface":{"cPlaneIpAddress":[],"uPlaneIpAddress":null},"vnfIpAddress":"","x2Interface":{"cPlaneIpAddress":[],"uPlaneIpAddress":[]},"xnInterface":{"cPlaneIpAddress":[],"uPlaneIpAddress":null}},"mcc":0,"mnc":0,"mncLength":0,"mrbtsId":"","name":"","numberOfAlarms":0,"operationalState":"","readyForCommissioning":false,"serverIpAddressPrimary":null,"softwareVersion":"","timeZone":"","type":""}');
  }

  @Get('api/asm/v1/georedundancy/vnf')
  getVnf(): string {
    return JSON.parse('{"activityMode":"","alarms":[],"peerVnf":{"ipAddress":"","peerVnf":"","status":""},"redundancyRole":""}');
  }

  @Get('api/asm/v1/vnfcs')
  getVnfcs(@Res() res): string {
    res.setHeader('vnfcType', 'vCu');
    // return JSON.parse('[]');
    return res.send([]);
  }

  @Get('api/fm/v2/fault-toggling-history')
  getFaultTogglingHistory(): string {
    return JSON.parse('{"activeFaults":[],"inactiveFaults":[],"numberOfActiveFaults":0,"numberOfInactiveFaults":0}');
  }

  @Get('api/asm/v1/account/users/system')
  getSystemUsersAccount(): string {
    return JSON.parse('{"passwordExpirationDate":"2022-02-09T23:59:59+00:00"}');
  }

  @Get('api/fm/v2/alarms/active')
  getActiveAlarms(@Query('pageNumber') pageNumber: string ): string {
    // console.log('pageNumber', pageNumber)
    //return JSON.parse('{"alarms":[{"additionalInfo":"supplAlarmInfo=BTS booted at 2021-11-12T14:09:34.943112209+08:00 due to oam recovery reset;","affectedCells":{"impactOnCells":[],"impactScope":"unknown"},"alarmId":7115,"alarmName":"BASE STATION INFORMATION","alarmingObject":"MRBTS-11","appearTime":"2021-11-12T14:12:31+08:00","cellIds":[],"clearedTime":"","degradedCells":{"impactOnCells":[],"impactScope":"notAvailable"},"eventTypeName":"Quality of service","faultId":"4592","faultName":"BTS Reset Cause","faultyCells":{"impactOnCells":[],"impactScope":"notAvailable"},"lastUpdatedTime":"2021-11-12T14:12:31+08:00","probableCauseName":"Indeterminate","severity":"minor","uuid":"231"}],"total":1}');
    return JSON.parse('{"alarms":[],"total":0}');
  }

  @Get('api/fm/v2/alarms/historical')
  getHistoryAlarms(@Req() req): string {
    //return JSON.parse('{"alarms":[{"additionalInfo":"supplAlarmInfo=BTS booted at 2021-11-12T14:09:34.943112209+08:00 due to oam recovery reset;","affectedCells":{"impactOnCells":[],"impactScope":"unknown"},"alarmId":7115,"alarmName":"BASE STATION INFORMATION","alarmingObject":"MRBTS-11","appearTime":"2021-11-12T14:12:31+08:00","cellIds":[],"clearedTime":"","degradedCells":{"impactOnCells":[],"impactScope":"notAvailable"},"eventTypeName":"Quality of service","faultId":"4592","faultName":"BTS Reset Cause","faultyCells":{"impactOnCells":[],"impactScope":"notAvailable"},"lastUpdatedTime":"2021-11-12T14:12:31+08:00","probableCauseName":"Indeterminate","severity":"minor","uuid":"231"}],"total":1}');
    return JSON.parse('{"alarms":[],"total":0}');
  }

  @Get('api/asm/v1/xnlinks/summary')
  getXnlinksSummary(): string {
    return JSON.parse('{"administrativeState":{"Locked":0,"Unknown":0,"Unlocked":0},"xnLinkStatus":{"available":0,"conflicting":0,"unavailable":0}}');
  }

  @Get('api/asm/v1/nglinks/summary')
  getNglinksSummary(): string {
    return JSON.parse('{"administrativeState":{"Locked":0,"Unlocked":1},"ngLinkStatus":{"Active":0,"Inactive":1}}');
  }

  @Get('api/asm/v1/network-slicing/summary')
  getNetworkSlicingSummary(): string {
    return JSON.parse('{"administrativeState":{"Locked":0,"Unlocked":1},"operationalState":{"disabled":1,"enabled":0}}');
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
    return JSON.parse('{"Expires":"Mon Oct 28 06:21:22 UTC 2019","AdditionalText":"Warning: your password will expire in 64 days.","FailedLoginAttempts":"There were 3 failed login attempts since the last successful login","LastFailedLogin":"Mon Oct 28 05:21:22 UTC 2019 from 10.110.70.37 on APIGW","LastLogin":"Tue Nov 5 04:03:59 2019 from 10.110.70.37 on APIGW","Type":"Bearer","PasswordExpirationDate":"2020-01-01","User":"user","ReadOnlyMode":false,"EnforceLogout":false,"EnforceLogoutDelay":60,"Role":"offLineUser","EnforceLogoutReason":"2.Logout For Higher Priority User","_id":"w1jxp33jxt:1637425713564"}');
  }

  // @Get('api/asm/v1/system/info')
  // getSystemInfo(): string {
  //   return JSON.parse('{"securityNotice":"You are about to access a pri￥$d!@#$%^&*()_|+~`阿拉伯123456vate system. This system is for the use of authorized users only. All connections are logged to the extent and by means acceptable by the local legislation.\\n\\nAny unauthorized access or access attempts may be punished to the fullest extent possible under the applicable local legislation.","_id":"5b4kjuevgo:1636699143907"}');
  // }
}
