import { TextField, TextFieldProps } from "@mui/material";

interface CustomInputProps {
  rounded: boolean;
  textColor: string;
}

type CustomTextFieldProps = TextFieldProps & CustomInputProps;

const CustomTextField = (props: CustomTextFieldProps) => {
  const { rounded, textColor, ...rest } = props;

  return (
    <TextField
      {...rest}
      InputProps={{
        sx: {
          borderRadius: rounded ? 10 : 0,
          paddingLeft: rounded ? "10px" : "auto",
          color: textColor,
        },
      }}
    />
  );
};

export default CustomTextField;
