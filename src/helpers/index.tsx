interface validateInputProps {
  moneyAmount: number | '';
}

export const validateInputs = ({
  moneyAmount = 0,
}: validateInputProps) => {
  if (moneyAmount === '' && moneyAmount === '') {
    return {
      moneyAmount: 'Please fill one of inputs',
    };
  }  else if (moneyAmount <= 0) {
    return {
      moneyAmount: 'Please, put a number bigger then 0',
    };
  }
  return {};
};
