import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({
  name: 'sum',
})
export class SumEntity {
  @PrimaryColumn({
    length: 36,
  })
  id: string = crypto.randomUUID();

  @Column()
  number1: number;

  @Column()
  number2: number;

  @Column()
  result: number;
}
