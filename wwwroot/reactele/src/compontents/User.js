import React, { Component } from 'react';
import '../assets/css/usercenter.css'
import { Link } from "react-router-dom";
import img02 from '../assets/img/02.png'
import storage from '../modle/storage'


class User extends Component{
    constructor(props){
        super(props);
    
        this.state={
			msg:'用户中心',
			info:'',
			flag:false,
			tel:'',
			
        }
    }
    render(){
		var str=this.state.flag?(<div className="headerFoot">{/* // 登录成功 */}
					<img src={img02} alt="img"/>
			<div className="centerMessage">
						<h4>ANCDDFERF</h4>
					<p>{this.state.tel}</p>
					</div>
				<i className="iconfont">&#xe735;</i>
				</div>):(<div className="headerFoot" id="headerFoot">{/* // 没有登录 */}
				<img src={img02} alt="img"/>
				<div className="centerMessage">
					<h4>您还没有登录</h4>
					<Link to='/register' ><p><button onClick={this.dologin}>请登录/注册</button></p></Link>
				</div>
				<i className="iconfont">&#xe735;</i>
			</div>
			
		)
        return(
            <div className="Users">
                
                <header className="headeruser">
			<div className="headerTop">
				<h3>
					<span>我的</span>
					<a href=""><i className="iconfont">&#xe603;</i></a>
					<a href=""><i className="iconfont">&#xe65b;</i></a>
				</h3>
			</div>
				{str}

		</header>
		<section className="wallet">
			<ul>
				<li>
					<h4>0.00<span>元</span></h4>
					<p>钱包</p>
				</li>
				<li>
					<h4>0<span>个</span></h4>
					<p>优惠</p>
				</li>
				<li>
					<h4>0<span>分</span></h4>
					<p>积分</p>
				</li>
			</ul>
		</section>
		<div className='getMessage'>
			<ul>
				<li>
					<i className="iconfont">&#xe627;</i>
					<a href=""><em>我的地址</em></a>
					<i className="iconfont">&#xe735;</i>
				</li>
				<li>
					<i className="iconfont">&#xe627;</i>
					<a href=""><em>我的收藏</em></a>
					<i className="iconfont">&#xe735;</i>
				</li>
				<li>
					<i className="iconfont">&#xe627;</i>
					<a href=""><em>金币商城</em></a>
					<i className="iconfont">&#xe735;</i>
				</li>
				<li>
					<i className="iconfont">&#xe627;</i>
					<a href=""><em>分享NA5元现金</em></a>
					<i className="iconfont">&#xe735;</i>
				</li>
				<li>
					<i className="iconfont">&#xe627;</i>
					<a href=""><em>我的客服</em></a>
					<i className="iconfont">&#xe735;</i>
				</li>
				<li>
					<i className="iconfont">&#xe627;</i>
					<a href=""><em>下载饿了么App</em></a>
					<i className="iconfont">&#xe735;</i>
				</li>
				
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
	componentDidMount(){
		var userinfo=storage.get('userinfomation');
		if(userinfo){
			// console.log(userinfo.username)
			this.setState({
				flag:true,
				tel:userinfo.username,
				
			})
		}

	}
	
}

export default User;