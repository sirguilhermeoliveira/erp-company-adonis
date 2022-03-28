export class CustomMessages {
    public messages = {
      string: '{{ field }} field is invalid string',
      boolean: '{{ field }} field is invalid boolean',
      number: '{{ field }} field is invalid number',
      date: '{{ field }} field is invalid date',
      enum: 'the value must be one of {{ options.choices }}',
      enumSet: 'the value must be one of {{ options.choices }}',
      array: '{{ field }} field is invalid array',
      required: '{{ field }} field is required',
      email: '{{ field }} is should be a valid email',
      unique: '{{ field }} already exists',
      exists: '{{ field }} not found on database',
      maxLength: '{{ field }} field must be up to {{ options.maxLength }}',
      minLength: '{{ field }} must be at least {{ options.minLength }}',
      requiredWhen: '{{ field }} field is required',
      distinct:
        '{{ field }} must have distinct values for roles and member_secure_id',
      '*': (field, rule) => {
        return `${rule}: validation error on ${field}`;
      },
    };
  }
  