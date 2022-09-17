import React from 'react';
import {InputGroup, Button, Dropdown} from 'react-bootstrap';
import DropdownList from './DropdownList';
import BtnList from './BtnList';

const ListLotto = ({lottoList, btnList, active}) => {
  function listLotto () {
    let config = {
      size: 'default',
      margin: '0px',
      func: btnList,
    };

    return lottoList.map (
      (val, index) =>
        val.data.length === 0
          ? active.selectBtn === val.country
              ? <BtnList
                  value={val.country}
                  index={index}
                  config={config}
                  variant={'primary'}
                />
              : <BtnList
                  value={val.country}
                  index={index}
                  config={config}
                  variant={'outline-secondary'}
                />
          : active.selectBtn === val.country
              ? <DropdownList
                  index={index}
                  variant={'primary'}
                  value={val}
                  func={btnList}
                />
              : <DropdownList
                  index={index}
                  variant={'outline-secondary'}
                  value={val}
                  func={btnList}
                />
    );
  }

  return <InputGroup>{listLotto ()}</InputGroup>;
};

export default ListLotto;
