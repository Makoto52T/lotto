import React from 'react';
import DatePicker from 'react-datepicker';
import {InputGroup, Button} from 'react-bootstrap';

const DateForm = ({fromDate, setFromDate, toDate, setToDate}) => {
  const BtnDate = [
    'วันนี้',
    'เมื่อวาน',
    'สัปดาห์นี้',
    'สัปดาห์ที่แล้ว',
    'เดือนนี้',
    'เดือนที่แล้ว',
  ];

  function getBtnDate () {
    return BtnDate.map ((val, i) => (
      <Button
        key={i}
        style={{margin: '10px'}}
        size="sm"
        variant="primary"
        onClick={() => {
          getDate (val);
        }}
      >
        {val}
      </Button>
    ));
  }

  async function getDate (input) {
    let d = new Date ();
    if (input === 'วันนี้') {
      setFromDate (d);
      setToDate (d);
    } else if (input === 'เมื่อวาน') {
      d.setDate (d.getDate () - 1);
      setFromDate (d);
      setToDate (d);
    } else if (input === 'สัปดาห์นี้') {
      setFromDate (new Date (d.setDate (d.getDate () - d.getDay () + 1)));
      setToDate (new Date (d.setDate (d.getDate () - d.getDay () + 7)));
    } else if (input === 'สัปดาห์ที่แล้ว') {
      setToDate (new Date (d.setDate (d.getDate () - d.getDay ())));
      setFromDate (new Date (d.setDate (d.getDate () - d.getDay () - 6)));
    } else if (input === 'เดือนนี้') {
      setFromDate (new Date (d.getFullYear (), d.getMonth (), 1));
      setToDate (new Date (d.getFullYear (), d.getMonth () + 1, 0));
    } else if (input === 'เดือนที่แล้ว') {
      setFromDate (new Date (d.getFullYear (), d.getMonth () - 1, 1));
      setToDate (new Date (d.getFullYear (), d.getMonth (), 0));
    }
  }

  return (
    <InputGroup.Text>
      <label style={{margin: '10px'}}>จาก</label>
      <DatePicker
        selected={fromDate}
        onChange={date => setFromDate (date)}
        dateFormat="dd/MM/yyyy"
      />
      <label style={{margin: '10px'}}>ถึง</label>
      <DatePicker
        selected={toDate}
        onChange={date => setToDate (date)}
        dateFormat="dd/MM/yyyy"
      />
      {getBtnDate ()}
    </InputGroup.Text>
  );
};

export default DateForm;
