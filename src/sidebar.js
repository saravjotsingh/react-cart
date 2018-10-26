import React,{Component} from 'react';

import './sidebar.css';


class SideBar extends Component{
    render(){
        return(
            <div>
                <div className="sidebar">
                    <div className="image text-center">
                        <img src="https://www.workingdreamers.com/platform/upload/files/125a2e7e38e281fe6af7e70a3eb61740b7c5299f.png" style={{height:'200px'}}></img>
                    </div>
                    <ul className="list-group">
                        <li><i class="fas fa-tachometer-alt"></i> DASHBOARD</li>
                        <li><i class="fas fa-edit"></i> EDIT ITEMS</li>
                        <li><i class="fas fa-plus-circle"></i> ADD ITEMS</li>
                        <li><i class="fas fa-user-alt"></i> PROFILE</li>
                        <li><i class="fas fa-sign-out-alt"></i> LOGOUT</li>
                    </ul>
                
                </div>
            </div>
        );
    }
}
    
export default SideBar;