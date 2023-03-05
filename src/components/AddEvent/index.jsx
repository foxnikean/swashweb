import React, { useState } from "react";
import "./AddEvent.scss";
import Input from "./components/Input";
import Select from "./components/Select";
import TextArea from "./components/TextArea";
import { BiAddToQueue, BiArrowBack, BiPlus } from "react-icons/bi";
import Checkbox from "./components/Checkbox";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import Card from "../Card";
import AddTicket from "../AddTicket";
import AddImg from "../AddMedia/AddImg";
import AddVid from "../AddMedia/AddVid";
const schema = z.object({
  rule: z.string().min(10),
});

const AddEvent = () => {
  const [rules, setRules] = useState([
    {
      checked: false,
      text: "Girişlerde kadın ve erkek oranına dikkat edilecektir.",
    },
    {
      checked: false,
      text: "Girişlerde kadın ve erkek oranına dikkat edilecektir.",
    },
    {
      checked: false,
      text: "Girişlerde kadın ve erkek oranına dikkat edilecektir.",
    },
    {
      checked: false,
      text: "Girişlerde kadın ve erkek oranına dikkat edilecektir.",
    },
    {
      checked: false,
      text: "Girişlerde kadın ve erkek oranına dikkat edilecektir.",
    },
    {
      checked: false,
      text: "Girişlerde kadın ve erkek oranına dikkat edilecektir.",
    },
    {
      checked: false,
      text: "Girişlerde kadın ve erkek oranına dikkat edilecektir.",
    },
  ]);
  const [isAddRuleActive, setIsAddRuleActive] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });
  const onSubmit = (data) => {
    setRules([...rules, { checked: true, text: data.rule }]);
    setIsAddRuleActive(false);
  };
  return (
    <div className='add-container grid-cols-2'>
      <div className='add-left h-fit bg-bgwhite p-4 rounded-2xl'>
        <span className='left-header'>ETKİNLİK BİLGİLERİ</span>
        <div className='left-main-container'>
          <Input type='text' title='Etkinlik Adı' />
          <Select
            title='Etkinlik Kategorisi'
            options={[
              { value: "male", text: "Erkek" },
              { value: "male", text: "Erkek" },-
              { value: "male", text: "Erkek" },
            ]}
          />
          <Input type='date' title='Etkinlik Başlangıç Tarihi' />
          <Input type='date' title='Etkinlik Bitiş Tarihi' />
          <Input type='time' title='Etkinlik Başlangıç Saati' />
          <Input type='time' title='Etkinlik Bitiş Saati' />
          <Input type='text' title='Etkinliğin Yapılacağı Şehir' />
          <Input type='text' title='Etkinlik Mekanı' />
        </div>
        <Input type='text' title='Mekan Adresi' />
        <TextArea title='Etkinlik Açıklaması' />
        <div className='container-grid mt-3'>
          <span className='input-title'>Etkinlik Kuralları</span>
          {isAddRuleActive ? (
            <form
              className='container-grid relative'
              onSubmit={handleSubmit(onSubmit)}
            >
              <input className='add-input' {...register("rule")} type='text' />
              <button className='submit-button absolute right-4 w-10 rounded-full top-1/4 flex items-center justify-center '>
                <BiPlus />
              </button>
              <button
                onClick={() => setIsAddRuleActive(false)}
                className='submit-button absolute right-16 w-10 rounded-full top-1/4 flex items-center justify-center '
              >
                <BiArrowBack />
              </button>
            </form>
          ) : (
            <button
              className='add-rule-btn bg-white'
              onClick={() => {
                setIsAddRuleActive(true);
              }}
            >
              <BiAddToQueue />
              <span>Etkinlik Kuralı Ekle</span>
            </button>
          )}

          <ul className='rules-container gap-10 bg-white'>
            {rules.map((rule, i) => (
              <li>
                <Checkbox
                  key={i}
                  text={rule.text}
                  setRules={setRules}
                  isChecked={rule.checked}
                  id={i}
                />
              </li>
            ))}
          </ul>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-8 mt-3 first-letter:">
              <Input type="text" title="Instagram Hesap Linki"/>
              <Input type="text" title="Facebook Hesap Linki"/>
              <Input type="text" title="Twitter Hesap Linki"/>
              <Input type="text" title="Youtube Hesap Linki"/>
        </div>
      </div>
      <div className='add-right w-8/12 flex justify-center'>
        <div className="w-full pl-10 flex flex-col items-center justify-center">
            <Card/>
            <AddImg/>
            <AddVid/>
            <AddTicket/>
        </div>
      </div>
    </div>
  );
};

export default AddEvent;
