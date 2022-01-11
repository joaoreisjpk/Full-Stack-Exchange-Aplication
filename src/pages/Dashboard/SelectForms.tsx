import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Stack,
} from '@mui/material';
import MUISelect from '../../components/MUISelect';
import SendIcon from '@mui/icons-material/Send';
import { Form } from 'formik';

export default function SelectForms() {
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
          <FormControl fullWidth>
            <InputLabel>Base Currency</InputLabel>
            <MUISelect name='baseCurrency'>
              <MenuItem value='GBP'>United Kingdom (GBP)</MenuItem>
              <MenuItem value='USD'>United States (USD)</MenuItem>
            </MUISelect>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel>Exchange Currency</InputLabel>
            <MUISelect name='exchangeCurrency'>
              <MenuItem value='USD'>United States (USD)</MenuItem>
              <MenuItem value='GBP'>United Kingdom (GBP)</MenuItem>
              <MenuItem value='BRL'>Brasil (BRL)</MenuItem>
            </MUISelect>
          </FormControl>
          <Button
            endIcon={<SendIcon />}
            type='submit'
            size='large'
            variant='contained'
            sx={{
              width: 265,
            }}
          >
            Update
          </Button>
        </Stack>
      </Grid>
    </Form>
  );
}
