import SweetAlert from 'sweetalert2';
import { AlertState } from '../../../Constant';
import { Col, Card, CardBody } from 'reactstrap';
import { AlertSweetalertData } from '../../../Data/Bonus-ui';
import { Btn } from '../../../AbstractElements';
import HeadingCommon from '../../../Common/Component/HeadingCommon';

const Alert = () => {
    const Displayalert = (name) => {
        if (name === 'alertSuccess') {
            SweetAlert.fire({ title: 'Good job!', text: 'You clicked the button!', icon: 'success' });
        }
        if (name === 'alertDanger') {
            SweetAlert.fire({ title: 'Good job!', text: 'You clicked the button!', icon: 'error' });
        }
        if (name === 'alertInfo') {
            SweetAlert.fire({ title: 'Good job!', text: 'You clicked the button!', icon: 'info' });
        }
        if (name === 'alertWarning') {
            SweetAlert.fire({ title: 'Good job!', text: 'You clicked the button!', icon: 'warning' });
        }
    };
    return (
            <Col sm="12">
                <Card>
                    <HeadingCommon CardHeaderClassName="pb-0" Heading={AlertState} />
                    <CardBody>
                        <div className="btn-showcase">
                            {AlertSweetalertData.map((item,index) =>
                                <Btn attrBtn={{ color: item.color, className: item.class, name: item.name, onClick: (e) => Displayalert(e.target.name) }} key={index}>{item.title}</Btn>
                            )}
                        </div>
                    </CardBody>
                </Card>
            </Col>
    );
};

export default Alert;