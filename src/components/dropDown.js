import React, { useState } from 'react';
import { 
    Dropdown, 
    DropdownToggle, 
    DropdownMenu, 
    DropdownItem 
} from 'reactstrap';

const DropDown = (props) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    
    

    const statusChange = (e) => {
      const taskStatus = e.target.value
      props.filterTaskStatus(taskStatus);
    }
  
    const toggle = () => setDropdownOpen(prevState => !prevState);
  
    return (
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle caret>
          View
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>What do you want to do?</DropdownItem>
          <DropdownItem divider />
          <DropdownItem value="All" onClick={statusChange}>View All Tasks</DropdownItem>
          <DropdownItem value="Completed" onClick={statusChange}>View Completed Tasks</DropdownItem>
          <DropdownItem value="Not Completed" onClick={statusChange}>View Non-Completed Tasks</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }

export default DropDown;