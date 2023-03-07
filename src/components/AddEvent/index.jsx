import React, { useState } from "react";
import "./AddEvent.scss";
import Input from "./components/Input";
import Select from "./components/Select";
import TextArea from "./components/TextArea";
import { BiAddToQueue, BiArrowBack, BiPlus } from "react-icons/bi";
import Checkbox from "./components/Checkbox";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import Card from "../Card";
import AddTicket from "../AddTicket";
import AddImg from "../AddMedia/AddImg";
import AddVid from "../AddMedia/AddVid";
import EventAdd from "../../services/event/EventAdd";
import uuid from "react-uuid";

const AddEvent = () => {
  const [url, setUrl] = useState(""); // Handle file upload event and update state
  const [vidUrl, setVidUrl] = useState(""); // Handle file upload event and update state
  const [tickets,setTickets] = useState([]);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({});
  const onSubmit = (data) => {
    EventAdd(data,url,vidUrl,tickets);
  };
  return (
    <div className='add-container grid-cols-2'>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='add-left h-fit bg-bgwhite p-4 rounded-2xl'
      >
        <span className='left-header'>ETKİNLİK BİLGİLERİ</span>
        <div className='left-main-container'>
          <Controller
            name='name'
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input
                value={value}
                onChange={onChange}
                type='text'
                title='Etkinlik Adı'
              />
            )}
          />
          <Controller
            name='category'
            control={control}
            render={({ field: { onChange, value } }) => (
              <Select
                value={value}
                onChange={onChange}
                title='Etkinlik Kategorisi'
                options={[
                  { value: "male", text: "Erkek" },
                  { value: "male", text: "Erkek" },
                  { value: "male", text: "Erkek" },
                ]}
              />
            )}
          />
          <Controller
            name='startDate'
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input
                value={value}
                onChange={onChange}
                type='date'
                title='Etkinlik Başlangıç Tarihi'
              />
            )}
          />
          <Controller
            name='endDate'
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input
                value={value}
                onChange={onChange}
                type='date'
                title='Etkinlik Bitiş Tarihi'
              />
            )}
          />
          <Controller
            name='startTime'
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input
                value={value}
                onChange={onChange}
                type='time'
                title='Etkinlik Başlangıç Saati'
              />
            )}
          />
          <Controller
            name='endTime'
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input
                value={value}
                onChange={onChange}
                type='time'
                title='Etkinlik Bitiş Saati'
              />
            )}
          />
          <Controller
            name='city'
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input
                value={value}
                onChange={onChange}
                type='text'
                title='Etkinliğin Yapılacağı Şehir'
              />
            )}
          />
          <Controller
            name='place'
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input
                value={value}
                onChange={onChange}
                type='text'
                title='Etkinlik Mekanı'
              />
            )}
          />
        </div>
        <Controller
          name='address'
          control={control}
          render={({ field: { onChange, value } }) => (
            <Input
              value={value}
              onChange={onChange}
              type='text'
              title='Mekan Adresi'
            />
          )}
        />
        <Controller
          name='description'
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextArea value={value} onChange={onChange} title='Açıklama' />
          )}
        />
         <Controller
          name='rules'
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextArea value={value} onChange={onChange} title='Kurallar' />
          )}
        />
        {/* <div className='container-grid mt-3'>
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
        </div> */}
        <div className='grid grid-cols-2 grid-rows-2 gap-8 mt-3 first-letter:'>
          <Controller
            name='instaUrl'
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input
                value={value}
                onChange={onChange}
                type='text'
                title='Instagram Hesap Linki'
              />
            )}
          />
          <Controller
            name='fbUrl'
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input
                value={value}
                onChange={onChange}
                type='text'
                title='Facebook Hesap Linki'
              />
            )}
          />
          <Controller
            name='twUrl'
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input
                value={value}
                onChange={onChange}
                type='text'
                title='Twitter Hesap Linki'
              />
            )}
          />
          <Controller
            name='ytUrl'
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input
                value={value}
                onChange={onChange}
                type='text'
                title='Youtube Hesap Linki'
              />
            )}
          />
        </div>
        <button className='border-2 h-12 hover:border-bgdark transition-all text-white border-bg-white bg-spurple w-full mt-4 rounded-full'>
          Ekle
        </button>
      </form>
      <div className='add-right w-8/12 flex justify-center'>
        <div className='w-full pl-10 h-max flex flex-col items-center justify-center'>
          <Card url={url}/>
          <AddImg setUrl={setUrl} url={url}/>
          <AddVid setVidUrl={setVidUrl} vidUrl={vidUrl}/>
          <AddTicket setTickets={setTickets} tickets={tickets} />
        </div>
      </div>
    </div>
  );
};

export default AddEvent;
