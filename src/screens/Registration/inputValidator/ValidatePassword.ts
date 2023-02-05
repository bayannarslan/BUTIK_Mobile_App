import type { ValidatePasswordProps } from './ValidatePasswordProps';

export class ValidatePassword {
  static validate(props: ValidatePasswordProps) {
    if (props.password.length < 9) {
      props.setPasswordError('Password must be atleast 9 characters');
    }
  }
}
