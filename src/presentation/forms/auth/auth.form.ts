import * as yup from 'yup';
import { Inject, Injectable } from 'containers/core';
import { AuthService, AuthServiceType } from 'domain/auth/services';
import { BaseForm, ChangeForm } from '../base.form';

export interface AuthFields {
  login: string;
  password: string;
}

@Injectable()
export class AuthForm implements BaseForm<AuthFields> {
  constructor(@Inject(AuthServiceType) private readonly _authService: AuthService) {}

  getInitialValues(): AuthFields {
    return {
      login: '',
      password: '',
    };
  }

  getValidationSchema(): any {
    return yup.object().shape({
      login: yup.string().required().email().label('Login'),
      password: yup.string().required().label('Password'),
    });
  }

  onSubmit(): Promise<void> {
    return Promise.resolve();
  }

  onChange(): ChangeForm<AuthFields> {
    return null;
  }
}
