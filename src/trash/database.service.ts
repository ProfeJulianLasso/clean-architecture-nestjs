import { Injectable } from '@nestjs/common';

@Injectable()
export class DatabaseService {
  saveData(num1: number, num2: number, result: number): void {
    console.log(`Data saved: ${num1} + ${num2} = ${result}`);
  }
}
