import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Link,Redirect } from "react-router-dom";
import '../assets/css/register.css'
import axios from 'axios'
import storage from '../modle/storage'

import { Message } from 'element-react';


class Register extends Component{
    constructor(props){
        super(props);
    
        this.state={
            msg:'登录',
            telnum:'',
            randomNum:'',
            lastnum:'',
            postrandom:'',
            redirect:false,
            testValue:''
        }
    }
    render(){

        if (this.state.redirect) {
            return <Redirect to={{ pathname: "/confirmlogin" }} />;     
                }


        return(
            <div className="register">   

                <header className="register-header">
                    <div className="header-left">
                        <Link to="/user"><i className="iconfont">&#xe8b7;</i></Link>
                        <span>登录</span>
                    </div>
                    <a href="">密码登录</a>
                </header>
                <section className="register-wrap">
                    <section className="register-tel">
                        <input type="number" placeholder="手机号" onChange={this.getnum}/>
                        <button onClick={this.dologinNum}>获取验证码</button>
                    </section>
                    <input type="text" className="verification" placeholder="验证码    " onChange={this.postnum} />
                </section>
                <section className="register-notice">
                    <p>温馨提示：未注册饿了么账号的手机号，登录时将自动注册，且代表您已经同意《用户服务协议》</p>
                </section>
                <section className="register-confirm">
                    <button onClick={this.nextlogin}>下一步</button>
                </section>
            </div>
        )

    }
    openSuccess=()=> {
        Message({
          showClose: true,
          message: `您的验证码是${this.state.lastnum}`,
          type: 'success'
        });
      }
    open=()=> {
        Message({
          showClose: true,
          message: '手机号码输入不正确',
          type: 'error'
        });

    }
    openrandom=()=> {
        Message({
          showClose: true,
          message: '验证码输入不正确',
          type: 'error'
        });

    }
    getnum=(e)=>{
        // console.log(e.target.value)


                this.setState({
                    telnum:e.target.value
                })
    }
    dologinNum=()=>{

        var myreg=/^[1][3,4,5,7,8][0-9]{9}$/;  

        if (!myreg.test(this.state.telnum)) {  
            // alert('手机号码不正确')
            this.open();

            return false;  

        }else{
            
            this.setState({
                telnum:this.state.telnum

            })
        }

      axios.post('http://localhost:2010/api/dologinnum', {

            usernum:this.state.telnum  
            
           
        }).then( (response) =>{
    
           console.log(response.data.randomNum)

         

           this.setState({
                lastnum:response.data.randomNum
           })

           this.openSuccess();

         })
            
  }
  postnum=(e)=>{

    // console.log(e.target.value);

    this.setState({
        testValue:e.target.value
    })


  }
  nextlogin=()=>{

    if(this.state.testValue!=this.state.lastnum){
        this.openrandom()
        return false
    }else{


        
        storage.set('userinfo',this.state.telnum); 


        this.setState({
            redirect:true
        })
    }

    

  }


  

}

export default Register;