import React, { Fragment } from 'react'
import { Card, CardBody, Col, Form, FormGroup, Label, Row } from 'reactstrap'
import { H5 } from '../../../AbstractElements'
import { Black, Blue, BothQuality, Brand, BrandNew, Categories, Color, Denizen, Description, Diesel, Green, Hudson, Levis, MansJeans, MansShirt, ProductCategory, ProductDescription, ProductName, Quality, Red, SecondHand, Selectdefault, Spykar, White, WomenSkirt, WomenTshirt } from '../../../Constant'

const LeftformDesc = ({ handlesavechange, register, handleSubmit, errors }) => {
    return (
        <Fragment>
            <Col lg='6'>
                <Card>
                    <CardBody>
                        <div className='product-info'>
                            <H5>{Description}</H5>
                            <Form onSubmit={handleSubmit(handlesavechange)} id="form1">
                                <div className='product-group'>
                                    <Row>
                                        <Col>
                                            <FormGroup>
                                                <Label>{ProductName}</Label>
                                                <input className={`form-control ${(errors.productname) && 'is-invalid'}`} type='text' placeholder='Enter Product Name' name='productname' {...register("productname", { required: true })} />
                                                <span className='text-danger'>{errors.productname && 'Product Name is required'}</span>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <FormGroup>
                                                <Label>{ProductDescription}</Label>
                                                <input className={`form-control ${(errors.description) && 'is-invalid'}`} type='textarea' placeholder='Enter Product description' name='description' {...register("description", { required: true })} />
                                                <span className='text-danger'>{errors.description && 'Add Some Description about this Product'}</span>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                </div>
                            </Form>
                            <H5 attrH5={{ className: 'mt-4' }}>{Categories}</H5>
                            <Form onSubmit={handleSubmit(handlesavechange)} id="form1">
                                <div className="product-group">
                                    <Row>
                                        <Col>
                                            <FormGroup>
                                                <Label htmlFor="exampleFormControlSelect3" className="form-label">{ProductCategory}</Label>
                                                <select id="exampleFormControlSelect3" className={`form-select ${(errors.category) && 'is-invalid'}`} {...register('category', { required: true })}>
                                                    <option value={''}>{Selectdefault}</option>
                                                    <option value={MansShirt}>{MansShirt}</option>
                                                    <option value={MansJeans}>{MansJeans}</option>
                                                    <option value={WomenTshirt}>{WomenTshirt}</option>
                                                    <option value={WomenSkirt}>{WomenSkirt}</option>
                                                </select>
                                                <span className='text-danger'>{errors.category && 'please Select Product type'}</span>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col sm='6'>
                                            <FormGroup>
                                                <Label htmlFor="exampleFormControlSelect4" className="form-label">{Brand}</Label>
                                                <select id="exampleFormControlSelect4" className={`form-select ${(errors.brand) && 'is-invalid'}`} name='brand' {...register('brand', { required: true })}>
                                                    <option value={''}>{Selectdefault}</option>
                                                    <option >{Levis}</option>
                                                    <option >{Hudson}</option>
                                                    <option >{Denizen}</option>
                                                    <option >{Spykar}</option>
                                                    <option >{Diesel}</option>
                                                </select>
                                                <span className='text-danger'>{errors.brand && 'Select Brand Name is Required'}</span>
                                            </FormGroup>
                                        </Col>
                                        <Col sm='6'>
                                            <FormGroup>
                                                <Label htmlFor="exampleFormControlSelect5" className="form-label">{Color}</Label>
                                                <select id="exampleFormControlSelect5" className={`form-select ${(errors.color) && 'is-invalid'}`} {...register('color', { required: true })}>
                                                    <option value={''}>{Selectdefault}</option>
                                                    <option >{Red}</option>
                                                    <option >{Blue}</option>
                                                    <option >{White}</option>
                                                    <option >{Black}</option>
                                                    <option >{Green}</option>
                                                </select>
                                                <span className='text-danger'>{errors.color && 'Select product color'}</span>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <FormGroup>
                                                <Label htmlFor="exampleFormControlSelect5" className="form-label">{Quality}</Label>
                                                <select type='select' id="exampleFormControlSelect5" className={`form-select ${(errors.quality) && 'is-invalid'}`} name='quality' {...register('quality', { required: true })}>
                                                    <option value={''}>{Selectdefault}</option>
                                                    <option >{BrandNew}</option>
                                                    <option >{SecondHand}</option>
                                                    <option >{BothQuality}</option>
                                                </select>
                                                <span className='text-danger'>{errors.quality && 'Select Quality type '}</span>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                </div>
                            </Form>
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </Fragment>
    )
}
export default LeftformDesc