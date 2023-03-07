import React from "react";
import Input from "../../AddEvent/components/Input";
import Select from "../../AddEvent/components/Select";
import { Controller, useForm } from "react-hook-form";

const TicketForm = ({ setTickets, tickets }) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({});
  const onSubmit = (data) => {
    setTickets([
      ...tickets,
      {
        name: data.name,
        price: data.price,
        duration: data.duration,
        amount: data.amount,
      },
    ]);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name='name'
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input
            value={value}
            onChange={onChange}
            type='text'
            title='Bilet Adı'
          />
        )}
      />
      <Controller
        name='price'
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input
            value={value}
            onChange={onChange}
            type='number'
            title='Bilet Fiyatı'
          />
        )}
      />
      <Controller
        name='duration'
        control={control}
        render={({ field: { onChange, value } }) => (
          <Select
            title='Biletin Satışta Kalma Süresi'
            options={[
              { value: "male", text: "24 saat sonra" },
              { value: "male", text: "5 dk sonra" },
            ]}
            value={value}
            onChange={onChange}
          />
        )}
      />
      <Controller
        name='amount'
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input
            value={value}
            onChange={onChange}
            type='number'
            title='Satışa Konulan Bilet Sayısı'
          />
        )}
      />
      <button className='border-2 h-12 hover:border-bgdark transition-all text-white border-bg-white bg-spurple w-full mt-4 rounded-full'>
        Ekle
      </button>
    </form>
  );
};

export default TicketForm;
