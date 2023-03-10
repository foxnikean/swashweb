import React, { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import { BiFile } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { getEventsAsync } from "../../stores/eventsSlice";
import Card from "../Card";

const EventsPage = () => {
    const [data, setData] = useState([]);
    const [searchQuerry, setSearchQuerry] = useState("");
    const events = useSelector(state => state.eventsData.data)
    const dispatch = useDispatch()
    
    const handleSearch = async (e) => {
        const search = e.target.value.toLowerCase()
       setSearchQuerry(search)
        const filter = events.filter(event => event.eventName.toLowerCase().includes(search)) 
        setData(filter);
      };

    useEffect(() => {
     dispatch(getEventsAsync())
    }, []);
  return (
    <div className='bg-bgwhite ml-[303px] w-full flex flex-col gap-4 items-center min-h-screen px-28 pt-16'>
        <span className="text-4xl mb-8 flex  items-center gap-3  font-bold self-start"><BiFile/> Etkinlikler</span>
      <SearchBar handleSearch={handleSearch} setSearchQuerry={setSearchQuerry}/>
      <div className="grid grid-cols-3 gap-16 mt-4">
        {searchQuerry ? data.map((d,i) => (
            <Card key={i} location={d.place} time={d.startTime} name={d.name} img={d.image} event={d}/>
        )): events.map((event,i) => (
            <Card key={i} location={event.place} time={event.startTime} name={event.name} img={event.image} event={event}/>
        ))}
      </div>
    </div>
  );
};

export default EventsPage;
