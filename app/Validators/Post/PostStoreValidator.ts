import { schema, rules } from '@ioc:Adonis/Core/Validator';
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';

export class PostStoreValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    content: schema.string({}, [rules.required()]),
    user_secure_id: schema.string({}, [rules.required()]),
    image: schema.string.optional(),
  });
}
