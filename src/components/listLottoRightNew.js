import React from 'react';
import BtnList from './BtnList';

const ListLottoNew = ({lottoList, btnList, active}) => {
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
          : <div key={index}>
              <h5 style={{margin: '5px'}}>{val.title}</h5>
              {val.data.map (
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
              )}
            </div>
    );
  }

  return <div>{listLotto ()}</div>;
};

export default ListLottoNew;
