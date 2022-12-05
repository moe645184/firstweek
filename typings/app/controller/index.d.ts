// This file is created by egg-ts-helper@1.33.0
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportHome = require('../../../app/controller/home');
import ExportMessages = require('../../../app/controller/messages');

declare module 'egg' {
  interface IController {
    home: ExportHome;
    messages: ExportMessages;
  }
}
