import mongoose from 'mongoose';

export interface TradeSchemaProps {
  baseCurrency: string;
  exchangeCurrency: string;
  moneyAmount: number;
  currentCurrencyValue: number;
  exchangeAmount: number;
  date?: Date;
}

export const TradeSchema = new mongoose.Schema<TradeSchemaProps>({
  baseCurrency: {
    type: String,
    required: true,
  },
  exchangeCurrency: {
    type: String,
    required: true,
  },
  moneyAmount: {
    type: Number,
    required: true,
  },
  currentCurrencyValue: {
    type: Number,
    required: true,
  },
  exchangeAmount: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now
  }
});
