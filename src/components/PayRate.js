import React from 'react';
import {Row, Col} from 'react-bootstrap';
import DropdownList from './DropdownList';

export default function PayRate({payRate}) {
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
