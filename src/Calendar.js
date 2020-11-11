import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


const  Calen = (props) => {
  const [value, onChange] = useState(new Date());


 
  return (
    <div>
       <Calendar
        onChange={onChange}
        onClickDay={props.onClickDay}
       value={value}/>
      
    </div>
  );
}

export default Calen;