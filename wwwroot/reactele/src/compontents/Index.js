import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import {Carousel} from 'element-react';
import InfiniteScroll from 'react-infinite-scroller';

import {Link } from "react-router-dom";
import axios from 'axios';
import img01 from '../assets/img/01.jpg'
import img02 from '../assets/img/02.jpg'
import img03 from '../assets/img/03.jpg'
import img04 from '../assets/img/04.jpg'
import bg01 from '../assets/img/01bg_02.jpg'

import '../assets/css/indexxxxx.css'

class Index extends Component{
    constructor(props){
        super(props);
    
        this.state={
            msg:'我是首页',
            shoplist:[],
            hasMore:true,
            page:1
            
        }


    }
    render(){

                 var items=[<ul className="clear">
                                    <li>
                                        <a href="">
                                            <img src={img01} alt=""/> 美食1
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <img src={img04} alt=""/> 美食
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <img src={img03} alt=""/> 美食
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <img src={img02} alt=""/> 美食
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <img src={img03} alt=""/> 美食
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <img src={img02} alt=""/> 美食
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <img src={img01} alt=""/> 美食
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <img src={img02} alt=""/> 美食
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <img src={img03} alt=""/> 美食
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <img src={img02} alt=""/> 美食
                                        </a>
                                    </li>
                                </ul>,<ul className="clear">
                                <li>
                                    <a href="">
                                        <img src={img01} alt=""/> 美食1
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <img src={img04} alt=""/> 美食
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <img src={img03} alt=""/> 美食
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <img src={img02} alt=""/> 美食
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <img src={img03} alt=""/> 美食
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <img src={img02} alt=""/> 美食
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <img src={img01} alt=""/> 美食
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <img src={img02} alt=""/> 美食
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <img src={img03} alt=""/> 美食
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <img src={img02} alt=""/> 美食
                                    </a>
                                </li>
                 </ul>]


            var datas= this.state.shoplist.map((val,key)=>{
                    return(
                         <li key={key}>
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
            

        return(
           
             <div className="index">
                <div className="header">
                    <i className="iconfont glass">&#xe617;</i>
                    <Link to="/search"> <input type="text" placeholder="　　　搜索商家、商品名称" /> </Link>
                           
                </div>


                    <div className="banner">
                    <Carousel  trigger="click">
                                {
                                items.map((item, index) => {
                                    return (
                                    <Carousel.Item key={index}>
                                       {item}
                                    </Carousel.Item>
                                    )
                                })
                                }
                            </Carousel>
                            
                    </div>

                <div className="imgboxs">
                    <img src={bg01} alt="bg" />
                </div>

                <div className="sharelist">
                    <ul>
                       
                        <li>
                        
                                <p>满20减10</p>
                                <span>选饿了么！</span>
                        
                            <img src={img01} alt=""/>
                        </li>
                        <li>
                                
                                <p>Taste is King</p>
                                <span>广深大聚惠</span>
                            
                                <img src={img02} alt=""/>
                            </li>
                    
                            <li>
                            
                                <p>新鲜现做!~</p>
                                <span>Home is！</span>
                            
                                <img src={img03} alt=""/>
                            </li>
                            <li>
                                
                                    <p>乐凯撒</p>
                                    <span>Tasteis！</span>
                            
                                    <img src={img04} alt="" />
                                </li>
                        </ul>

                </div>
                <div className="shoplist add" id="shoplist">

                    <ul>
                        <InfiniteScroll
                            pageStart={0}
                            loadMore={this.loadMore}  
                            hasMore={this.state.hasMore} 
                            loader={<div className="loader" key={0}>加载中 ...</div>} 
                            >
                            {datas}   
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
        // this.getshopdata()
    }
       

}

    


export default Index;