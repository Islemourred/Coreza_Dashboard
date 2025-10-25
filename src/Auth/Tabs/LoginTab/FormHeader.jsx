import SocialAuth from './SocialAuth';

const FormHeader = (props) => {
    return (
        
            <div>
                <ul  className= 'simple-list login-social d-flex' >
                    <SocialAuth />
                </ul>
            </div>
    );
};
export default FormHeader;