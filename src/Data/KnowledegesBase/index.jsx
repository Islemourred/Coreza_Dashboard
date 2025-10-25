import React from 'react';
import { Aperture, BookOpen, FileText } from 'react-feather';

const Paras =
  'How little experience or technical knowledge you currently have. The web is a very big place, and if you are the typical internet user, you probably visit several websites every day.';

export const MainCardPara1 =
  'A Website Designing course enables learners to use essential designing and programming tools required to do the job. The curriculum is a blend of various themes.';
export const MainCardPara2 =
  'The customer support industry is renaissance. Customer support as a specialty is coming into its own, offering companies a competitive advantage that’s difficult to copy.';
  export const MainCardPara3 =
  'Knowledge can be defined as awareness of facts or as practical skills, and may also refer to familiarity with objects or situations. Knowledge of facts, also called propositional knowledge, is often defined as true belief that is distinct from opinion or guesswork by virtue of justification. While there is wide agreement among philosophers that it is a form of true belief, many controversies in philosophy focus on justification: whether it is needed at all, how to understand it, and whether something else besides it is needed.';
export const MainCardPara4 =
  'Knowledge can be produced in many different ways. The most important source is perception, which refers to the usage of the five senses. Many theorists also include introspection as a source of knowledge, not of external physical objects, but of ones own mental states. Other sources often discussed include memory, rational intuition, inference, and testimony. According to foundationalism, some of these sources are basic in the sense that they can justify beliefs without depending on other mental states. This claim is rejected by coherentists.';

export const ArticalsData = [
  {
    class: true,
    title: 'Articles',
    para: Paras,
    icon: <BookOpen />,
  },
  {
    class: false,
    title: 'Knowledgebase',
    para: MainCardPara1,
    icon: <Aperture />,
  },
  {
    class: false,
    title: 'Support',
    para: MainCardPara2,
    icon: <FileText />,
  },
];

export const DetailesSidebarData = [
  {
    id: 1,
    title1: 'UX Development',
    title2: 'Course By',
    title3: 'Development Team',
    date: '18',
    month: 'Dec',
  },
  {
    id: 2,
    title1: 'Business Analyst',
    title2: 'Course By',
    title3: 'Analyst Team.',
    date: '28',
    month: 'Oct',
  },
  {
    id: 3,
    title1: 'Web Development',
    title2: 'Course By',
    title3: 'Designer',
    date: '5',
    month: 'Jan',
  },
];
