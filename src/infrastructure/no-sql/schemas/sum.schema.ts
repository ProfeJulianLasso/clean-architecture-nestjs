import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { ulid } from 'ulid';

@Schema({
  versionKey: false,
})
export class Sum {
  @Prop({
    index: true,
    unique: true,
    default: () => ulid(),
  })
  id: string;

  @Prop()
  num1: number;

  @Prop()
  num2: number;

  @Prop()
  result: number;
}

export type SumDocument = HydratedDocument<Sum>;
export const SumSchema = SchemaFactory.createForClass(Sum);
