import React, { Fragment } from 'react'
import Dropzone from 'react-dropzone-uploader';
import { Card, CardBody, Col, Form, FormGroup, Label, Row } from 'reactstrap'
import { H5, Btn } from '../../../AbstractElements'
import { Add, Cancel, Price, ProductImage, SelectSize, Size } from '../../../Constant';

const Rightformdesc = ({ handlesavechange, register, handleSubmit, errors }) => {

    return (
        <Fragment>
            <Col lg='6'>
                <Card>
                    <CardBody>
                        <div className='product-info'>
                            <H5>{ProductImage}</H5>
                            <Form id="form1" onSubmit={handleSubmit(handlesavechange)}>
                                <FormGroup>
                                    <Dropzone className="dropzone digits text-center h-25" maxFiles={1}
                                        multiple={false} height={100} canCancel={false} inputContent={'Upload Files Here'} {...register("img")} />
                                </FormGroup>
                                <H5 attrH5={{ className: 'mt-4' }}>{SelectSize}</H5>
                                <div className='product-group'>
                                    <Row>
                                        <Col sm='12'>
                                            <FormGroup>
                                                <Label>{Size}</Label>
                                                <select id="exampleFormControlSelect6" name='size' className={`form-select ${(errors.size) && 'is-invalid'}`} {...register("size", { required: true })} >
                                                    <option value={'S'} >S</option>
                                                    <option value={'M'} >M</option>
                                                    <option value={'L'} >L</option>
                                                    <option value={'XL'} >XL</option>
                                                    <option value={'XXL'} >XXL</option>
                                                </select>
                                                <span className='text-danger'>{errors.size && 'Select Size of product '}</span>
                                            </FormGroup>
                                        </Col>
                                        <Col sm='12'>
                                            <FormGroup>
                                                <Label>{Price}</Label>
                                                <input type='number' placeholder='Enter Product Price' className={`form-control ${(errors.price) && 'is-invalid'}`} name='price' {...register("price", { required: true })} />
                                                <span className='text-danger'>{errors.price && 'Add Price of product '}</span>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                </div>
                            </Form>
                        </div>
                        <div className='mt-4'>
                            <div className='text-end'>
                                <Btn attrBtn={{ color: 'primary me-3', type: 'submit', form: 'form1' }}>{Add}</Btn>
                                <Btn attrBtn={{ color: 'danger' }}>{Cancel}</Btn>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </Fragment>
    )
}

export default Rightformdesc
