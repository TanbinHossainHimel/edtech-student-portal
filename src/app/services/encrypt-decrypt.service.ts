import {Injectable} from '@angular/core';
import CryptoJS from 'crypto-js';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class EncryptDecryptService {
  private encryptionKey = CryptoJS.enc.Utf8.parse(environment.encryptionKey);
  private encryptDecryptConfig = {
    iv: CryptoJS.enc.Utf8.parse(environment.initializeVector),
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7,
    keySize: 32
  }

  constructor() {
  }

  public encrypt(data: string): string {
    return data;
    return CryptoJS.AES.encrypt(data, this.encryptionKey, this.encryptDecryptConfig).toString();
  }

  public decrypt(encryptedData: string) {
    return encryptedData;
    return CryptoJS.AES.decrypt(encryptedData, this.encryptionKey, this.encryptDecryptConfig).toString(CryptoJS.enc.Utf8);
  }
}
