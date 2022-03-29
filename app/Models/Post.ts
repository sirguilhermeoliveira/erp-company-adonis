import { DateTime } from 'luxon'
import User from './User'
import { v4 as uuidV4 } from 'uuid'
import { BaseModel, column, BelongsTo, belongsTo, beforeCreate } from '@ioc:Adonis/Lucid/Orm'

export default class Post extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public secure_id: string

  @beforeCreate()
  public static async CreateUUID(model: User): Promise<void> {
    model.secure_id = uuidV4()
  }

  @column()
  public user_id: number

  @column()
  public content: string

  @column()
  public image: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => User, {
    localKey: 'id',
    foreignKey: 'user_id',
  })
  public user: BelongsTo<typeof User>
}
