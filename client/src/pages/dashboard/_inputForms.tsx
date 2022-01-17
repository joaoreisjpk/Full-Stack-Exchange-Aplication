import { Button, Grid, Stack, Typography } from '@mui/material';
import { Form, Formik } from 'formik';
import MUInput from '../../components/MUInput';
import SendIcon from '@mui/icons-material/Send';
import { validateInputs } from '../../helpers';
import { useTrades } from '../../hooks/useTrades';
import CircularProgress from '@mui/material/CircularProgress';
import { useRouter } from 'next/router';

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
  const { socket } = useTrades();
  const { push } = useRouter()

  const { baseCurrency, currentCurrencyValue, exchangeCurrency } = currency;

  async function submitHandler(
    inputsData: InputsDataProps,
    resetForm: () => void
  ): Promise<void> {
    const { moneyAmount } = inputsData;
    socket.emit('tradesUpdate');

    await fetch('http://localhost:3333/trades', {
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
      onSubmit={async (
        inputsData: InputsDataProps,
        { resetForm, setSubmitting }
      ): Promise<void> => {
        setSubmitting(true);
        await submitHandler(inputsData, resetForm);
        /* setSubmitting(false); */
      }}
    >
      {({ isSubmitting }) => {
        return (
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
                  endIcon={isSubmitting ? null : <SendIcon />}
                  disabled={isSubmitting}
                  type='submit'
                  size='large'
                  variant='contained'
                  sx={{
                    width: 265,
                  }}
                >
                  {isSubmitting && (
                    <CircularProgress
                      color='secondary'
                      size={24}
                      sx={{
                        color: 'green',
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        marginTop: '-12px',
                        marginLeft: '-12px',
                      }}
                    />
                  )}
                  Send
                </Button>
                <Button
                  endIcon={<SendIcon />}
                  onClick={(): Promise<boolean> =>  push('./history')}
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
        );
      }}
    </Formik>
  );
}
