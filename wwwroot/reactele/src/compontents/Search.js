import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import '../assets/css/search.css'
import axios from 'axios';
import storage from '../modle/storage'

class Search extends Component{
    constructor(props){
        super(props);
    
        this.state={
            msg:'订单',
            shopname:[],
            infoValue:"　　　搜索商家、商品名称",
            glasss:true,
            foods:false,
            hotfoods:false,
            arr3:[],
            info:[],
            flag:false,
            infos:[]
                       
        }
    }
    render(){
        var show=this.state.glasss?<i className="iconfont glass" >&#xe617;</i>:''

        var food=this.state.foods? this.state.infos.map((val,key)=>{
                return <li key={key}><a href="">{val}</a></li> 
                }):''

        var hotfood=this.state.hotfoods?this.state.arr3.map((val,key)=>{
            return <li key={key}><a href="">{val}</a></li> 
            }):<li><a href="">周黑鸭</a></li>

        return(
            <div className="searchs">   
                <header className="search">
                <Link to="/" className="iconfont turn">&#xe64e;</Link>
                    {show}
                    <input type="text" placeholder={this.state.infoValue} onChange={this.searchdata}/>
                    <Link to ="/shop" className="sear" onClick={this.getdata} home={this.state.msg}>搜索</Link>
                        {/* <span className="sear" onClick={this.getdata}>搜索</span> */}
                </header>
                <main className="main">
                    <span>历史搜索</span><i className="iconfont del" onClick={this.searchdata}>&#xe838;</i>
                    <ul className="todolist">
                            
                     {food}
                    </ul>
                    <br />
                    <span>热门搜索</span><i className="iconfont del" onClick={this.searchdata}>&#xe838;</i>
                    <ul className="todolist">
                       {hotfood}
                       
                    </ul>
                </main>


               
            </div>

                  
        )

    }
    searchdata=(e)=>{

            this.setState({             
                infoValue:e.target.value,
                glasss:false,
                foods:false,
                hotfoods:false                         
        })
        // this.removedata()
       
    }
    // removedata=()=>{
    //     storage.remove('shopinfo')
    // }
    getdata=()=>{
        
        var str=storage.get('shopinfo')
            console.log(str)
        
    if(!str){
        var value=this.state.info;
        value.push(this.state.infoValue);

        this.setState({
            infos:[...new Set(value)]
        })
        // value = [...new Set(value)]
        console.log(this.state.infos)

        storage.set('shopinfo',this.state.infos)

      } 
      else{
        str.push(this.state.infoValue)
        storage.set('shopinfo',str)
    }

        var api="http://127.0.0.1:2010/api/searchshop?userinfo="+this.state.infoValue
        axios.get(api).then((response)=> {

            console.log(response.data.result);
            var datashop=response.data.result;

            storage.set('datashops',datashop)
                       
            this.setState({
                shopname:response.data.result,
                // info:this.state.info,
                foods:true,
                hotfoods:true,
                // arr3:JSON.parse(localStorage.getItem('shopinfo'))
            })
           
        })
       
    }

    componentDidMount(){
        var str=storage.get('shopinfo')
        console.log(str)
        if(str){
            this.setState({
                arr3:str,
                flag:true,
                infos:str,
                hotfoods:true,
                foods:true
            })
        }else{
            flag:false
        }


}

}

export default Search;