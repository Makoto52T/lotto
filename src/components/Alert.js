import {Alert} from 'react-bootstrap';
export const Warning = () => {
  return (
    <Alert variant="warning">
      <label>
        *** สำคัญมาก!! กรุณาอ่านและทำความเข้าใจ
        {' '}
        <b>"กฎและกติกา"</b>
        {' '}
        และ
        {' '}
        <b>"วิธีเล่นหวย"</b>
        {' '}
        ที่เมนูด้านบน***
      </label>
      <label>
        **บริษัทฯแนะนำลูกค้าทุกท่านให้ตรวจสอบรายการแทงทุกครั้งก่อนยืนยันการแทง บริษัทฯจะไม่สามารถยกเลิกบิลที่กดบันทึกแล้วทุกกรณี***
      </label>
    </Alert>
  );
};

export const CloseMarket = () => {
  return (
    <Alert variant="danger">
      <label>
        *** ตลาดปิด ***
      </label>
    </Alert>
  );
};

export const BreadcrumbBox = () => {
  return (
    <Alert variant="secondary">
      <label>
        *** ตลาดปิด ***
      </label>
    </Alert>
  );
};
