import { Trade } from "../routes/trades.routes"


describe("Testing the trade model", () => {
  const date = new Date()
  it("Testing if it works with the expected inputs", () => {
    const post = new Trade({
      baseCurrency: 'GBP',
      exchangeCurrency: 'USD',
      moneyAmount: 2000,
      currentCurrencyValue: 1.5,
      exchangeAmount: 3000,
      date,
    });

    expect(post.baseCurrency).toBe('GBP');
    expect(post.exchangeCurrency).toBe('USD');
    expect(post.moneyAmount).toBe(2000);
    expect(post.currentCurrencyValue).toBe(1.5);
    expect(post.exchangeAmount).toBe(3000);
    expect(post.date).toBe(date);
    expect(post._id).toBeTruthy();
  })

  it("Testing when passing the whong type inputs", () => {
    const post = new Trade({
      baseCurrency: 'GBP',
      exchangeCurrency: 2000,
      moneyAmount: 'USD',
      currentCurrencyValue: '1.5',
      exchangeAmount: 3000,
      date: 'teste',
    })

    expect(post.baseCurrency).toBe('GBP');
    expect(post.moneyAmount).toBeUndefined();
    expect(post.exchangeCurrency).not.toBe(2000);
    expect(post.exchangeCurrency).toBe('2000');
    expect(post.currentCurrencyValue).toBe(1.5);
    expect(post.date).not.toBe('teste');
    expect(post._id).toBeTruthy();
  })
})