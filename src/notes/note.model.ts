export class Note {
  body: string;
  createdTS: number;
  expireTS: number;
  secure: boolean;
  password: string;

  constructor(message: string) {
    this.body = message;
    const now = new Date().getTime();
    this.createdTS = now;
    this.expireTS = now + 600000;
    this.secure = false;
    this.password = '';
  }
}
