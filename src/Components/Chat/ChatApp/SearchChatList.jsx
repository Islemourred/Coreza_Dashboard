import React, { Fragment, useContext, useState } from 'react';
import { Form, FormGroup, Input } from 'reactstrap';
import ChatAppContext from '../../../Helper/chat-app/index';

const SearchChatList = () => {
  const { searchMember } = useContext(ChatAppContext);
  const [searchKeyword, setSearchKeyword] = useState('');
  const handleSearchKeyword = (keyword) => {
    setSearchKeyword(keyword);
    searchMember(keyword);
  };
  return (
    <Fragment>
      <div className="search">
        <Form className="theme-form">
          <FormGroup>
            <div className='input-group'>
              <Input
                type="text"
                placeholder="search"
                defaultValue={searchKeyword}
                onChange={(e) =>
                  handleSearchKeyword(e.target.value)
                }
              />
              <span className='input-group-text'><i className="fa fa-search"></i></span>
            </div>
          </FormGroup>
        </Form>
      </div>
    </Fragment>
  );
};

export default SearchChatList;