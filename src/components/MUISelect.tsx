import { Select } from '@mui/material';
import { useField, FieldAttributes } from 'formik';

type MyRadioProps = { children: JSX.Element[], label: string } & FieldAttributes<{}>;

function MUISelect({ children, label, ...props }: MyRadioProps) {
  const [field, meta] = useField<{}>(props);
  const errorText = meta.error && meta.touched ? meta.error : '';
  return (
    <>
      <Select
        error={!!errorText}
        variant='outlined'
        color='secondary'
        margin='none'
        labelId={props.name}
        type={props.type}
        {...field}
        label={label}
        sx={{
          width: 265,
        }}
      >
        {children}
      </Select>
      {!!errorText && (
        <div
          style={{
            color: 'red',
            opacity: '.8',
            fontSize: '.9rem',
            margin: '.2rem 1rem 0',
          }}
        >
          Equal values prohibided
        </div>
      )}
    </>
  );
}

export default MUISelect;
