import { Fragment } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'
import { Container, Row } from 'reactstrap'
import { Breadcrumbs } from '../../../AbstractElements'
import LeftformDesc from './LeftformDesc'
import Rightformdesc from './Rightformdesc'

const AddProduct = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const handlesavechange = (data) => {
        if (data!== ""){
            alert("product added succesfully")
            navigate(`${process.env.PUBLIC_URL}/ecommerce/product`);
        } 

    }
    return (
        <Fragment>
            <Breadcrumbs parent="Ecommerce" title="Add Product" mainTitle="Add Product" />
            <Container fluid={true} className='add-product'>
                <Row>
                    <LeftformDesc handlesavechange={handlesavechange} register={register} handleSubmit={handleSubmit} errors={errors} />
                    <Rightformdesc handlesavechange={handlesavechange} register={register} handleSubmit={handleSubmit} errors={errors} />
                </Row>
            </Container>
        </Fragment>
    )
}

export default AddProduct