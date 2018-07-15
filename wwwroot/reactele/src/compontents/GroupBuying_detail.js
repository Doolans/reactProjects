import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import '../assets/css/groupBuying-detail.css'
import mapimg from '../assets/img/02.jpg'

class GroupBuying_detail extends Component{
    constructor(props){
        super(props);
    
        this.state={
            msg:'商品详情',
            shopdetails:[],
            flag:false,
            shopname:'',
            promotion_info:'',
            pic:'',
            address:''
                   
        }
    }
    render(){

        return(
            <div className="buydetils">   
            
            <div id="allmap"></div>
            <div id="result"> <input type="button" value="选择起点" /></div>
           

                <header className="header header3" >
                    <Link to="/" className="iconfont back"> 
                        <i className="iconfont">&#xe8b7;</i>
                    </Link>
                    <h2>团购详情</h2>
                    <div className="header-list">
                        <b className="header-collection">
                            <i className="iconfont">&#xe602;</i>
                            <span>收藏</span>
                        </b>
                        <b className="header-navigation">
                            <i className="iconfont">&#xe66e;</i>
                            <span>导航</span>
                        </b>
                    </div>
                </header>
                <section className="cate">
                    <section className="cate-pic">
                        <a href="">
                            <img src={this.state.shopdetails.bgimg} alt=""/>
                        </a>
                    </section>
                    <section className="cate-priceWrap">
                        <div className="cate-priceLeft">
                            <span className="cate-price">{this.state.shopdetails.price}</span>
                            <b>元</b>
                            <em>门市价:198元</em>
                        </div>
                        <div className="cate-priceRight">

                        <Link to={`/confirmOrder/${this.state.shopdetails._id}`}>  <button className="cate-buy">立即购买</button></Link>
                        </div>
                    </section>
                    <section className="cate-notice">
                        <span><i className="iconfont">&#xe612;</i>不支持随时退款</span>
                        <span><i className="iconfont">&#xe612;</i>支持过期自动退</span>
                        <span><i className="iconfont">&#xe612;</i>已售{this.state.shopdetails.distance}</span>
                      
                    </section>
                </section>
                <section className="estimate-wrap">
                    <section className="estimate-star">
                        <span>
                            <i className="iconfont">&#xe602;</i>
                            <i className="iconfont">&#xe602;</i>
                            <i className="iconfont">&#xe602;</i>
                            <i className="iconfont">&#xe602;</i>
                            <i className="iconfont">&#xe602;</i>
                            <i>{this.state.shopdetails.rating}</i>
                        </span>
                        <a href="">
                            <span>{this.state.shopdetails.recent_order_num}</span>
                            人评价>
                        </a>
                    </section>
                    <section className="estimate">
                        <div className="estimate-mark">
                            <i>环境优雅<span>65</span></i>
                            <i>服务热情<span>43</span></i>
                            <i>味道赞<span>41</span></i>
                            <i>干净卫生<span>38</span></i>
                            <i>分量足<span>32</span></i>
                            <i>价格实惠<span>29</span></i>
                            <i>肉类好<span>28</span></i>
                            <i>环境优雅<span>65</span></i>
                            <i>服务热情<span>43</span></i>
                            <i>味道赞<span>41</span></i>
                            <i>干净卫生<span>38</span></i>
                            <i>分量足<span>32</span></i>
                            <i>价格实惠<span>29</span></i>
                            <i>肉类好<span>28</span></i>
                        </div>

                    </section>
                    
                </section>
                <div className="infobox">
                        <p>最新通知</p>
                        <hr />
                        <span>【3月30日更新】变更限制性条款，2018年4月05日--4月07日晚餐门店价为218元，使用需要补29元差价使用；给您带来不便，深表歉意。</span>
                        <br /><br />
                 </div>
                 <div className="infobox">
                         <p>商家信息</p>
                         <hr />
                         <div className="allbox">
                         <div className="leftbox">
                             <h4>{this.state.shopdetails.name}</h4>
                             <p>{this.state.shopdetails.address}</p>
                             <span onClick={this.baiduMap}><i className="iconfont">&#xe619;</i>　　离我最近</span>
                             <br /><br />
                         </div>
                         <div className="telbox">
                         <a href="tel:15999551378"><i className="iconfont">&#xe61f;</i></a>
                           
                         </div>
                         </div>
                 </div>
                 <p className="tips">备注</p>
                
                     <ul className="tipsbox" id="tipsbox">
                         <li>
                         单人自助晚餐：17:30-21:30
                         </li>
                         <li>
                         【特别提醒】套餐使用规则说明（ 必读 ）
                         </li>
                         <li>
                         1、营业时间
                         </li>
                         <li>
                         周一至周五午餐：11:30-14:30，周六周日午餐：11:00-15:00
                         </li>
                         <li>
                         周一至周五 17:30-21:30 ，周六至周日 17:00-21:30
                         </li>
                         <li>
                         2、该美团券如在周六至周日晚餐（17:00-21:30）使用须补差价￥10.00/张
                         </li>
                         <li>
                         3、如遇法定假日或特殊节日门市价调整，则须补足与门市价差额方可使用。
                         </li>
                         <li>
                         4、2018年4月05日--4月07日晚餐门店价为218元，使用需要补29元差价使用；
                         </li>
                         <br />
                     </ul>

                     <ul className="tipsbox" id="tipsbox">
                     <h3>购买须知</h3>
                     <hr/>
                     <h4>有效期</h4>
                     <span>2017.3.15 至 2018.4.30（周末、法定节假日通用）</span>
                     <h4>使用规则</h4>
                         <li>
                         须于当餐次提前1小时预约方可使用，预约电话0755-89829988
                         </li>
                         <li>
                         每张美团券最多1位成人使用，身高1.2米以上儿童计入人数
                         </li>
                         <li>
                         每位成人可免费携带1位身高1.2（不含）以下小童用餐，1.2-1.4米（不含）按儿童价收费，1.4米（含）以上按成人收费。
                         </li>
                         <li>
                         1、1.2米（不含）以下儿童享受本自助餐不另收费，每张团购券限带1位1.2米（不含）以下儿童
                         </li>
                         <li>
                         2、如在周六至周日晚餐（17:00-21:30）使用须补差价￥10.00/张；2018年4月05日--4月07日晚餐门店价为218元，使用需要补29元差价使用；如遇国家法定节假日商家调整价格，需补差价使用，价格详询商家；
                         </li>
                         <li>
                         3、若午餐使用商家不退差价
                         </li>
                         <li>
                         4、部分菜品会随机调整，请以当天店内提供为准
                         </li>
                         
                         <li>
                         5、美团券不可与四海食神卡或其他优惠同时享用，不适用于20人或以上团队使用，不适用于宴会使用，不享用音箱设备及投影仪等服务
                         </li>
                         <li>
                         团购用户不可同时享受商家其他优惠
                         </li>
                         
                         <li>
                         部分菜品因时令原因有所不同，请以店内当日实际供应为准
                         </li>
                         <li>
                         停车位收费标准：消费满500元，可换取一张两小时的停车票
                         </li>
                         <br />
                     </ul>

                
               
            </div>
        )

    }

    getShopInfo=()=>{
        // console.log(object);
        var id=this.props.match.params.id
        var api="http://127.0.0.1:2010/api/shop/"+id

        axios.get(api)

        .then((response)=> {
            console.log(response.data.result);
            this.setState({
                shopdetails:response.data.result[0],
                shopname:response.data.result[0].name,
                address:response.data.result[0].address,
                pic:response.data.result[0].pic,
                promotion_info:response.data.result[0].promotion_info


            })
           
        })
        .catch((error)=> {
            console.log(error);
        });


    }
    componentDidMount(){

        console.log(window.BMap)
        console.log(window.BMapLib)
        this.getShopInfo();

        var map = new window.BMap.Map("allmap");
        var poi = new window.BMap.Point(114.057271,22.52942);
        map.centerAndZoom(poi,15);
        map.enableScrollWheelZoom();

    var content =`<img src=${this.state.pic} alt="" style="float:right;zoom:1;overflow:hidden;width:100px;height:100px;margin-left:3px;"/>'`
    //  '<div style="margin:0;line-height:20px;padding:2px;">' +
    //                 '<img src=${this.state.pic} alt="" style="float:right;zoom:1;overflow:hidden;width:100px;height:100px;margin-left:3px;"/>' +
    //                 '地址：${this.state.addresss}<br/>电话：(010)59928888<br/>简介：{this.state.promotion_info}' +
    //               '</div>';

    //创建检索信息窗口对象
    var searchInfoWindow = null;
	searchInfoWindow = new window.BMapLib.SearchInfoWindow(map, content, {
			title  : this.state.shopname,      //标题
			width  : 290,             //宽度
			height : 105,              //高度
			panel  : "panel",         //检索结果面板
			enableAutoPan : true,     //自动平移
			
		});
        var marker = new window.BMap.Marker(poi); //创建marker对象
        marker.enableDragging(); //marker可拖拽
        marker.addEventListener("click", function(e){
            searchInfoWindow.open(marker);
        })
        map.addOverlay(marker); //在地图中添加marker

    }
    baiduMap=()=>{
        console.log(window.BMap)
        this.setState({
            flag:true
        })
       

    }
}

export default GroupBuying_detail;