import React, {useState, useEffect} from 'react';

export default function Badge({badge}) {
  const [top, setTop] = useState (0);
  const [down, setDown] = useState (0);
  const [tod, setTod] = useState (0);

  function getBadge () {
    if (badge !== undefined) {
      return badge.map ((x, i) => (
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
    } else {
      return <div>{''}</div>;
    }
  }

  return (
    <div className="my-3">
      {getBadge ()}
    </div>
  );
}
