import React from "react";
import Input from "../../AddEvent/components/Input";
import Select from "../../AddEvent/components/Select";
import { useForm } from "react-hook-form";

const TicketForm = ({ setTickets, tickets }) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({});
  const onSubmit = (data) => {

  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input type='text' title='Bilet Adı' />
      <Input type='number' title='Bilet Fiyatı' />
      <Select
        title='Biletin Satışta Kalma Süresi'
        options={[
          { value: "undefined", text: "30 gün" },
          { value: "male", text: "24 saat sonra" },
          { value: "male", text: "5 dk sonra" },
        ]}
      />
      <Input type='number' title='Satışa Konulan Bilet Sayısı' />
      <Input type='number' title='Biletin Satış Fiyatı' />
    </form>
  );
};

export default TicketForm;
