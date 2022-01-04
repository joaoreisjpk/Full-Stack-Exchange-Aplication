interface validateInputProps {
  gbpToUsd: number | '';
  usdToGbp: number | '';
}

export const validateInputs = ({
  gbpToUsd = 0,
  usdToGbp = 0,
}: validateInputProps) => {
  if (paredesValidation) {
    return {
      paredeAltura: paredesErrorMessage,
      paredeComprimento: paredesErrorMessage,
    };
  } else if (paredesAreaValidation) {
    return {
      paredeAltura: ' ',
      paredeComprimento: paredesAreaErrorMessage,
      portasNumero: ' ',
      janelasNumero: paredesAreaErrorMessage,
    };
  } else if (alturaDaParedeValidation) {
    return {
      paredeAltura: alturaDaParedeErrorMessage,
      portasNumero: ' ',
    };
  }
  return {};
};
