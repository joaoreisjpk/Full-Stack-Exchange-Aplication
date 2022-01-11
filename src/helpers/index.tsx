interface validateInputProps {
  baseMoney: number | '';
}

export const validateInputs = ({
  baseMoney = 0,
}: validateInputProps) => {
  if (baseMoney === '' && baseMoney === '') {
    return {
      baseMoney: 'Please fill one of inputs',
    };
  }  else if (baseMoney < 0) {
    return {
      baseMoney: 'Please, put a number bigger then 0',
    };
  }
  return {};
};
