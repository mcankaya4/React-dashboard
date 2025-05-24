import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { createCabin } from "../../services/apiCabins.js";
import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import FormRow from "../../ui/FormRow.jsx";
import toast from "react-hot-toast";

function CreateCabinForm() {
  // hook-form ile inputları kayıt ediyoruz ve event'i karşılıyoruz.
  const { register, handleSubmit, reset, getValues, formState } = useForm();

  // Tüm hataları nesne olarak yakalıyoruz.
  const { errors } = formState;

  // react query ile kayıt ediyoruz.
  const queryClient = useQueryClient();
  const { isPending, mutate } = useMutation({
    mutationFn: createCabin,
    onSuccess: () => {
      toast.success("Cabin created successfully!");
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
      // kayıt başarılıysa formu sıfırla
      reset();
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  function onSubmit(data) {
    console.log(data);
    // input verilerine data ile erişim sağlıyoruz.
    // mutate içerisine image'ı dahil ediyoruz. image[0] sabit olarak kalacak.
    mutate({ ...data, image: data.image[0] });
  }

  function onError(errors) {
    // Burada genel olarak hatalar yakalanıp işlem yapılabilir.
    // Toast message gibi.
    console.log(errors);
    // toast.error("Formda gerekli alanlar doldurulmalıdır.");
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <FormRow>
        <label htmlFor="name" className="font-medium">
          Cabin name
        </label>
        <Input
          type="text"
          id="name"
          {...register("name", { required: "This field is required" })}
        />
        {errors?.name?.message && (
          <span className="text-sm text-red-700">{errors.name.message}</span>
        )}
      </FormRow>

      <FormRow>
        <label htmlFor="capacity" className="font-medium">
          Maximum capacity
        </label>
        <Input
          type="number"
          id="capacity"
          {...register("capacity", {
            required: "This field is required",
            min: {
              value: 1,
              message: "Capacity should be greater than 1",
            },
          })}
        />
        {errors?.capacity?.message && (
          <span className="text-sm text-red-700">
            {errors.capacity.message}
          </span>
        )}
      </FormRow>

      <FormRow>
        <label htmlFor="regularPrice" className="font-medium">
          Regular price
        </label>
        <Input
          type="number"
          id="regularPrice"
          {...register("regularPrice", { required: "This field is required" })}
        />
        {errors?.regularPrice?.message && (
          <span className="text-sm text-red-700">
            {errors.regularPrice.message}
          </span>
        )}
      </FormRow>

      <FormRow>
        <label htmlFor="discount" className="font-medium">
          Discount
        </label>
        <Input
          type="number"
          id="discount"
          defaultValue="0"
          {...register("discount", {
            required: "This field is required",
            validate: (value) => {
              if (value > 100) return "indirim 100'den büyük olamaz.";
              if (+value >= +getValues().regularPrice)
                return "regularPrice'den büyük olamaz.";
            },
          })}
        />
        {errors?.discount?.message && (
          <span className="text-sm text-red-700">
            {errors.discount.message}
          </span>
        )}
      </FormRow>

      <FormRow>
        <label htmlFor="description" className="font-medium">
          Description for website
        </label>
        <Textarea
          id="description"
          {...register("description", { required: "This field is required" })}
        />
        {errors?.description?.message && (
          <span className="text-sm text-red-700">
            {errors.description.message}
          </span>
        )}
      </FormRow>

      <FormRow>
        <label htmlFor="image" className="font-medium">
          Cabin photo
        </label>
        <FileInput
          id="image"
          accept="image/*"
          {...register("image", { required: "This field is required" })}
        />
        {errors?.image?.message && (
          <span className="text-sm text-red-700">{errors.image.message}</span>
        )}
      </FormRow>

      <FormRow>
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button disabled={isPending}>Add cabin</Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
