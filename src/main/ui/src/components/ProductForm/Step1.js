import { useHistory } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import { useForm } from "react-hook-form";
import { PrimaryButton } from "./components/PrimaryButton";
import { MainContainer } from "./components/MainContainer";
import { Form } from "./components/Form";
import { Input } from "./components/Input";
import { useData } from "./DataContext";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import NativeSelect from "@material-ui/core/NativeSelect";

export const Step1 = () => {
  const { setValues, data } = useData();
  const history = useHistory();
  const { register, handleSubmit, errors } = useForm({
    defaultValues: { name: data.name, price: data.price },
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    history.push("./step2");
    setValues(data);
  };

  return (
    <MainContainer>
      <Typography component="h2" variant="h5">
        🦄 Step 1
      </Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          ref={register}
          id="name"
          type="text"
          label="Product name*"
          name="name"
          error={!!errors.name}
          helperText={errors?.name?.message}
        />
        <Input
          ref={register}
          id="price"
          type="number"
          label="Price*"
          name="price"
          error={!!errors.price}
          helperText={errors?.price?.message}
        />

        <InputLabel htmlFor="productType">Product type</InputLabel>
        <NativeSelect
          variant="outlined"
          margin="normal"
          fullWidth
          inputRef={register}
          inputProps={{
            name: "productType",
            id: "productType",
            label: "productType",
          }}
        >
          <option value={"game"}>Game</option>
          <option value={"game console"}>Game Console</option>
          <option value={"vinyl"}>Vinyl</option>
          <option value={"record player"}>Record Player</option>
        </NativeSelect>
        <FormHelperText>Product type</FormHelperText>
        <PrimaryButton>Next</PrimaryButton>
      </Form>
    </MainContainer>
  );
};
