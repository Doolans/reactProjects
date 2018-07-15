import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import '../assets/css/booklist.css'
import bg from '../assets/img/05dddd_03.jpg'
import storage from '../modle/storage'

class Booklist extends Component{
    constructor(props){
        super(props);
    
        this.state={
            msg:'订单',
            flag:false,
            list:[]                      
        }
    }
    render(){
        var show=this.state.flag?(<div className="yesloging">
                        <ul>
                            {
                                this.state.list.map((val,key)=>{
                                    return (<li key={key}>
                                        <img src={val.pic} alt="" />
                                    <div className="titlem">
                                        
                                       
                                  {/* <h3> <Link to={`/groupBuying_detail/${val._id}`}>{val.products}</Link></h3> */}
                                      <h3>{val.products}</h3>
                                        <p>{val.add_time}</p>
                                        <p>{val.desciption}等<span>{val.num}</span>件商品</p>
                                        <p>￥{val.totalprice}</p>
    
                                    </div>
                                    <span className="successs">订单已完成</span>
                                    
                                </li>)
                                })
                            }
                            
                        </ul>

                    </div> ):( <div className="nologin">
                                <img src={bg} alt="dd" />
                                <h2>登录后查看外卖订单</h2>
                                <Link to="/register"><button>立即登录</button></Link>

                                </div> )
        return(
            <div className="booklists">   
                 <header className="booklist">
                <h2>订单</h2>
                </header>
        <main>
           {show}
         
        </main>
                
        <footer id="footer">
            <Link to="/" className="active">
                        <i className="iconfont sale">&#xe609;</i>外卖</Link>
             <Link to="/discovery">
                        <i className="iconfont">&#xe711;</i>发现</Link>
               <Link to="/booklist">
                        <i className="iconfont">&#xe612;</i>订单</Link>
               <Link to="/user">
                        <i className="iconfont">&#xe629;</i>我的</Link>

            </footer></div>
        )

    }
    componentDidMount(){

        var userinfo=storage.get('userinfomation');
        console.log(userinfo)
		if(userinfo){
			// console.log(userinfo.username)
			this.setState({
				flag:true,
				
            })
            
            var username=userinfo.username;
            console.log(username)

            var api='http://localhost:2010/api/order?username='+userinfo.username;

                axios.get(api).then( (response)=> {
                    console.log(response);
                    this.setState({
                        list:response.data.result
                    })
                })
                .catch((error)=> {
                    console.log(error);
                });
            


        }else{
           
                this.setState({
                    flag:false,
                    
                })

        }
        
        

	}
    

}

export default Booklist;