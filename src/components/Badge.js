import React, {useState, useEffect} from 'react';

export default function Badge({badge}) {
  function getBadge () {
    console.log ('this getBadge', badge);
    if (badge && badge[0].numb !== '') {
      return badge.map ((x, i) => // console.log (x.numb)
      (
        <span
          key={i}
          className="badge bg-danger"
          style={{
            fontSize: '16px',
            paddingTop: '5px',
            marginRight: '5px',
            marginTop: '5px',
          }}
        >
          {x.numb}
        </span>
      ));
    } else if (badge && badge[0].numb === '') {
      return <div className="my-3">{''}</div>;
    }
  }

  return (
    <div className="my-3">
      {getBadge ()}
    </div>
  );
}
