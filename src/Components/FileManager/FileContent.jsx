import React, { Fragment, useEffect, useState } from 'react';
import { PlusSquare, Upload } from 'react-feather';
import { H6, LI, UL, H5 } from '../../AbstractElements';
import { CardBody, CardHeader, Form, Input } from 'reactstrap';
import SearchBar from './SearchBar';
import { AddNew, QuickAccess } from '../../Constant';
import { FileaccessData } from '../../Data/FileManager/index ';
import axios from 'axios';
import { toast } from 'react-toastify';
import Folderdata from './Folderdata';

const FileContent = () => {
  const [selectedFiles, setSelectedFiles] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [myfiles, setMyfiles] = useState([])

  useEffect(() => {
    axios.get(`${process.env.PUBLIC_URL}/api/files.json`).then((resp) => {
      setMyfiles(resp.data);
    })
  }, [setMyfiles])

  const filelist = myfiles.filter((data) => {
    if (searchTerm === null)
      return data;
    else if (data.title.toLowerCase().includes(searchTerm.toLowerCase())) {
      return data;
    } else return data;

  })
  const getFile = () => {
    document.getElementById('upfile').click();
  }
  const onFileChange = (event) => {
    setSelectedFiles(event.target.files[0]);
  }
  const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const onFileUpload = () => {
    let files = [...myfiles];
    let date = new Date();
    if (selectedFiles !== null) {
      files.push({
        id: files.length + 1,
        title: selectedFiles.name,
        files: `${selectedFiles.size}`,
        time: ` ${date?.getDate() + ' ' + month[date?.getMonth()]} `,
        time2: `${date?.getDate() + ' ' + month[date?.getMonth()]}`,
        filename: selectedFiles.name,
        foldericon: 'f-44 fa fa-file-archive-o txt-warning',
        fileicon: 'f-22 fa fa-file-text-o txt-info'
      })
      setMyfiles(files);
      toast.success('File Upload Successfully !');
    } else toast.error('Plese Select at least one file !');
  }

  return (
    <Fragment>
      <CardHeader>
        <div className='d-md-flex d-sm-block'>
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <div className="flex-grow-1 text-end">
            <Form className="d-inline-flex">
              <div className="btn btn-primary" onClick={getFile}><PlusSquare />{AddNew}</div>
              <div style={{ height: '0px', width: '0px', overflow: 'hidden' }}>
                <Input id="upfile" multiple type="file" onChange={(e) => { onFileChange(e) }} /></div>
            </Form>
            <div className="btn btn-outline-primary ms-3" onClick={onFileUpload}><Upload />{'Upload'}</div>
          </div>
        </div>
      </CardHeader>
      <CardBody className="file-manager">
        <H5>{QuickAccess}</H5>
        <UL key={QuickAccess} attrUL={{ className: 'quick-file d-flex flex-row simple-list' }}>
          {FileaccessData.map((item) => {
            return (
              <LI attrLI={{ className: 'list' }} key={item.id}>
                <div className="quick-box">{item.icon}</div>
                <H6>{item.name}</H6>
              </LI>
            )
          })}
        </UL>
        <Folderdata filelist={filelist} />
      </CardBody>
    </Fragment>
  );
};
export default FileContent;