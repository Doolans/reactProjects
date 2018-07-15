import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Link,Redirect } from "react-router-dom";
import '../assets/css/confimlogin.css'
import axios from 'axios'
import { Message } from 'element-react';
import storage from '../modle/storage'
import tools from '../modle/tools'

var md5 = require('md5');


class Confirmlogin extends Component{
    constructor(props){
        super(props);
    
        this.state={
            msg:'确认注册',
            password1:'',
            password2:'',
            redirect: false,
            tel:'',
			password:'',
			name:'',
			add_time:''
            
        }
    }
    render(){
        if (this.state.redirect) {
            return <Redirect to={{ pathname: "/user" }} />;        //确认登录成功后跳转道用户中心
             }


        return(
            <div className="confimlogins">   
                    <header className="confimlogin">
                    <h2><Link to="/register" className="iconfont">&#xe8b7;</Link>　确认注册</h2>
                    </header>
                <main>
                    <ul className="list">
                        <li>
                            输入密码:<input type="password" placeholder=" 请输入密码" ref="value1"/>
                        </li>
                        <li>
                            确认密码:<input type="password" placeholder=" 请确认密码" ref="value2"/>
                        </li>
                    </ul>

                    <button onClick={this.login}>确认注册</button>
                </main>
            </div>
        )

    }
  
   
    login=()=>{
        
        if(this.refs.value1.value){

            // console.log(this.refs.value1.value) //
            // console.log(this.refs.value2.value);
        if(this.refs.value2.value!=this.refs.value1.value){
            this.openfalse()   //登录失败

        }else{

 //登录成功
            
//  console.log(storage.get('userinfo'));

           var obj={
             username:storage.get('userinfo'),
             password:this.refs.value2.value,
             salt:'abcdefghijk'

             }

           var serverSign=md5(tools.getSign(obj));   //  加密后 a8a8b0ce8074a2ddd927b581d75362b2

            //
            var serverSign=md5(serverSign+obj.salt)  //在加密  f28850820b3685a691507e427d2f8646
            console.log(serverSign)

          storage.set('userinfomation',obj);     //保存数据

           this.setState({
               redirect: true   //成功后跳转
           })
            

           this.doLogin()
        }

        }else{
            this.openfalse()
        }
       
    }//提交数据
    doLogin=()=>{

        var userinfomation=storage.get('userinfomation')

        var sign= md5('user'+userinfomation.username+'salt'+userinfomation.salt); 

        var json={
            username: userinfomation.username,
            password: userinfomation.password,
            tel: userinfomation.username,
            add_time:new Date(),
            sign:sign

        }
        // console.log(json);
        axios.post('http://localhost:2010/api/doLoginss',json ).then( (response) =>{
    
            console.log(response)
       
            if(response.data.status==1){
                this.openresult()
                
                this.setState({
                    redirect:false
                })
            }else{
                this.opensucc()
            }

    
        })

    }
    openresult=()=> {
        Message({
          showClose: true,
          message: '此用户已经注册',
          type: 'error'
        });

    }





    openfalse=()=> {
        Message({
          showClose: true,
          message: '两次密码输入不一致',
          type: 'error'
        });

    }
    opensucc=()=> {
        Message({
          showClose: true,
          message: '注册成功',
          type: 'success'
        });

    }

}
export default Confirmlogin;