import {Injectable} from '@angular/core';
import {EncryptDecryptService} from "./encrypt-decrypt.service";

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {


  constructor(private encryptDecryptService: EncryptDecryptService) {
  }

  public setData(key: string, data: string) {
    const encryptedKey = this.encryptDecryptService.encrypt(key);
    const encryptedData = this.encryptDecryptService.encrypt(data);
    localStorage.setItem(encryptedKey, encryptedData);
  }

  public getDataByKey(key: string): string {
    const encryptedKey = this.encryptDecryptService.decrypt(key);
    const encryptedData = localStorage.getItem(encryptedKey);
    if (!encryptedData) {
      return '';
    }
    return this.encryptDecryptService.decrypt(encryptedData).toString();
  }

  public removeDataByKey(key: string) {
    const encryptedKey = this.encryptDecryptService.decrypt(key);
    localStorage.removeItem(encryptedKey);
  }

  public removeAllData() {
    localStorage.clear();
  }
}
