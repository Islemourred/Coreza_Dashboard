import {  P } from '../../../../AbstractElements';
import  {  useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Button, Card, CardBody,  Col, Input } from 'reactstrap';
import { ClipboardOnTextInput, Copy, Cut, Cutandcopytext } from '../../../../Constant';
import HeadingCommon from '../../../../Common/Component/HeadingCommon';

const ClipboardText = () => {
    const [state, setState] = useState({
        value: '',
        copied: false
    });
    return (
        <Col sm="12" md="6" >
          <Card>
            <HeadingCommon CardHeaderClassName="pb-0" Heading={ClipboardOnTextInput} />
            <CardBody>
                        <div className="clipboaard-container">
                            <P attrPara={{ className: "card-description" }}>{Cutandcopytext}</P>
                            <Input className="form-control" id="clipboardExample1" type="text" placeholder="type some text to copy / cut"
                                onChange={({ target: { value } }) => setState({ value, copied: false })} />
                            <div className="mt-3 text-end">
                                <CopyToClipboard text={state.value}
                                    onCopy={() => setState({ copied: true })}>
                                    <Button className='btn-clipboard me-1' color='primary'><i className="fa fa-copy"></i> {Copy}</Button>
                                </CopyToClipboard>
                                <CopyToClipboard text={state.value}
                                    onCopy={() => { setState({ copied: true, value: '' }); document.getElementById("clipboardExample1").value = ''; }}>
                                    <Button className='btn-clipboard-cut'><i className="fa fa-cut"></i> {Cut}</Button>
                                </CopyToClipboard>
                            </div>
                        </div>
                    </CardBody>
          </Card>
        </Col>
    );
};
export default ClipboardText;