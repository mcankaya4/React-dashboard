import CabinTable from "../features/cabins/CabinTable.jsx";
import Row from "../ui/Row.jsx";
import CreateCabinForm from "../features/cabins/CreateCabinForm.jsx";
import Button from "../ui/Button.jsx";
import { useState } from "react";

function Cabins() {
  const [showForm, setShowForm] = useState(false);
  function handleShow() {
    setShowForm((cur) => !cur);
  }
  return (
    <>
      <Row type="horizontal">
        <h1>Cabins</h1>
        <p>Filter / Sort</p>
      </Row>

      <Row>
        <CabinTable />
        <Button onClick={handleShow}>Add new cabin</Button>
        {showForm && <CreateCabinForm />}
      </Row>
    </>
  );
}

export default Cabins;
