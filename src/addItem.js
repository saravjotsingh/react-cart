import React,{Component} from 'react';

import './addItem.css';

import Sidebar from './sidebar.js';
import ItemTable from './itemsTable.js';

import $ from 'jquery';

class AddItem extends Component{
    
        state = {
            blockImages:[],
            isItemTable:true
        }
    
        toggleItemTable=()=>{
            this.setState({isItemTable:!this.state.isItemTable});
        }
        
    addSizeBlock=()=>{
        const a = $("#itemSize").val();   
        $(".ItemSizesBlock").empty();
        for(let i=0;i<a;i++){
            $(".ItemSizesBlock").append(`
        <input type="text" class="form-control" style="margin-left:10px" placeholder="Enter Sizes"/>
`)}
}
    
    trigger=()=>{
        $('input[type=file]').trigger('click');
        $(".additemimage").css("display",'block');
    }
    
    
    fileChangedHandler = (event) => {
    var blockImages=[]  ;
        for(let i=0;i<event.target.files.length;i++){
        blockImages.push(event.target.files[i]);
    }
    this.setState({blockImages: blockImages});
      
    }
    render(){
        let images = this.state.blockImages;
        if(images.length>0){
            var Image = images.map((image,index)=>{
                var i  = URL.createObjectURL(image);
               
                    return (
                        <div className="col-sm-3">
                    <img src={i} className="item-image"/>
                </div> 
                    )   
        })    
        }else{
            var Image = <div className="text-center" style={{marginTop:'9%'}}>
                    <i onClick={this.trigger} class="fas fa-plus-square" style={{fontSize:'40px',cursor:'pointer'}}></i><p> CLICK TO ADD IMAGES   </p>
                </div>
        }
        
        return(
            <div>
                <Sidebar/>
                {this.state.isItemTable ?( <div className="addItem-block">
                    <div className="addItem-header text-center">
                        <h1>ADD ITEMS</h1>
                    </div>
                    <div className="addItem-form">
                        <div className="col-sm-3">
                         <div className="form-group">
                            <label for="itemno">ITEM NO:</label>
                            <input type="text" class="form-control" id="itemno" placeholder="Enter Item Number"/>
                        </div>
                    </div>
                    <div className="col-sm-3">
                         <div className="form-group">
                            <label for="itemname">ITEM NAME:</label>
                            <input type="text" class="form-control" id="itemno" placeholder="Enter Item Name"/>
                        </div>
                    </div>
                    <div className="col-sm-3">
                         <div className="form-group">
                            <label for="itemprice">ITEM PRICE:</label>
                            <input type="text" class="form-control" id="itemno" placeholder="Enter Item Price"/>
                        </div>
                    </div>
                    <div className="col-sm-3" >
                         <div className="form-group  additemimage">
                        <label>Replace Images :</label>
                        <label className="custom-file-upload">
                            <input style={{display:'none'}} type="file" onChange={this.fileChangedHandler} className="additem-image" multiple/>Select File
                        </label>
                        </div>
                    </div>
                    <div className="col-sm-12">
                         <div className="form-group">
                            <label for="itemdescription">ITEM DESCRIPTION:</label>
                            <input type="text" class="form-control" id="itemdes" placeholder="Enter Item description"/>
                        </div>
                    </div>    
                    <div className="col-sm-12">
                         <div className="form-group" >
                            <label for="itemsizes">NO OF SIZES:</label>
                            <div className="items" style={{display:"flex"}}>
                                <input onBlur={this.addSizeBlock} style={{width:'200px'}} type="text" className="form-control" id="itemSize" placeholder="Enter No. of Item Sizes"/>
                            <div className="ItemSizesBlock" style={{display:'flex'}}>
                                
                             </div>
                             </div>
                             
                        </div>
                    </div> 
                        <div className="col-sm-6">
                    <button className="btn btn-primary">UPLOAD</button>
                        <button onClick={this.toggleItemTable} className="btn btn-primary">SHOW ITEMS</button>
                    </div>  
                    </div>
                    <div className="imageblock cols-sm-12">
                        {Image}
                        </div>
                    
                </div>):(
                    <ItemTable toggleItemTable={this.toggleItemTable}/>
                )}
            </div>
        );
    }
}

export default AddItem;