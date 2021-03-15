import {FormField} from 'components/common/Form/types';
import {injectable} from 'inversify';
import * as yup from 'yup'

@injectable()
export class SignInPresenter {
  static Type = '@presenter/auth/signIn';

  getFormFields(): FormField[] {
    return [
      {
        label: 'Email',
        name: 'email',
        placeholder: 'Input user email'
      },
      {
        label: 'Email',
        name: 'password',
        placeholder: 'Input user password',
        type: 'password'
      }
    ]
  }

  getInitialValues(): Record<string, string> {
    return {
      email: '',
      password: '',
    }
  }

  getValidationScheme(): yup.ObjectSchema<any> {
    return yup.object().shape({
      email: yup.string().email().required(),
      password: yup.string().required(),
    });
  }
  
}