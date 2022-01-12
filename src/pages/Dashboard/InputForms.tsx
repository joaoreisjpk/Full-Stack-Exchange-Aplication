import { Button, Grid, Stack, Typography } from '@mui/material';
import { Form, Formik } from 'formik';
import MUInput from '../../components/MUInput';
import SendIcon from '@mui/icons-material/Send';
import { useNavigate } from 'react-router-dom';
import { validateInputs } from '../../helpers';
import { useTrades } from '../../hooks/useTrades';

interface ICurrencyProps {
  currency: {
    baseCurrency: string;
    exchangeCurrency: string;
    currentCurrencyValue: string | undefined;
  };
}

interface InputsDataProps {
  moneyAmount: number | '';
}

export default function InputForms({ currency }: ICurrencyProps) {
  const navigate = useNavigate();
  const { socket } = useTrades();

  const { baseCurrency, currentCurrencyValue, exchangeCurrency } = currency;

  function submitHandler(inputsData: InputsDataProps, resetForm: () => void) {
    const { moneyAmount } = inputsData;
    console.log({
      baseCurrency: baseCurrency,
      exchangeCurrency: exchangeCurrency,
      moneyAmount: Number(moneyAmount),
      currentCurrencyValue: Number(currentCurrencyValue),
      exchangeAmount: Number(moneyAmount) * Number(currentCurrencyValue),
    })
    socket.emit('tradesUpdate');

    fetch('http://localhost:3333/trades', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        baseCurrency,
        exchangeCurrency,
        moneyAmount,
        currentCurrencyValue: currentCurrencyValue,
        exchangeAmount: Number(moneyAmount) * Number(currentCurrencyValue),
      }),
    });
    resetForm();
  }

  return (
    <Formik
      initialValues={{
        moneyAmount: '',
      }}
      validate={({ moneyAmount }: InputsDataProps) =>
        validateInputs({ moneyAmount })
      }
      onSubmit={async (inputsData: InputsDataProps, { resetForm }) =>
        await submitHandler(inputsData, resetForm)
      }
    >
      <Form>
        <Grid
          container
          marginTop='.5rem'
          gap={4}
          justifyItems='center'
          direction='column'
          justifyContent='center'
          alignItems='center'
        >
          <Stack spacing={2}>
            <Typography
              fontSize='1rem'
              textAlign='center'
              component='label'
              htmlFor='moneyAmount'
            >
              {baseCurrency} to {exchangeCurrency}
            </Typography>
            <MUInput
              type='number'
              name='moneyAmount'
              label={`${exchangeCurrency} $`}
            />{' '}
            <Button
              endIcon={<SendIcon />}
              type='submit'
              size='large'
              variant='contained'
              sx={{
                width: 265,
              }}
            >
              Enviar
            </Button>
            <Button
              endIcon={<SendIcon />}
              onClick={() => navigate('/history')}
              size='large'
              variant='contained'
              sx={{
                width: 265,
              }}
            >
              History
            </Button>
          </Stack>
        </Grid>
      </Form>
    </Formik>
  );
}
