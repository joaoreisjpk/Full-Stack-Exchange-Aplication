import { Button, Grid, Stack, Typography } from '@mui/material';
import { Form } from 'formik';
import MUInput from '../../components/MUInput';
import SendIcon from '@mui/icons-material/Send';
import { useNavigate } from 'react-router-dom';

interface ICurrencyProps {
  currency: {
    baseCurrency: string;
    exchangeCurrency: string;
  };
}

export default function InputForms({ currency }: ICurrencyProps) {
  const navigate = useNavigate();
  return (
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
            Exchange {currency.baseCurrency} to {currency.exchangeCurrency}
          </Typography>
          <MUInput
            type='input'
            name='baseMoney'
            label={`${currency.exchangeCurrency} $`}
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
  );
}
