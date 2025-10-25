import { Btn } from '../../AbstractElements';
import { Cancel, Collection, Description, EditBookmark, General, Group, MyBookmarks, Save, Title, WebUrl } from '../../Constant';
import BookmarkContext from '../../Helper/bookmark';
import React, { Fragment, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Form, FormGroup, Label, Modal, ModalBody, ModalHeader, Row } from 'reactstrap';

const EditBookmarkModal = () => {
  const { updatebookmark, editrow, editModal, seteditModal } = useContext(BookmarkContext);
  const editToggle = () => {
    seteditModal(!editModal);
  };
  const { register, handleSubmit, formState: { errors } } = useForm();
  const Updatenewbookmark = (id, data, image_url) => {
    updatebookmark(id, data, image_url);
  };
  const Updatebookmark = (data) => {
    if (data !== '') {
      Updatenewbookmark(editrow.id, data, 'lightgallry/01.jpg');
      seteditModal(!editModal);
    } else {
      errors.showMessages();
    }
  };

  return (
    <Fragment>
      <Modal isOpen={editModal} toggle={editToggle} size="lg">
        <ModalHeader toggle={editToggle}>
          {EditBookmark}
        </ModalHeader>
        <ModalBody>
          <Form className="form-bookmark needs-validation" onSubmit={handleSubmit(Updatebookmark)} >
            <div className="form-row">
              <FormGroup className="col-md-12">
                <Label>{WebUrl}</Label>
                <input className="form-control" name="url" type="text" defaultValue={editrow.website_url} autoComplete="off"
                  {...register('url', { required: true })} />
                <span style={{ color: 'red' }}>
                  {errors.url && 'Url is required'}
                </span>
              </FormGroup>
              <FormGroup className="col-md-12">
                <Label>{Title}</Label>
                <input className="form-control" name="title" type="text" defaultValue={editrow.title}
                  autoComplete="off"
                  {...register('title', { required: true })} />
                <span style={{ color: 'red' }}>
                  {errors.title && 'Title is required'}
                </span>
              </FormGroup>
              <FormGroup className="col-md-12">
                <Label>{Description}</Label>
                <input className="form-control" name="desc" type="textarea" defaultValue={editrow.desc} autoComplete="off" {...register('desc', { required: true })}
                />
                <span style={{ color: 'red' }}> {errors.desc && 'Description is required'}</span>
              </FormGroup>
              <Row>
                <div className="col-md-6 mb-0">
                  <Label>{Group}</Label>
                  <select className="form-select" name="group">
                    <option value="bookmark">
                      {MyBookmarks}
                    </option>
                  </select>
                </div>
                <div className="col-md-6 mb-0">
                  <Label>{Collection}</Label>
                  <select className="form-select" name="collection">
                    <option value="general">{General}</option>
                    <option value="fs">{'fs'}</option>
                  </select>
                </div>
              </Row>
            </div>
            <Btn attrBtn={{ color: 'primary', type: 'submit' }}>{Save}</Btn>&nbsp;&nbsp;
            <Btn attrBtn={{ color: 'secondary', onClick: editToggle }}>{Cancel} </Btn>
          </Form>
        </ModalBody>
      </Modal>
    </Fragment>
  );
};
export default EditBookmarkModal;