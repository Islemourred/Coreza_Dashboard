import  { useContext } from 'react';
import { Image, LI, UL } from '../../../AbstractElements';
import ChatAppContext from '../../../Helper/chat-app';
import { dynamicImage } from '../../../Services';

const Tab1 = () => {
    const { allMemberss } = useContext(ChatAppContext);
    return (
            <div className="people-list">
                <UL attrUL={{ as: 'ul', className: 'simple-list list digits custom-scrollbar' }}>
                    {allMemberss.map((member, i) => {
                        return (
                            <LI attrLI={{ className: 'clearfix' }} key={i}>
                                <Image attrImage={{
                                    className: 'rounded-circle user-image'
                                    , src: dynamicImage(member.thumb), alt: ''
                                }} />
                                <div className="about">
                                    <div className="name">{member.name}</div>
                                    <div className="status">
                                        <i className={member.reply}></i>{member.time}
                                    </div>
                                </div>
                            </LI>
                        );
                    }
                    )}
                </UL>
            </div>
    );
};
export default Tab1;