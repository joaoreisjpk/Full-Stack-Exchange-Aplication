import { v4 as uuidv4 } from 'uuid';
import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';

@Entity('trades')
class Trade {
  @PrimaryColumn()
  id?: string;

  @Column()
  baseCurrency?: string;
 
  @Column()
  exchangeCurrency?: string;
 
  @Column()
  moneyAmount?: number;

  @Column() 
  currentCurrencyValue?: number;
  
  @Column()
  exchangeAmount?: number;

  @CreateDateColumn()
  date?: Date;

  constructor() {
    if(!this.id) {
      this.id = uuidv4();
    }
  }
}

export { Trade }
