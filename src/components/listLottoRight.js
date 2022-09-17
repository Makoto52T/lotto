import React from 'react';
import BtnList from './BtnList';

const ListLottoNew = ({lottoList, btnList, active}) => {
  function listLotto () {
    let config = {
      size: 'sm',
      margin: '1px',
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
          : <div key={index}>
              <h5 style={{margin: '5px'}}>{val.title}</h5>
              {val.data.map (
                (x, i) =>
                  active.selectBtn === x
                    ? <BtnList
                        value={x}
                        index={index}
                        config={config}
                        variant={'primary'}
                      />
                    : <BtnList
                        value={x}
                        index={index}
                        config={config}
                        variant={'outline-secondary'}
                      />
              )}
            </div>
    );
  }

  return <div>{listLotto ()}</div>;
};

export default ListLottoNew;
