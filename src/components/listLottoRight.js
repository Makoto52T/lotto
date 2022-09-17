import React from 'react';
import BtnList from './BtnList';

const ListLotto = ({lottoList, btnList, active}) => {
  function listLotto () {
    return lottoList.map (
      (val, index) =>
        val.data.length === 0
          ? active.selectBtn === val.country
              ? <BtnList
                  func={btnList}
                  variant={active.variant}
                  value={val.country}
                  index={index}
                />
              : <BtnList
                  func={btnList}
                  variant={'outline-secondary'}
                  value={val.country}
                  index={index}
                />
          : val.data.map (
              (x, i) =>
                active.selectBtn === x
                  ? <BtnList
                      func={btnList}
                      variant={active.variant}
                      value={x}
                      index={index}
                    />
                  : <BtnList
                      func={btnList}
                      variant={'outline-secondary'}
                      value={x}
                      index={index}
                    />
            )
    );
  }

  return <div>{listLotto ()}</div>;
};

export default ListLotto;
