import {
  Articles,
  Knowledgebase,
  AskOurCommunity,
  Tutorials,
  HelpCenter,
  ContactUs,
  VideoTutorials,
  VictoriaWilson,
} from '../../Constant';
import React from 'react';
import {
  Edit,
  Globe,
  BookOpen,
  FileText,
  Youtube,
  MessageCircle,
  Mail,
  RotateCcw,
  DollarSign,
  Check,
  Link,
  Codepen,
} from 'react-feather';

export const ASKQUESData = [
  {
    icon: <Edit />,
    title: Tutorials,
  },
  {
    icon: <Globe />,
    title: HelpCenter,
  },
  {
    icon: <BookOpen />,
    title: Knowledgebase,
  },
  {
    icon: <FileText />,
    title: Articles,
    className: 'badge badge-primary rounded-pill pull-right',
    val: '42',
  },
  {
    icon: <Youtube />,
    title: VideoTutorials,
    className: 'badge badge-primary rounded-pill pull-right',
    val: '642',
  },
  {
    icon: <MessageCircle />,
    title: AskOurCommunity,
  },
  {
    icon: <Mail />,
    title: ContactUs,
  },
];

export const LatestData = [
  {
    Iconclass: <RotateCcw className="font-primary" />,
    val: 'David Linner',
    title: 'requested money back for a double debit card charge',
    time: '10 minutes ago',
  },
  {
    Iconclass: <DollarSign className="font-primary" />,
    title: 'All sellers have received monthly payouts',
    time: '2 hours ago',
  },
  {
    Iconclass: <Link className="font-primary" />,
    name: 'User Christopher ',
    val: 'Wallace',
    title: 'is on hold and awaiting for staff reply',
    time: '45 minutes ago',
  },
  {
    Iconclass: <Check className="font-primary" />,
    val: VictoriaWilson,
    title: 'Ticket #43683 has been closed by',
    time: 'Dec 7, 11:48',
  },
];

export const ArticeVideoData1 = [
  {
    IconClass: <Codepen className="m-r-30 flex-shrink-0" />,
    title: 'Article Base Video',
    discription:
      'The web is a very big place, and if you are the typical internet user.',
  },
  {
    IconClass: <Codepen className="m-r-30 flex-shrink-0" />,
    title: 'Knows your sources',
    discription:
      'A book giving information on many subjects or on many aspects of one subject.',
  },
  {
    IconClass: <Codepen className="m-r-30 flex-shrink-0" />,
    title: 'Sources credible/reliable',
    discription:
      'Simple demos of frequently asked questions about using the information resources.',
  },
];

export const ArticeVideoData2 = [
  {
    id: 1,
    IconClass: <FileText className="m-r-30 flex-shrink-0" />,
    title: 'Validate website',
    discription:
      'Website is the process of ensuring that the pages on the website conform.',
  },
  {
    id: 2,
    IconClass: <FileText className="m-r-30 flex-shrink-0" />,
    title: 'Tailwind Design',
    discription:
      'Tailwind is so low-level, it never encourages you to design the same site twice.',
  },
  {
    id: 3,
    IconClass: <FileText className="m-r-30 flex-shrink-0" />,
    title: 'Knows your sources',
    discription:
      'A book giving information on many subjects or on many aspects of one subject.',
  },
];

export const ArticeVideoData3 = [
  {
    IconClass: <Youtube className="m-r-30 flex-shrink-0" />,
    title: 'Sources Demos',
    discription:
      'Simple demos of frequently asked questions about using the information resources',
  },
  {
    IconClass: <Youtube className="m-r-30 flex-shrink-0" />,
    title: 'Validate Html',
    discription:
      'Website is the process of ensuring that the pages on the website conform.',
  },
  {
    IconClass: <Youtube className="m-r-30 flex-shrink-0" />,
    title: 'Web Design',
    discription:
      'Web is so high-level, it never encourages you to design the same site twice',
  },
];

const para =
  'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.';

export const Titles1 = [
  {
    id: 0,
    title: 'Integrating WordPress with Your Website?',
    para: para,
  },
  {
    id: 1,
    title: 'WordPress Site Maintenance ?',
    para: para,
  },
  {
    id: 2,
    title: 'Meta Tags in WordPress ?',
    para: para,
  },
  {
    id: 3,
    title: 'WordPress in Your Language ',
    para: para,
  },
];

export const Titless2 = [
  {
    id: 1,
    title: 'WordPress Site Maintenance ?',
    para: para,
  },
  {
    id: 2,
    title: ' WordPress in Your Language ?',
    para: para,
  },
  {
    id: 3,
    title: 'Integrating WordPress with Your Website',
    para: para,
  },
];

export const Titles3 = [
  {
    id: 1,
    title: 'WordPress Site Maintenance ?',
    para: para,
  },
  {
    id: 2,
    title: 'Meta Tags in WordPress ?',
    para: para,
  },
  {
    id: 3,
    title: 'Validating a Website ?',
    para: para,
  },
  {
    id: 4,
    title: 'Know Your Sources ',
    para: para,
  },
];

export const Titles4 = [
  {
    id: 1,
    title: 'Integrating WordPress with Your Website ?',
    para: para,
  },
  {
    id: 2,
    title: 'WordPress Site Maintenance ?',
    para: para,
  },
  {
    id: 3,
    title: ' WordPress in Your Language ?',
    para: para,
  },
  {
    id: 4,
    title: ' Validating a Website ?',
    para: para,
  },
  {
    id: 5,
    title: ' Meta Tags in WordPress ',
    para: para,
  },
];
