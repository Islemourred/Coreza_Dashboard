import React, { Fragment } from 'react'
import { H5, UL, LI, H6, P } from '../../AbstractElements';
import { Files, Folders } from '../../Constant';

const Folderdata = ({ filelist}) => {
    return (
        <Fragment>
            <H5 attrH5={{ className: 'mt-4' }}>{Folders}</H5>
            <UL key={Folders} attrUL={{ className: 'simple-list folder' }}>
                {filelist?.map((item) => {
                    return (
                        <LI attrLI={{ className: 'folder-box' }} key={item.id}>
                            <div className='d-block'>
                                <i className={`${item.foldericon}`}></i>
                                <i className="fa fa-ellipsis-v me-0 f-14 ellips"></i>
                                <div className="mt-3">
                                    <H6>{item.title}</H6>
                                    <P>{item.files} <span className='pull-right'><i aria-hidden="true" className="fa fa-clock-o"></i>{item.time}</span></P>
                                </div>
                            </div>
                        </LI>
                    );
                })}
            </UL>
            <H5 attrH5={{ className: 'mt-4' }}>{Files}</H5>
            <UL key={Files} attrUL={{ className: 'simple-list d-flex flex-row files-content' }}>
                {
                    filelist?.map((item) => {
                        return (
                            <LI attrLI={{ className: 'folder-box d-flex align-items-center' }} key={item.id}>
                                <div className='d-flex align-items-center files-list'>
                                    <div className="flex-shrink-0 file-left"><i className={`${item.fileicon}`}></i></div>
                                    <div className='flex-grow-1 ms-3'>
                                        <H6 attrH5={{ className: 'mb-1' }}>{item.filename}</H6>
                                        <P>{item.time2}</P>
                                    </div>
                                </div>
                            </LI>
                        )
                    })
                }
            </UL>
        </Fragment>
    )
}

export default Folderdata
