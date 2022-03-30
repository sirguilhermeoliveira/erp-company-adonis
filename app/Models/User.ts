import { DateTime } from 'luxon'
import { BaseModel, column, beforeCreate, beforeSave, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Hash from '@ioc:Adonis/Core/Hash'
import { v4 as uuidV4 } from 'uuid'
import {Post} from 'App/Models'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public secure_id: string

  @beforeCreate()
  public static async CreateUUID(model: User): Promise<void> {
    model.secure_id = uuidV4()
  }

  @column()
  public name: string

  @column()
  public email: string

  @column({ serializeAs: null })
  public password: string

  @beforeSave()
  public static async hashPassword(user: User) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password)
    }
  }

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => Post, {
    localKey: 'id',
    foreignKey: 'user_id',
  })
  public post: HasMany<typeof Post>;
}
