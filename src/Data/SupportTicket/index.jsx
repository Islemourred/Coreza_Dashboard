import React from 'react';
import user from '../../assets/images/user/1.jpg';
import user2 from '../../assets/images/user/2.png';
import user3 from '../../assets/images/user/3.jpg';
import user4 from '../../assets/images/user/4.jpg';
import user5 from '../../assets/images/user/5.jpg';
import user6 from '../../assets/images/user/6.jpg';
import user7 from '../../assets/images/user/7.jpg';
import user8 from '../../assets/images/user/8.jpg';
import user9 from '../../assets/images/user/9.jpg';
import user10 from '../../assets/images/user/10.jpg';
import user11 from '../../assets/images/user/11.png';
import user12 from '../../assets/images/user/12.png';
import { Media } from 'reactstrap';
import { Image } from '../../AbstractElements';

export const supportData = [
  {
    image: (
      <div className='d-flex'>
        <Image
          attrImage={{
            className: 'rounded-circle img-30 me-3',
            src: `${user}`,
            alt: 'Generic placeholder image',
          }}
        />
        <Media body className="align-self-center">
          <div>Airi Satou</div>
        </Media>
      </div>
    ),
    position: 'System Architect',
    salary: '$320,800',
    office: 'Edinburgh',
    skill: (
      <div className="progress-showcase">
        <div className="progress sm-progress-bar">
          <div
            className="progress-bar custom-progress-width bg-primary"
            style={{ width: '80%' }}
            role="progressbar"
            aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"
          ></div>
        </div>
      </div>
    ),
    extn: 5421,
    exp: '3 Year',
    email: 't.nixon@datatables.net',
    action: <i className="icofont icofont-close-circled font-danger ps-2 f-16"></i>
  },

  {
    image: (
      <div className='d-flex'>
        <Image
          attrImage={{
            className: 'rounded-circle img-30 me-3',
            src: `${user3}`,
            alt: 'Generic placeholder image',
          }}
        />
        <Media body className="align-self-center">
          <div>Ashton Cox</div>
        </Media>
      </div>
    ),
    position: 'Junior Technical Author',
    salary: '$86,000',
    office: 'San Francisco',
    skill: (
      <div className="progress-showcase">
        <div className="progress sm-progress-bar">
          <div
            className="progress-bar custom-progress-width bg-danger"
            role="progressbar"
            style={{ width: '50%' }}
          ></div>
        </div>
      </div>
    ),
    extn: 1562,
    exp: '1 Year',
    email: 'a.cox@datatables.net',
    action: <i className="icofont icofont-close-circled font-danger ps-2 f-16"></i>
  },

  {
    image: (
      <div className='d-flex'>
        <Image
          attrImage={{
            className: 'rounded-circle img-30 me-3',
            src: `${user4}`,
            alt: 'Generic placeholder image',
          }}
        />
        <Media body className="align-self-center">
          <div>Bradley Greer</div>
        </Media>
      </div>
    ),
    position: 'Software Engineer',
    salary: '$132,000',
    office: 'London',
    skill: (
      <div className="progress-showcase">
        <div className="progress sm-progress-bar">
          <div
            className="progress-bar custom-progress-width bg-info"
            style={{ width: '60%' }}
            role="progressbar"
          ></div>
        </div>
      </div>
    ),
    extn: 2558,
    exp: '2 Year',
    email: 'b.greer@datatables.net',
    action: <i className="icofont icofont-close-circled font-danger ps-2 f-16"></i>
  },

  {
    image: (
      <div className='d-flex'>
        <Image
          attrImage={{
            className: 'rounded-circle img-30 me-3',
            src: `${user5}`,
            alt: 'Generic placeholder image',
          }}
        />
        <Media body className="align-self-center">
          <div>Brielle Williamson</div>
        </Media>
      </div>
    ),
    position: 'Integration Specialist',
    salary: '$372,000',
    office: 'New York',
    skill: (
      <div className="progress-showcase">
        <div className="progress sm-progress-bar">
          <div
            className="progress-bar custom-progress-width bg-primary"
            role="progressbar"
            style={{ width: '70%' }}
          ></div>
        </div>
      </div>
    ),
    extn: 4804,
    exp: '2 Year',
    email: 'b.williamson@datatables.net',
    action: <i className="icofont icofont-close-circled font-danger ps-2 f-16"></i>
  },

  {
    image: (
      <div className='d-flex'>
        <Image
          attrImage={{
            className: 'rounded-circle img-30 me-3',
            src: `${user6}`,
            alt: 'Generic placeholder image',
          }}
        />
        <Media body className="align-self-center">
          <div>Caesar Vance</div>
        </Media>
      </div>
    ),
    position: 'Pre-Sales Support',
    salary: '$106,450',
    office: 'New York',
    skill: (
      <div className="progress-showcase">
        <div className="progress sm-progress-bar">
          <div
            className="progress-bar custom-progress-width bg-warning"
            role="progressbar"
            style={{ width: '20%' }}
          ></div>
        </div>
      </div>
    ),
    extn: 8330,
    exp: '3 Year',
    email: 'c.vance@datatables.net',
    action: <i className="icofont icofont-close-circled font-danger ps-2 f-16"></i>
  },

  {
    image: (
      <div className='d-flex'>
        <Image
          attrImage={{
            className: 'rounded-circle img-30 me-3',
            src: `${user7}`,
            alt: 'Generic placeholder image',
          }}
        />
        <Media body className="align-self-center">
          <div>Cedric Kelly</div>
        </Media>
      </div>
    ),
    position: 'Junior Technical Author',
    salary: '$86,000',
    office: 'San Francisco',
    skill: (
      <div className="progress-showcase">
        <div className="progress sm-progress-bar">
          <div
            className="progress-bar custom-progress-width bg-info"
            role="progressbar"
            style={{ width: '10%' }}
          ></div>
        </div>
      </div>
    ),
    extn: 1562,
    exp: '3 Year',
    email: 'a.cox@datatables.net',
    action: <i className="icofont icofont-close-circled font-danger ps-2 f-16"></i>
  },

  {
    image: (
      <div className='d-flex'>
        <Image
          attrImage={{
            className: 'rounded-circle img-30 me-3',
            src: `${user8}`,
            alt: 'Generic placeholder image',
          }}
        />
        <Media body className="align-self-center">
          <div>Charde Marshall</div>
        </Media>
      </div>
    ),
    position: 'Senior Javascript Developer',
    salary: '$433,060',
    office: 'San Francisco',
    skill: (
      <div className="progress-showcase">
        <div className="progress sm-progress-bar">
          <div
            className="progress-bar custom-progress-width bg-secondary"
            style={{ width: '90%' }}
            role="progressbar"
          ></div>
        </div>
      </div>
    ),
    extn: 6224,
    exp: '2 Year',
    email: 'c.kelly@datatables.net',
    action: <i className="icofont icofont-close-circled font-danger ps-2 f-16"></i>
  },

  {
    image: (
      <div className='d-flex'>
        <Image
          attrImage={{
            className: 'rounded-circle img-30 me-3',
            src: `${user9}`,
            alt: 'Generic placeholder image',
          }}
        />
        <Media body className="align-self-center">
          <div>Colleen Hurst</div>
        </Media>
      </div>
    ),
    position: 'Senior Javascript Developer',
    salary: '$433,060',
    office: 'San Francisco',
    skill: (
      <div className="progress-showcase">
        <div className="progress sm-progress-bar">
          <div
            className="progress-bar custom-progress-width bg-info"
            role="progressbar"
            style={{ width: '60%' }}
          ></div>
        </div>
      </div>
    ),
    extn: 6224,
    exp: '3 Year',
    email: 'c.kelly@datatables.net',
    action: <i className="icofont icofont-close-circled font-danger ps-2 f-16"></i>
  },

  {
    image: (
      <div className='d-flex'>
        <Image
          attrImage={{
            className: 'rounded-circle img-30 me-3',
            src: `${user10}`,
            alt: 'Generic placeholder image',
          }}
        />
        <Media body className="align-self-center">
          <div>Dai Rios</div>
        </Media>
      </div>
    ),
    position: 'Accountant',
    salary: '$162,700',
    office: 'Tokyo',
    skill: (
      <div className="progress-showcase">
        <div className="progress sm-progress-bar">
          <div
            className="progress-bar custom-progress-width bg-success"
            role="progressbar"
            style={{ width: '50%' }}
          ></div>
        </div>
      </div>
    ),
    extn: 5407,
    exp: '2 Year',
    email: 'a.satou@datatables.net',
    action: <i className="icofont icofont-close-circled font-danger ps-2 f-16"></i>
  },

  {
    image: (
      <div className='d-flex' >
        <Image
          attrImage={{
            className: 'rounded-circle img-30 me-3',
            src: `${user11}`,
            alt: 'Generic placeholder image',
          }}
        />
        <Media body className="align-self-center">
          <div>Garrett Winters</div>
        </Media>
      </div>
    ),
    position: 'Integration Specialist',
    salary: '$372,000',
    office: 'New York',
    skill: (
      <div className="progress-showcase">
        <div className="progress sm-progress-bar">
          <div
            className="progress-bar custom-progress-width bg-info"
            role="progressbar"
            style={{ width: '40%' }}
          ></div>
        </div>
      </div>
    ),
    extn: 4804,
    exp: '2 Year',
    email: 'b.williamson@datatables.net',
    action: <i className="icofont icofont-close-circled font-danger ps-2 f-16"></i>
  },

  {
    image: (
      <div className='d-flex'>
        <Image
          attrImage={{
            className: 'rounded-circle img-30 me-3',
            src: `${user12}`,
            alt: 'Generic placeholder image',
          }}
        />
        <Media body className="align-self-center">
          <div>Tiger Nixon</div>
        </Media>
      </div>
    ),
    position: 'Sales Assistant',
    salary: '$137,500',
    office: 'San Francisco',
    skill: (
      <div className="progress-showcase">
        <div className="progress sm-progress-bar">
          <div
            className="progress-bar custom-progress-width bg-warning"
            style={{ width: '60%' }}
            role="progressbar"
          ></div>
        </div>
      </div>
    ),
    extn: 9608,
    exp: '1 Year',
    email: 'h.chandler@datatables.net',
    action: <i className="icofont icofont-close-circled font-danger ps-2 f-16"></i>
  },

  {
    image: (
      <div className='d-flex'>
        <Image
          attrImage={{
            className: 'rounded-circle img-30 me-3',
            src: `${user}`,
            alt: 'Generic placeholder image',
          }}
        />
        <Media body className="align-self-center">
          <div>Tiger Nixon</div>
        </Media>
      </div>
    ),
    position: 'Integration Specialist',
    salary: '$327,900',
    office: 'Tokyo',
    skill: (
      <div className="progress-showcase">
        <div className="progress sm-progress-bar">
          <div
            className="progress-bar custom-progress-width bg-primary"
            style={{ width: '80%' }}
            role="progressbar"
          ></div>
        </div>
      </div>
    ),
    extn: 6200,
    exp: '3 Year',
    email: 'r.davidson@datatables.net',
    action: <i className="icofont icofont-close-circled font-danger ps-2 f-16"></i>
  },

  {
    image: (
      <Media className='d-flex'>
        <Image
          attrImage={{
            className: 'rounded-circle img-30 me-3',
            src: `${user3}`,
            alt: 'Generic placeholder image',
          }}
        />
        <Media body className="align-self-center flex-grow-1">
          <div>Tiger Nixon</div>
        </Media>
      </Media>
    ),
    position: 'Javascript Developer',
    salary: '$205,500',
    office: 'San Francisco',
    skill: (
      <div className="progress-showcase">
        <div className="progress sm-progress-bar">
          <div
            className="progress-bar custom-progress-width bg-success"
            role="progressbar"
            style={{ width: '50%' }}
          ></div>
        </div>
      </div>
    ),
    extn: 2360,
    exp: '3 Year',
    email: 'c.hurst@datatables.net',
    action: <i className="icofont icofont-close-circled font-danger ps-2 f-16"></i>
  },

  {
    image: (
      <div className='d-flex'>
        <Image
          attrImage={{
            className: 'rounded-circle img-30 me-3',
            src: `${user5}`,
            alt: 'Generic placeholder image',
          }}
        />
        <Media body className="align-self-center">
          <div>Tiger Nixon</div>
        </Media>
      </div>
    ),
    position: 'Software Engineer',
    salary: '$103,600',
    office: 'Edinburgh',
    skill: (
      <div className="progress-showcase">
        <div className="progress sm-progress-bar">
          <div
            className="progress-bar custom-progress-width bg-primary"
            role="progressbar"
            style={{ width: '35%' }}
          ></div>
        </div>
      </div>
    ),
    extn: 1667,
    exp: '3 Year',
    email: 's.frost@datatables.net',
    action: <i className="icofont icofont-close-circled font-danger ps-2 f-16"></i>
  },

  {
    image: (
      <div className='d-flex'>
        <Image
          attrImage={{
            className: 'rounded-circle img-30 me-3',
            src: `${user6}`,
            alt: 'Generic placeholder image',
          }}
        />
        <Media body className="align-self-center">
          <div>Tiger Nixon</div>
        </Media>
      </div>
    ),
    position: 'Office Manager',
    salary: '$90,560',
    office: 'London',
    skill: (
      <div className="progress-showcase">
        <div className="progress sm-progress-bar">
          <div
            className="progress-bar custom-progress-width bg-warning"
            role="progressbar"
            style={{ width: '55%' }}
          ></div>
        </div>
      </div>
    ),
    extn: 3814,
    exp: '1 Year',
    email: 'j.gaines@datatables.net',
    action: <i className="icofont icofont-close-circled font-danger ps-2 f-16"></i>
  },

  {
    image: (
      <div className='d-flex'>
        <Image
          attrImage={{
            className: 'rounded-circle img-30 me-3',
            src: `${user2}`,
            alt: 'Generic placeholder image',
          }}
        />
        <Media body className="align-self-center">
          <div>Tiger Nixon</div>
        </Media>
      </div>
    ),
    position: 'Support Lead',
    salary: '$342,000',
    office: 'Edinburgh',
    skill: (
      <div className="progress-showcase">
        <div className="progress sm-progress-bar">
          <div
            className="progress-bar custom-progress-width bg-danger"
            role="progressbar"
            style={{ width: '93%' }}
          ></div>
        </div>
      </div>
    ),
    extn: 9497,
    exp: '3 Year',
    email: 'q.flynn@datatables.net',
    action: <i className="icofont icofont-close-circled font-danger ps-2 f-16"></i>
  },
];

export const supportColumns = [
  {
    name: 'Name',
    selector: (row) => row['image'],
    sortable: true,
    center: true,
  },
  {
    name: 'Position',
    selector: (row) => row['position'],
    sortable: true,
    center: true,
  },
  {
    name: 'Salary',
    selector: (row) => row['salary'],
    sortable: true,
    center: true,
  },
  {
    name: 'Office',
    selector: (row) => row['office'],
    sortable: true,
    center: true,
  },
  {
    name: 'Skill',
    selector: (row) => row['skill'],
    sortable: true,
    center: true,
  },
  {
    name: 'Extn',
    selector: (row) => row['extn'],
    sortable: true,
    center: true,
  },
  {
    name: 'Experience',
    selector: (row) => row['exp'],
    sortable: true,
    center: true,
  },
  {
    name: 'Email',
    selector: (row) => row['email'],
    sortable: true,
    center: true,
  },
  {
    name: 'Action',
    selector: (row) => row['action'],
    sortable: true,
    center: true,
  },
];

export const TickitData = [
  {
    id: 1,
    title: 'Order',
    num: '2563',
    class: 'progress-bar bg-primary',
  },
  {
    id: 2,
    title: 'Pending',
    num: '8943',
    class: 'progress-bar bg-secondary',
  },
  {
    id: 3,
    title: 'Running',
    num: '2500',
    class: 'progress-bar bg-warning',
  },
  {
    id: 4,
    title: 'Smooth',
    num: '2060',
    class: 'progress-bar bg-info',
  },
  {
    id: 5,
    title: 'Done',
    num: '5600',
    class: 'progress-bar bg-success',
  },
  {
    id: 6,
    title: 'Cancel',
    num: '2560',
    class: 'progress-bar bg-danger',
  },
];
