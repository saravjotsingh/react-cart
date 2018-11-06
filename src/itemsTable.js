import React,{Component} from 'react';

const datas = [{
    price:'100',
    name:'abc',
    des:'aaaa',
    size:'aa',
},{
    price:'100',
    name:'abc',
    des:'aaaa',
    size:'aa',
},{
    price:'100',
    name:'abc',
    des:'aaaa',
    size:'aa',
}]

class ItemsTable extends Component{
    
    render(){
        
    var ITEMS = datas.map((data,i)=>{
        return(
             <tr>
                <th scope="row">{i+1}</th>
                  <td>{data.name}</td>
                  <td>{data.price}</td>
                  <td>{data.des}</td>
                <td>{data.size}</td>
                <td> <div class="dropdown">
    <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">
    <span class="caret"></span></button>
    <ul className="list-group dropdown-menu">
      <li className="list-group-item">DELETE</li>
      <li className="list-group-item">EDIT</li>
      
    </ul>
  </div></td>
    </tr>
        );
    })
        return(
            <div>
                <div className="itemtable">
                    <button onClick={this.props.toggleItemTable} class="btn btn-primary"><i class="fas fa-arrow-left"></i></button>
                    <table className="table table-hover itemsTable">
                        <thead>
                            <tr>
                                <th scope="col">S.No</th>
                                <th scope="col">ITEM NAME</th>
                                <th scope="col">ITEM PRICE</th>
                                <th scope="col">ITEM DES</th>
                                <th scope="col">ITEM SIZES</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                        {ITEMS}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}


export default ItemsTable;