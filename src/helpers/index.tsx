interface validateInputProps {
  gbpToUsd: number | '';
  usdToGbp: number | '';
}

export const validateInputs = ({
  gbpToUsd = 0,
  usdToGbp = 0,
}: validateInputProps) => {
  if (usdToGbp < 0 && usdToGbp < 0) {
    return {
      usdToGbp: 'Please, put a number bigger then 0',
    };
    
  } else if (gbpToUsd < 0) {
    return {
      gbpToUsd: 'Please, put a number bigger then 0',
    };
  } else if (gbpToUsd > 0 && usdToGbp > 0) {
    return {
      gbpToUsd: 'Only one input can be filled',
      usdToGbp: 'Only one input can be filled',
    };
  }
  return {};
};
