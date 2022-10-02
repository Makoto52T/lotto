import React, {useState, useEffect} from 'react';
import {Row, Col, Button} from 'react-bootstrap';
import DropdownList from './DropdownList';

export default function PayRate({payRate, config, setConfig}) {
  async function cRow () {
    setConfig ({
      row: !config.row,
      top: config.top,
      down: config.down,
      tod: config.tod,
    });
  }
  return (
    <Row>
      <Col>
        <table style={{width: '100%'}}>
          <tr>
            <td /><td>
              <label className="label1">
                หวยต่างประเทศ [2022/09/25]
              </label>
            </td>
            <td />
            <td colSpan={2}>
              <Button
                variant="warning"
                onClick={() => {
                  cRow ();
                }}
                style={{width:"120px"}}
              >
                {config.row ? <label>หลายแถว</label> : <label>แถวเดียว</label>}

              </Button>
            </td>
          </tr>
          <tr>
            <td>
              <label className="label1">
                อัตราจ่าย
              </label>
            </td>
            <td className="">
              <DropdownList
                index={0}
                variant={'light'}
                value={payRate}
                func={null}
              />
            </td>
          </tr>
        </table>
      </Col>
    </Row>
  );
}
