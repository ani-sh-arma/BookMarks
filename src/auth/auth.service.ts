import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  signup() {
    return { msg: 'Sign Up' };
  }
  login() {
    return { msg: 'Log In' };
  }
}
