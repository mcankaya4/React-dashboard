import { useQuery } from "@tanstack/react-query";
import { getCabins } from "../../services/apiCabins.js";
import Spinner from "../../ui/Spinner.jsx";
import CabinTableRow from "./CabinTableRow.jsx";
import CabinTableHeader from "./CabinTableHeader.jsx";

function CabinTable() {
  // Cabinleri get edebileceğimiz hook.
  const {
    data: cabins,
    isPending,
    error,
  } = useQuery({
    queryKey: ["cabins"],
    queryFn: getCabins,
  });

  // Kabinler yüklenme esnasında spinner göster.
  if (isPending) return <Spinner />;

  return (
    <div
      className="overflow-hidden rounded-lg border border-gray-200 bg-white text-sm"
      role="table"
    >
      <CabinTableHeader />
      {cabins.map((cabin) => (
        <CabinTableRow key={cabin.id} cabin={cabin} />
      ))}
    </div>
  );
}

export default CabinTable;
