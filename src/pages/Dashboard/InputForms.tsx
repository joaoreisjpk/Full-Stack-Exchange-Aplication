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
    currentCurrency: string | undefined;
  };
}

interface InputsDataProps {
  baseMoney: number | '';
}

export default function InputForms({ currency }: ICurrencyProps) {
  const navigate = useNavigate();
  const { socket } = useTrades();

  const { baseCurrency, currentCurrency, exchangeCurrency } = currency;

  function submitHandler(inputsData: InputsDataProps, resetForm: () => void) {
    const { baseMoney } = inputsData;
    socket.emit('tradesUpdate');
  
    fetch('http://localhost:3333/trades', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        baseMoney,
        currencyExchange: currentCurrency,
        exchangeAmount: Number(baseMoney) * Number(currentCurrency),
      }),
    });
    resetForm();
  }

  return (
    <Formik
      initialValues={{
        baseMoney: '',
      }}
      validate={({ baseMoney }: InputsDataProps) =>
        validateInputs({ baseMoney })
      }
      onSubmit={async (inputsData: InputsDataProps, { resetForm }) =>
        await submitHandler(inputsData, resetForm)
      }
    >
      <Form>
        <Grid
          container
          marginTop='2.5rem'
          gap={4}
          justifyItems='center'
          direction='column'
          justifyContent='center'
          alignItems='center'
        >
          <Stack spacing={2}>
            <Typography variant='h6' component='label' htmlFor='baseMoney'>
              Exchange {baseCurrency} to {exchangeCurrency}
            </Typography>
            <MUInput
              type='input'
              name='baseMoney'
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
