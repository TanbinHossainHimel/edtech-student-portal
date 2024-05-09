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

  public getData(key: string): string {
    const encryptedKey = this.encryptDecryptService.encrypt(key);
    const encryptedData = localStorage.getItem(encryptedKey);
    if (!encryptedData) {
      return '';
    }
    return this.encryptDecryptService.decrypt(encryptedData);
  }

  public removeData(key: string) {
    const encryptedKey = this.encryptDecryptService.encrypt(key);
    localStorage.removeItem(encryptedKey);
  }

  public removeAllData() {
    localStorage.clear();
  }
}
