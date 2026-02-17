import cryptoJs from 'crypto-js';

export default class CommonUtils {
  private secretKey: string;

  /**
   * initializing the secret key from environment variable
   */
  constructor() {
    if (process.env.SECRET_KEY) {
      this.secretKey = process.env.SECRET_KEY;
    } else {
      throw new Error('SECRET_KEY environment variable is not defined');
    }
  }

  /**
   * this method provides encrypted data from string
   * @param data 
   * @returns encrypted data
   */
  public encryptData(data: string) {
    const encryptedData = cryptoJs.AES.encrypt(data, this.secretKey).toString();
    return encryptedData;
    // console.log('Encrypted Data:', encryptedData);
  }

  /**
   * this method provides decrypted data from encrypted string
   * @param encryptedData 
   * @returns decrypted data
   */
  public decryptData(encryptedData: string) {
    const bytes = cryptoJs.AES.decrypt(encryptedData, this.secretKey);
    const decryptedData = bytes.toString(cryptoJs.enc.Utf8);
    return decryptedData;
    // console.log('Decrypted Data:', decryptedData);
  }
}