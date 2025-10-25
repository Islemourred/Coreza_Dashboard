import { Title, Type, Category, Content, Text, Audio, Video, Image } from '../../../Constant';
import Ckeditor from 'react-ckeditor-component';
import { Typeahead } from 'react-bootstrap-typeahead';
import { Col, Form, FormGroup, Label, Input } from 'reactstrap';

const FormPost = () => {
  const data = [
    { name: 'Lifestyle' },
    { name: 'Travel' }
  ];
  return (
      <Form className="row needs-validation">
        <Col sm="12">
          <FormGroup>
            <Label for="validationCustom01">{Title}:</Label>
            <Input  id="validationCustom01" type="text" placeholder="Post Title" required="" />
            <div className="valid-feedback">{'Looks good!'}</div>
          </FormGroup>
          <FormGroup>
            <Label>{Type}:</Label>
            <div className="m-checkbox-inline">
              <Label for="edo-ani">
                <Input className="radio_animated" id="edo-ani" type="radio" name="rdo-ani" />{Text}
              </Label>
              <Label for="edo-ani1">
                <Input className="radio_animated" id="edo-ani1" type="radio" name="rdo-ani" />{Image}
              </Label>
              <Label for="edo-ani2">
                <Input className="radio_animated" id="edo-ani2" type="radio" name="rdo-ani" defaultChecked />{Audio}
              </Label>
              <Label for="edo-ani3">
                <Input className="radio_animated" id="edo-ani3" type="radio" name="rdo-ani" />{Video}
              </Label>
            </div>
          </FormGroup>
          <FormGroup>
            <Label>{Category}:</Label>
            <div className="col-form-Label">
              <Typeahead
                id="multiple-typeahead"
                className="mt-2"
                clearButtons
                labelKey="name"
                multiple
                options={data}
                placeholder="Select Your Name...."
              />
            </div>
          </FormGroup>
          <div className="email-wrapper">
            <div className="theme-form">
              <FormGroup>
                <Label>{Content}:</Label>
                <Ckeditor
                  activeclassName="p10"
                />
              </FormGroup>
            </div>
          </div>
        </Col>
      </Form>
  );
};
export default FormPost;