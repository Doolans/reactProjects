import React, { Component } from 'react';
import '../assets/css/confimOrder.css'
import { Link,Redirect } from "react-router-dom";
import storage from '../modle/storage'
import axios from 'axios';
import { Message } from 'element-react';


class ConfirmOrder extends Component{
    constructor(props){
        super(props);
    
        this.state={
            msg:'提交订单',
            shopPrice:'',
            num:1,	            
            numAll:1,
            sale:'',
            totalprice:'',  //总价
            price:'',  //单价
            flag:false,
            infoshow:true,
            name:'',      //商店名字
            shop_id:'',//商店id
            address:'',
            description:'',
            add_time:'',
            pic:''
          
        }
    }
    render(){
       
        if (!this.state.infoshow) {
            return <Redirect to='/register' />; 
        }
            var show=this.state.flag?<span><em>￥{this.state.totalprice}</em><i>l&nbsp;已优惠￥{this.state.sale}元</i></span>:<span><em>￥{this.state.price}</em><i> | 已优惠￥{this.state.sale}元</i></span>
        return(
    <div className="confimorder">
                <header className="confimorderheader">
                    <Link to="/groupBuying_detail/5abdab6636b3c612f479b81c" className="iconfont return">&#xe64e;</Link>
                    <span>确认订单</span>
                </header>
		<div id="address">
			<div id="add">
				<h4>+添加收货地址</h4>
			</div>
		</div>
		<div id="sendProduct">
			<ul className="sendProductUl">
				<li>
					<span>送达时间</span>
					<select name="send">
						<option value="op1">尽快送达</option>
						<option value="op1">12:00~13:00</option>
						<option value="op1">13:00~14:00</option>
						<option value="op1">14:00~15:00</option>
					</select>
					<i className="iconfont sendTimeRight">&#xe735;</i>
				</li>
				<li>
					<span>支付方式</span><em>在线支付</em>
				</li>
			</ul>
            
			<ul className="contentss">
            
				<li><p>{this.state.shopPrice.name}</p></li>
				<li>
					<h3>
						<img src={this.state.shopPrice.pic}/>
						<span>{this.state.shopPrice.description}</span>
						<span>
                        <i className="box1 add" onClick={this.delnum}>-</i>
                        <input type="text" value={this.state.numAll} className="inputs" onChange={this.getnum}/>
                        <i className="box1 dels" onClick={this.addnum}>+</i></span>
                        <span>￥{this.state.shopPrice.recent_order_num}</span>
						<span>￥{this.state.shopPrice.price}</span>
						
					</h3>
					
				</li>
				<li>
					<h3>
						<span>商家</span>
						<span>配送费</span>
						<i>{this.state.shopPrice.float_minimum_order_amount}元</i>
					</h3>    
					
				</li>
				<li>
					<h3>
						<span>新客</span>
						<span>本店新客立减</span>
						<i>10元</i>
					</h3>    
				</li>
				<li>
					<input type="text" placeholder="红包（店铺专享红包）" />
					<input type="text" placeholder="选择地址后使用红包" />
				</li>
				<li>
					<h3>
						<span>优惠说明</span>
						<span>￥<i>{this.state.sale}元</i></span>
					</h3>
					
				</li>
				<li>
					<h3>
                        <span>餐具份数</span>
                        <span>马上助力环保<em id="color">未选择</em><i className="iconfont">&#xe735;</i></span>
                    </h3>
				</li>
				<li>
					<h3>
						<span>订单备注</span>
                        <span id="color">口味、偏好<i className="iconfont">&#xe735;</i></span>
					</h3>
					
				</li>
				<li>
					<h3>
						<span>发票信息</span><span id="color">不需要开发票<i className="iconfont">&#xe735;</i></span>
					</h3>
				</li>
			</ul>
		</div>
	

    	<footer className="lastfot">
        {show}
			{/* <span><em>￥{this.state.totalprice}</em><i>l&nbsp;已优惠￥{this.state.sale}</i></span> */}
			<Link to='/'><span onClick={this.postBooklist}>去支付</span></Link>
		</footer>


   </div>

        
        )

	}
	getShopInfo=()=>{
        // console.log(object);
        var id=this.props.match.params.id
        var api="http://127.0.0.1:2010/api/shop/"+id

        axios.get(api) .then((response)=> {
             console.log(response.data.result);
             var list=response.data.result;
            this.setState({
                shopPrice:list[0],
                numAll:list[0].num,
                price:list[0].price,
                name:list[0].name,
                shop_id:list[0].shop_id,
                totalprice:list[0].num*response.data.result[0].price,
                address:list[0].address,
                description:list[0].description,
                add_time:new Date(),
                pic:list[0].pic


            })
            
           
            var  peisong=response.data.result[0].float_minimum_order_amount  //配送费

            this.setState({
                sale:peisong+10
            })
        })
       

    }
    componentDidMount(){ 


        this.getShopInfo();

        //判断有没有登录 有的话显示页面 没有的话提示登录

        var userinfo=storage.get('userinfomation');
        console.log(userinfo)
		if(userinfo){        //如果登录了显示
			// console.log(userinfo.username)
			this.setState({
				infoshow:true,				
            })           
		}else{    //没有登录

           this.openfalse()

         this.setState({
				infoshow:false,				
			})

        }




    }
    openfalse=()=> {
        Message({
          showClose: true,
          message: '您还没有登录，请登录',
          type: 'error'
        });

    }
    openscuu=()=> {
        Message({
          showClose: true,
          message: '支付成功 再选选吧~',
          type: 'success'
        });

    }
    getnum=(e)=>{
        // alert(1111)
      
        //  this.addnum()
        //  this.delnum()
    }
    addnum=(e)=>{

      
        this.setState({
            num:++this.state.num,
            numAll:++this.state.numAll
        })

        var inputnum=this.state.numAll
        console.log(inputnum)

        this.setState({
            flag:true,
            totalprice:inputnum*this.state.price-this.state.sale
        })
       
    }
    delnum=()=>{
      
        if(this.state.numAll>1){
            this.setState({
                num:--this.state.num,
                numAll:--this.state.numAll
                
            })

            var inputnum=this.state.numAll
            console.log(inputnum)
            this.setState({
                flag:true,
                totalprice:inputnum*this.state.price-this.state.sale
            })


        }
        
      

    }
    postBooklist=()=>{
        this.openscuu()
        var userinfo=storage.get('userinfomation');
        // console.log(userinfo)

        var api='http://localhost:2010/api/doBooklist'
        // console.log(this.state.totalprice);

        var json={
            name:userinfo.username,
            tel:userinfo.username,
            products:this.state.name,
            price:this.state.price,
            num:this.state.num,
            shop_id:this.state.shop_id,
            totalprice:this.state.totalprice,
            address:this.state.address,
            desciption:this.state.description,
            add_time:this.state.add_time,
            pic:this.state.pic

        }          
        axios.post(api,json).then( (response)=>{
            console.log(response);
          })
          .catch((error)=>{
            console.log(error);
          });

    }
	
}

export default ConfirmOrder;