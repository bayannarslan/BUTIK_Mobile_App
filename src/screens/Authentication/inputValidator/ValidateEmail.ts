import { ValidateEmailProps } from './ValidateEmailProps';

export class ValidateEmail {
  static validate(props: ValidateEmailProps) {
    if (props.email.length === 0) {
      props.setEmailError('Email cannot be empty');
    }
  }
}
