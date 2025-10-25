import React from 'react';
import { AlertCircle, Clock, Folder, Home, Star, Trash2 } from 'react-feather';

export const SideButtons = [
  {
    id: 1,
    className: 'btn btn-primary',
    icon: <Home />,
    title: 'Home',
  },
  {
    id: 2,
    className: 'btn btn-light',
    icon: <Folder />,
    title: 'All',
  },
  {
    id: 3,
    className: 'btn btn-light',
    icon: <Clock />,
    title: 'Recent',
  },
  {
    id: 4,
    className: 'btn btn-light',
    icon: <Star />,
    title: 'Starred',
  },
  {
    id: 5,
    className: 'btn btn-light',
    icon: <AlertCircle />,
    title: 'Recovery',
  },
  {
    id: 6,
    className: 'btn btn-light',
    icon: <Trash2 />,
    title: 'Deleted',
  },
];


export const FileaccessData = [
  {
    id: 1,
    name: 'Videos',
    icon: <i className='fa fa-youtube-play font-danger'></i>
  },
  {
    id: 2,
    name: 'Apps',
    icon: <i className='fa fa-th font-info'></i>
  },
  {
    id: 3,
    name: 'Document',
    icon: <i className='fa fa-file-text-o font-secondary'></i>
  },
  {
    id: 4,
    name: 'Music',
    icon: <i className='fa fa-music font-warning'></i>
  },
  {
    id: 5,
    name: 'Download',
    icon: <i className='fa fa-download font-primary'></i>
  },
  {
    id: 6,
    name: 'Folder',
    icon: <i className='fa fa-folder font-info'></i>
  },
  {
    id: 7,
    name: 'Zip File',
    icon: <i className='fa fa-file-archive-o font-secondary'></i>
  },
  {
    id: 8,
    name: 'Trash',
    icon: <i className='fa fa-trash font-danger'></i>
  }
];