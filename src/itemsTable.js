import React,{Component} from 'react';


class ItemsTable extends Component{
    render(){
        return(
            <div>
                <div className="itemtable">
                    <button onClick={this.props.toggleItemTable} class="btn btn-primary">ADD ITEM</button>
                    <h1>HELLOLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLll</h1>
                
                </div>
            </div>
        );
    }
}


export default ItemsTable;