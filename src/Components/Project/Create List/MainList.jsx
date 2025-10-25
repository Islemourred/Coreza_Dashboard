import  {  useContext } from 'react';
import { Col, Form,  Label, Row } from 'reactstrap';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import ProjectAppContext from '../../../Helper/Project';
import { Btn } from '../../../AbstractElements';
 import { Add, ProjectRate, ProjectType, ClientName, Cancel, EnterSomeDetails, ProjectTitle, Priority, ProjectSize, StartingDate, EndingDate } from '../../../Constant';
import MainTitle from './MainTitle';
import MainType from './MainType';
import DropItem from './DropItem';
import MainDates from './MainDates';
import MainPriority from './MainPriority';

const MainList = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { addNewProject } = useContext(ProjectAppContext);
    const history = useNavigate();
    const AddProject = data => {
        addNewProject(data);
        history(`${process.env.PUBLIC_URL}/project/project-list`);
    };
    return (
            <Form className="theme-form" onSubmit={handleSubmit(AddProject)}>
                <Row>
                    <MainTitle ProjectTitle={ProjectTitle} register={register} errors={errors} />
                </Row>
                <Row>
                    <MainTitle register={register} errors={errors} ClientName={ClientName} />
                </Row>
                <Row>
                    <Col sm="4">
                        <MainType errors={errors} register={register} ProjectRate={ProjectRate} />
                    </Col>
                    <Col sm="4">
                        <MainType ProjectType={ProjectType} register={register} />
                    </Col>
                    <MainPriority register={register} Priority={Priority} />
                </Row>
                <Row>
                    <MainPriority register={register} ProjectSize={ProjectSize} />
                    <Col sm="4">
                        <MainDates StartingDate={StartingDate} />
                    </Col>
                    <Col sm="4">
                        <MainDates EndingDate={EndingDate} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="mb-3">
                            <Label>{EnterSomeDetails}</Label>
                            <input type="textarea" className="form-control" name="description" rows="3" style={{ height: '80px' }} {...register('description', { required: true })} />
                            <span style={{ color: 'red' }}>{errors.description && 'Some Details is required'}</span>
                        </div>
                    </Col>
                </Row>
                <DropItem />
                <Row>
                    <Col className="text-end">
                        <div className="mb-0">
                            <Btn attrBtn={{ color: 'success', className: 'me-3' }}>{Add}</Btn>
                            <Btn attrBtn={{ color: 'danger' }}>{Cancel}</Btn>
                        </div>
                    </Col>
                </Row>
            </Form>
    );
};
export default MainList;