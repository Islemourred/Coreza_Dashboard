import  {  useContext, useState } from 'react'
import { Card, CardBody } from 'reactstrap'
import {   UL, LI, Btn } from '../../AbstractElements'
import { AllTask, Completed, Href, InProcess, Pending, ToDoList } from '../../Constant'
import { Activity, Cast, CheckCircle, FilePlus, Trash } from 'react-feather';
import TodoContext from '../../Helper/Todo';
import UserImage from './UserImage';


const Leftsideuser = () => {
  const [IsOpen, setIsOpen] = useState(false);
  const OnHandelClick = () => {
    setIsOpen(!IsOpen);
  };
  const { allTodos, setShowTodos } = useContext(TodoContext);
  return (
      <div className="md-sidebar email-sidebar email-wrap bookmark-wrap">
        <a className="btn btn-primary md-sidebar-toggle" href={Href} onClick={OnHandelClick}>ToDo Filter</a>
        <div className={`md-sidebar-aside email-left-aside ${IsOpen ? 'open' : ''}`}>
          <Card>
            <CardBody>
              <div className="email-app-sidebar left-bookmark">
                <UserImage />
                <UL attrUL={{ className: 'main-menu simple-list nav' }}>
                  <LI attrLI={{ className: 'nav-item' }} >
                    <Btn attrBtn={{ color: 'primary', className: 'btn-block btn-mail' }} >
                      <CheckCircle className='me-2' />{ToDoList}
                    </Btn>
                  </LI>
                  <LI attrLI={{ className: 'nav-item' }}>
                    <a href={Href} onClick={() => { setShowTodos(allTodos) }}>
                      <span className='iconbg badge-light-primary'><FilePlus /></span>
                      <span className="title ms-2">{AllTask}</span>
                    </a>
                  </LI>
                  <LI attrLI={{ className: 'nav-item' }}>
                    <a href={Href} onClick={() => { setShowTodos(allTodos.filter((data) => data.badge === "Done")) }}>
                      <span className='iconbg badge-light-success'><CheckCircle /></span>
                      <span className="title ms-2">{Completed}</span>
                      <span className='badge rounded-pill badge-success'>{allTodos.filter((data) => data.badge === "Done").length}</span>
                    </a>
                  </LI>
                  <LI attrLI={{ className: 'nav-item' }}>
                    <a href={Href} onClick={() => { setShowTodos(allTodos.filter((data) => data.badge === "Pending")) }}>
                      <span className='iconbg badge-light-danger'><Cast /></span>
                      <span className="title ms-2">{Pending}</span>
                      <span className='badge rounded-pill badge-danger'>{allTodos.filter((data) => data.badge === "Pending").length}</span>
                    </a>
                  </LI>
                  <LI attrLI={{ className: 'nav-item' }}>
                    <a href={Href} onClick={() => { setShowTodos(allTodos.filter((data) => data.badge === "In Progress")) }}>
                      <span className='iconbg badge-light-info'><Activity /></span>
                      <span className="title ms-2"> {InProcess}</span>
                      <span className='badge rounded-pill badge-primary'>{allTodos.filter((data) => data.badge === "In Progress").length}</span>
                    </a>
                  </LI>
                  <LI attrLI={{ className: 'nav-item' }}>
                    <a href={Href}>
                      <span className='iconbg badge-light-danger'><Trash /></span>
                      <span className="title ms-2">Trash</span>
                    </a>
                  </LI>
                </UL>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
  )
}

export default Leftsideuser