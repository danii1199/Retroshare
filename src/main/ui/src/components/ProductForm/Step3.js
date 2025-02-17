import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { MainContainer } from "./components/MainContainer";
import { FileInput } from "./components/FileInput";
import { PrimaryButton } from "./components/PrimaryButton";
import Typography from "@material-ui/core/Typography";
import { Form } from "./components/Form";
import { useData } from "./DataContext"


export const Step3 = () => {
  const history = useHistory();
  const { data, setValues } = useData();
  const { control, handleSubmit } = useForm({
    defaultValues: {
      files: data.files,
    },
  });

  const onSubmit = (data) => {
    history.push("./result");
    setValues(data);
  };

  return (
    <MainContainer>
      <Typography component="h2" variant="h5">
        Añade una imagen del producto
      </Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FileInput name="files" control={control} />
        <PrimaryButton>Siguiente</PrimaryButton>
      </Form>
    </MainContainer>
  );
};

