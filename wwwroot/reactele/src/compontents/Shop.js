import React, { Component } from 'react';

import { Link } from "react-router-dom";
import '../assets/css/shop.css'
import storage from '../modle/storage'
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroller';
// import '../assets/css/indexxxxx.css'

class Shop extends Component{
    constructor(props){
        super(props);
    
        this.state={
            msg:'shop',
            list:[],
            flag:false,
            shoplist:[],
            hasMore:true,
            page:1
        
        }
    }
    render(){

                var datas= this.state.shoplist.map((val,key)=>{   //没有搜索直接显示的商家
                    return(
                        <li key={'index'+key}>
                                <img src={val.pic} alt="" />
                                <div className="titlem">
                                    
                                    <h3> <Link to={`/groupBuying_detail/${val._id}`}>{val.name}</Link></h3>
                                    <i className="iconfont star">&#xe602;</i><i className="iconfont star">&#xe602;</i><i className="iconfont star">&#xe602;</i><i className="iconfont star">&#xe602;</i><span className="reds">　{val.rating}</span>
                                    <span>　月售<span>{val.distance}</span>单</span>	
                                    <p>{val.float_minimum_order_amount}元起送|配送费￥<span>{val.float_delivery_fee}</span>|￥<span>{val.order_lead_time}</span>人</p>
                                
                                    <hr />
                                    {val.activities.map((tag,key)=>{   //数组里面的对象  嵌套循环
                                    
                                    return (<span key={key}>
                                        <div><i className="iconfont green">&#xe603;</i>{tag.name}</div>
                                    <div><i className="iconfont pink">&#xe600;</i>{tag.tips}</div>
                                    </span>)
                                    })}
                                    
                                

                                </div>
                                    <i className="iconfont succe">&#xe62d;</i>
                
                        </li>

                    )
                })


               var serchlist=this.state.list.map((val,i)=>{    //前面搜索返回的商家
                return (<li key={i}>
                <img src={val.pic} alt="" />
                <div className="titlem">
                    

                    <h3> <Link to={`/groupBuying_detail/${val._id}`}>{val.name}</Link></h3>
                    <i className="iconfont star">&#xe602;</i><i className="iconfont star">&#xe602;</i><i className="iconfont star">&#xe602;</i><i className="iconfont star">&#xe602;</i><span className="reds"> {val.rating}</span>
                    <span>月售<span>{val.distance}</span>单</span>	
                    <p>30起送|配送费{val.float_delivery_fee}￥|￥<span>52</span>人</p>
                    <hr />
                    <p><i className="iconfont green">&#xe603;</i>　新用户下单减17元</p>
                    <p><i className="iconfont pink">&#xe600;</i>　新用户下单减17元</p>

                </div>
                <i className="iconfont succe">&#xe62d;</i>
                
                </li>)

               })


               var show=this.state.flag?serchlist.concat(datas):datas    //判断有没有值显示哪个模块



        return(
            <div className="shops">   
                <header className="header">
                <i className="iconfont glass">&#xe617;</i>
                <input type="text" placeholder="　　　搜索商家、商品名称" />
            </header>

       <div className="shoplist add" id="shoplist">
            <ul>
                  <h3>推荐商家</h3>
                   <InfiniteScroll
                            pageStart={0}
                            loadMore={this.loadMore}  
                            hasMore={this.state.hasMore} 
                            loader={<div className="loader" key={0}>加载中 ...</div>} 
                            >
                            {show}   
                    </InfiniteScroll>     

            </ul>
        
        </div>
        
        
               <footer id="footer">
                <Link to="/" className="active">
                            <i className="iconfont sale">&#xe609;</i>外卖</Link>
                 <Link to="/discovery">
                            <i className="iconfont">&#xe711;</i>发现</Link>
                   <Link to="/booklist">
                            <i className="iconfont">&#xe612;</i>订单</Link>
                   <Link to="/user">
                        <i className="iconfont">&#xe629;</i>我的</Link>

                </footer>
            </div>
        )

    }
    loadMore=()=>{
        this.getshopdata()
    }
    getshopdata=()=>{
        var api="http://127.0.0.1:2010/api/shop"

        axios.get(api).then((response)=> {

             console.log(response.data.result);
            var shoplist=this.state.shoplist.concat(response.data.result)

            if(response.data.result>10&&response.data.result==30){

               
                this.setState({

                    shoplist:response.data.result,
                    hasMore:false
                })


            }else{
                this.setState({
                    shoplist:shoplist,
                    page:++this.state.page
                })
            }

            
           
        })
        
    }
    componentDidMount(){
        var shopinfo=storage.get('datashops')
        console.log(shopinfo)
        if(shopinfo){
            this.setState({
                list:shopinfo,
                flag:true

            })
        }else{
            this.setState({
                flag:false
            })
        }

    }

}

export default Shop;