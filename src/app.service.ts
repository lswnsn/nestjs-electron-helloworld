import { Injectable } from '@nestjs/common';
import { join } from "path";

const { ipcMain } = require('electron');

@Injectable()
export class AppService {
  emservice;

  constructor() {
    console.log('AppService.constructor');
    const emserviceofflineModule = require(join(__dirname, '..', 'emservice', 'em_service_offline'));
    emserviceofflineModule().then((emservice) => {
      this.setEmServiceLib(emservice);
    });

    ipcMain?.handle('get-data', async (event, arg) => {
      await console.log('arg', arg);

      return 'ok';
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
