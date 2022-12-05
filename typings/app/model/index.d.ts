// This file is created by egg-ts-helper@1.33.0
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportMessage = require('../../../app/model/message');

declare module 'egg' {
  interface IModel {
    Message: ReturnType<typeof ExportMessage>;
  }
}
