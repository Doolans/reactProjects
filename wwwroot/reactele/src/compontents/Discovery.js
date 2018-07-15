
import React, { Component } from 'react';

import { Link } from "react-router-dom";
import '../assets/css/discovery.css'


import img01 from '../assets/img/01.jpg'
import img02 from '../assets/img/02.jpg'
import img03 from '../assets/img/03.jpg'
import img04 from '../assets/img/04.jpg'
import bg02 from '../assets/img/03dis_02.jpg'


class Discovery extends Component{
    constructor(props){
        super(props);
    
        this.state={
            msg:'我是faxian',
            shoplist:[]
            
        }
    }
    render(){
        return(                      
            <div className="discovery">
              <div className="discovery">
                        <h2>发现</h2>
                </div>
            
                <div className="namebox">
                    <div className="boxleft">
                        <div className="boxleftT">
                            <div className="inbox">
                                <h3>积分商城</h3>
                                <p>0元好物在这里！</p>
                                <img src={img04} alt="bg"/>
                        </div>   
                        </div>
                        <div className="boxleftU">
                        
                            <h4 className="titles">免费流量</h4>
                            <span>  最高500M！</span>
                            <img src={img01} alt="bg" />

                        </div>

                    </div>
                    <div className="boxright">
                        <div className="boxrightT">
                                <span className="titles">美味爆料</span>
                                <img src={img02} alt="bg"/>
                                <span> 承包饥饿！</span>
                                
                            
                        </div>
                        <div className="boxrightC">
                                <span className="titles">推荐有奖</span>
                                <img src={img03} alt="bg"/>
                                <span>  快推荐~~！</span>
                               
                        </div>
                        <div className="boxrightU">
                                <span className="titles">有红包快抢</span>
                                <img src={img04} alt="bg"/>
                                <span> 5元红包免费~</span>
                                
                        </div>

                    </div>

                </div>
                <div className="imgboxs">
                    <img src={bg02} alt="bg"/>
                </div>

            <div className="eatbox">
                    <div className="titlebox">
                            <span>————● <i className="iconfont">&#xe668;</i><h3>美食推荐</h3> ●————</span>
                            <p>你的口味，我都懂得</p>
                    </div>
                    <div className="foodbox">
                        <ul>
                            <li>
                                <img src={img04} alt="jipai"/>
                                <p>鸡排/牛肉双拼...</p>
                                <span>￥19.8</span>
                            </li>
                            <li><img src={img01} alt="jipai"/>
                                <p>鸡排/奶茶双拼...</p>
                                <span>￥25.5</span>
                            </li>
                            <li><img src={img02} alt="jipai"/>
                                <p>炸鸡...</p>
                                <span>￥15.8</span>
                            </li>
                        </ul>
                        <a href="">查看更多》</a>
                    </div>
                </div>
                <div className="eatbox">
                    <div className="titlebox">
                            <span>————● <i className="iconfont">&#xe668;</i><h3>美食推荐</h3> ●————</span>
                            <p>你的口味，我都懂得</p>
                    </div>
                    <div className="foodbox">
                        <ul>
                        <li>
                                <img src={img04} alt="jipai"/>
                                <p>鸡排/牛肉双拼...</p>
                                <span>￥19.8</span>
                            </li>
                            <li><img src={img01} alt="jipai"/>
                                <p>鸡排/奶茶双拼...</p>
                                <span>￥25.5</span>
                            </li>
                            <li><img src={img02} alt="jipai"/>
                                <p>炸鸡...</p>
                                <span>￥15.8</span>
                            </li>
                        </ul>
                        <a href="">查看更多》</a>
                    </div>
                </div>
                <div className="eatbox boxlast">
                        <div className="titlebox">
                                <span>————● <i className="iconfont">&#xe668;</i><h3>美食推荐</h3> ●————</span>
                                <p>你的口味，我都懂得</p>
                        </div>
                        <div className="foodbox">
                            <ul>
                            <li>
                                <img src={img04} alt="jipai"/>
                                <p>鸡排/牛肉双拼...</p>
                                <span>￥19.8</span>
                            </li>
                            <li><img src={img01} alt="jipai"/>
                                <p>鸡排/奶茶双拼...</p>
                                <span>￥25.5</span>
                            </li>
                            <li><img src={img02} alt="jipai"/>
                                <p>炸鸡和啤酒...</p>
                                <span>￥15.8</span>
                            </li>
                            </ul>
                            <a href="">查看更多》</a>
                        </div>                    
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

}
    

    
export default Discovery;