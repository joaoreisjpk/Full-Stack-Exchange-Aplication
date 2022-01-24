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
import { Form, Formik } from 'formik';
import { useTranslation } from 'next-i18next'


interface GraphicDataProps {
  baseCurrency: string;
  exchangeCurrency: string;
}

interface ISelectForms {
  submitHandler: (inputsData: GraphicDataProps) => void;
}

export default function SelectForms({submitHandler}: ISelectForms) {
  const { t } = useTranslation('common');

  return (
    <Formik
      initialValues={{
        baseCurrency: 'GBP',
        exchangeCurrency: 'USD',
      }}
      validate={({ baseCurrency, exchangeCurrency }: GraphicDataProps) => {
        if (baseCurrency === exchangeCurrency) {
          return { baseCurrency: 'error', exchangeCurrency: 'error' };
        }
        return {};
      }}
      onSubmit={async (inputsData: GraphicDataProps) =>
        submitHandler(inputsData)
      }
    >
      <Form>
        <Grid
          container
          marginTop='1.8rem'
          gap={4}
          justifyItems='center'
          direction='column'
          justifyContent='center'
          alignItems='center'
        >
          <Stack spacing={2}>
            <FormControl fullWidth>
              <InputLabel id='baseCurrency'>{t('baseCurrency')}</InputLabel>
              <MUISelect name='baseCurrency' label='exchangeCurrency'>
                <MenuItem value='GBP'>{t('unitedKingdom')}</MenuItem>
                <MenuItem value='USD'>{t('unitedStates')}</MenuItem>
                <MenuItem value='BRL'>{t('brazil')}</MenuItem>
           </MUISelect>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel id='exchangeCurrency'>{t('exchangeCurrency')}</InputLabel>
              <MUISelect name='exchangeCurrency' label='exchangeCurrency'>
                <MenuItem value='USD'>{t('unitedStates')}</MenuItem>
                <MenuItem value='GBP'>{t('unitedKingdom')}</MenuItem>
                <MenuItem value='BRL'>{t('brazil')}</MenuItem>
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
              {t('updateButton')}
            </Button>
          </Stack>
        </Grid>
      </Form>
    </Formik>
  );
}
