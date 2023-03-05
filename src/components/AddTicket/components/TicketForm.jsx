import React from "react";
import Input from "../../AddEvent/components/Input";
import Select from "../../AddEvent/components/Select";

const TicketForm = () => {
  return (
    <div>
      <Input type='text' title='Bilet Adı' />
      <Input type='number' title='Bilet Fiyatı' />
      <Select
      title="Biletin Satışta Kalma Süresi"
        options={[
          { value: "undefined", text: "30 gün" },
          { value: "male", text: "24 saat sonra" },
          { value: "male", text: "5 dk sonra" },
        ]}
      />
      <Input type='number' title='Satışa Konulan Bilet Sayısı' />
      <Input type='number' title='Biletin Satış Fiyatı' />
    </div>
  );
};

export default TicketForm;
