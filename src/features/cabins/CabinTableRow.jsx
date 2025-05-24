import { formatCurrency } from "../../utils/helpers.js";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCabin } from "../../services/apiCabins.js";
import toast from "react-hot-toast";

function CabinTableRow({ cabin }) {
  const { id, image, name, capacity, regularPrice: price, discount } = cabin;

  // Silme işleminden sonraki yenilenme için queryClient'i çağırıyoruz.
  const queryClient = useQueryClient();
  // isPending loading mantığının yerini alır
  // mutate içerisine id vererek deleteCabin fonksiyonunu çalıştırdığımız Fn
  const { isPending, mutate } = useMutation({
    // mutationFn: (id) => deleteCabin(id),
    mutationFn: deleteCabin,
    // Başarılı olursa toast message.
    onSuccess: () => {
      toast.success("Cabin table deleted!");
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },
    // Başarısız olursa toast message.
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return (
    <div
      className="font-sono table-row grid-cols-[1fr_2fr_1fr] lg:grid-cols-[0.6fr_1.8fr_2.2fr_1fr_1fr_1fr]"
      role="row"
    >
      <img
        src={image}
        alt="Cabin"
        className="block aspect-[3/2] w-12 -translate-x-[7px] scale-150 object-cover object-center"
      />
      <div className="text-base font-semibold text-gray-600">{name}</div>
      <div className="hidden font-sans lg:block">
        Fits up to {capacity} guests
      </div>
      <div className="hidden font-semibold lg:block">
        {formatCurrency(price)}
      </div>
      <div className="hidden font-medium text-green-700 lg:block">
        {formatCurrency(discount)}
      </div>
      <div>
        <button
          disabled={isPending}
          onClick={() => {
            mutate(id);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default CabinTableRow;
