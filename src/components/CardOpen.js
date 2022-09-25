import {useRouter} from 'next/router';
import React from 'react';
import Link from 'next/link';

export default function CardOpen({i, data}) {
  return (
    <Link href={`/cart/${i}`}>
      <a style={{color: '#fff'}}>
        <div key={i} id="bgCard948" className="card card bg-success text-light">
          <h5 className="card-header">{data.lottoName}</h5>
          <div className="card-body">
            <h5 className="card-title">{data.LottoDate}</h5>
            <div data-v-30692bb8="" className="d-flex justify-content-between">
              <span data-v-30692bb8="" className="font-weight-light small">
                เวลาปิด
              </span>
              {' '}
              <span data-v-30692bb8="" className="font-weight-light small">
                {data.LottoDate}, {data.CloseTime}
              </span>
            </div>
            <div data-v-30692bb8="" className="d-flex justify-content-between">
              <span data-v-30692bb8="" className="font-weight-light">
                สถานะ
              </span>
              {' '}
              <span data-v-30692bb8="" className="font-weight-light">
                {' '}<span className="lottoCoudown948">18:29:50</span>
              </span>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
}
