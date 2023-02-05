import type { ValidateConfirmPasswordProps } from './ValidateConfirmPasswordProps';

export class ValidateConfirmPassword {
  static validate(props: ValidateConfirmPasswordProps) {
    if (props.confirmPassword !== props.password) {
      props.setConfirmPasswordError('Passwords do not match');
    }
  }
}
