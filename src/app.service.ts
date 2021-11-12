import { Injectable } from '@nestjs/common';
import { join } from "path";

@Injectable()
export class AppService {
  emservice;

  constructor() {
    console.log('AppService.constructor');
    const emserviceofflineModule = require(join(__dirname, '..', 'emservice', 'em_service_offline'));
    emserviceofflineModule().then((emservice) => {
      this.setEmServiceLib(emservice);
    });
  }

  getHello(): string {
    return 'Hello World!';
  }

  setEmServiceLib(emservice){
    this.emservice = emservice;
  }

  getEmServiceLib(){
    return this.emservice;
  }
}
