import { styled } from 'styled-components'

const mainColor = '#ece0c0'
const FontColor = '#8fa84a'
const ImgBox = {
    borderRadius: '50%',
    overflow: 'hidden'
}
const formbd = {
    boxShadow: `0px 0px 8px ${mainColor}`,
    padding: '50px 30px',
    boxSizing: 'border-box',
    textAlign: 'center',
    marginBottom: '30px'
}
const btnAll = {
    textAlign: 'center',
    background: `${mainColor}`,
    border: 'none',
    color: '#fff',
    fontSize: '18px',
    cursor: 'pointer',
    fontWeight: 700,
    borderRadius: '25px',
    width: '300px',
    height: '50px',
    transition: '0.5s',
}

const inner = {
    margin: 'auto',
    position: 'relative',
    width: '1200px',
    boxSizing: 'border-box'
}
const h2 = {
    fontSize: '35px',
    fontWeight: 700,
    margin:'30px 0px'
}


export const Wrap = styled.div`
    width: 100%;
    
    `
export const HeaderWrap = styled.div`
        background: ${mainColor};
    .inner{
        ${inner}
        height: 150px; 
        h1{
            a{
                font-size: 45px;
                font-weight: 700;
                line-height: 150px;
                color: #fff;
            }
        }
        nav{
            ul{
                display: flex;
                position: absolute;
                bottom: 30px;
                right: 0;

                li{
                    text-align: center;
                    width: 100px;
                    margin-left: 20px;
                    span{
                        font-weight: 700;
                        font-size: 18px;
                        color: #aaa;
                    }
                    a{
                        
                        font-weight: 700;
                        font-size: 18px;
                        transition: 1s;
                        color: #fff;
                        position: relative;
                        padding-bottom: 5px;
                        &::after{
                            content: "";
                            position: absolute;
                            width: 100%;
                            height: 1px;
                            bottom: 0;left: 0;
                            display: block;
                            background: ${FontColor};
                            transition: 0.3s;
                            transform: scale(0);
                        }
                        &:hover{
                            &::after{
                                transform: scale(1.2);
                            }
                        }
                        &.on{
                            color: ${FontColor};
                        }
                    }
                }
            }
        }
    }

`

export const SttafList = styled.div`
    .inner{
        ${inner}
        padding: 70px 0px;
        h2{
            ${h2}
        }
        
        .btnWrap {
            position: absolute;
            top: 110px;
            right: 0;
            .btn {
                ${btnAll}
                a{color:#fff;}
                &:nth-child(2n){
                    margin-left: 30px;
                }
                &:hover{
                    background: ${FontColor};
                }
            }
            
        }
        .con {
            .list {
                padding: 0;
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                li {
                    width: 48%;
                    box-sizing: border-box;

                    display: flex;
                    justify-content: space-around;
                    padding: 20px 15px;
                    margin-bottom: 20px;
                    box-shadow: 0px 0px 8px ${mainColor};

                    .pic{
                        ${ImgBox};
                        width: 120px;
                        height: 120px;
                        margin-right: 30px;
                        img{width: 100%;}
                    }

                    .txt {
                        width: 200px;
                        display: flex;
                        flex-direction: column;
                        strong{
                            padding: 10px 0px;
                            font-size: 23px;
                            padding-bottom: 5px;
                            font-weight: 700;
                            padding-bottom: 10px;
                        }
                        span{
                            font-size: 18px;
                            padding-bottom: 5px;
                        }
                    }
                    .likeWrap{
                        display: flex;
                        flex-direction: column;
                        justify-content: space-around;
                        align-items:center;
                        i {
                            display: block;
                            font-size: 35px;
                            color: red;
                            cursor: pointer;
                        }
                        .resignBtn {
                            border: none;
                            border-radius: 25px;
                            background: #999;
                            color: #fff;
                            padding: 5px 10px;
                            font-size: 16px;
                            cursor: pointer;
                        }
                    }
                }
            }
        }
    }
`
export const AddForm = styled.div`
    .inner{
        ${inner}
        padding: 70px 0px;
        h2{
            ${h2}
        }
        form{
            ${formbd}
            p {
                margin-bottom: 40px;
                label {
                    width: 15%;
                    display: inline-block;
                    text-align: left;
                    font-size:20px;
                    font-weight: 500;
                }
                input {
                    border: 1px solid #aaa;
                    width: 75%;
                    font-size: 16px;
                    height: 50px;
                    font-size: 18px;
                    padding: 10px;
                    box-sizing: border-box;
                    &::placeholder{
                        font-size: 18px;
                    }
                }
                input::placeholder {
                    font-size: 16px;
                }
            }
            .addBtn {
                ${btnAll};
                background: ${mainColor};
                &:hover{
                    background: ${FontColor};

                }
            }
        }

        h3{
            font-size: 28px;
            font-weight: 700;
            margin:50px 0px 30px;
        }
        .imgEx{
            ${formbd}
            padding: 50px;
            .imgList{
                li{
                    display: flex;
                    padding: 10px 0px;
                    border-bottom: 1px solid ${mainColor};
                    text-align: left;

                    .imgbox{
                        margin: 0px 20px;
                        width: 60px;
                        height: 60px;
                        ${ImgBox};
                        img{
                            width: 100%;
                        }
                    }

                    p{
                        width: 540px;
                        margin-left: 30px;
                        font-size: 15px;
                        margin-top: 15px;
                    }
                }
            }
        }
    }
`


export const LoginWrap = styled.div`
.inner{
    ${inner}
    padding: 70px 0px;
    h2{
        ${h2}
    }
    span{
            display: block;
            font-size: 18px;
            margin-bottom: 10px;
        }
        .form{
            width: 100%;
            border: 1px solid #dcdcdc;
            box-sizing: border-box;
            padding: 100px;
            
            .formWrap{
                width: 560px;
                margin: auto;
                padding-bottom: 30px;
                p{
                    height: 50px;
                    vertical-align: middle;
                    font-size: 20px;
                    margin-bottom: 40px;
                    label{
                        width: 100px;display:inline-block; 
                    }
                    input{
                        width: 400px;
                        height: 50px;
                        font-size: 18px;
                        padding: 10px;
                        box-sizing: border-box;
                        border: 1px solid #aaa;
                        &::placeholder{
                            font-size: 18px;
                        }
                    }
                }
                .question{
                    border-top: 1px solid #dcdcdc;
                    text-align:center;
                    padding-top: 50px;
                    margin-top: 50px;
                    font-size: 25px;
                    font-weight: 700;
                }
                .loginInfo{
                    border-bottom: 1px solid #dcdcdc;
                    text-align:center;
                    padding-bottom: 50px;
                    margin-bottom: 50px;
                    font-size: 25px;
                    font-weight: 700;
                }
            }
            .btnWrap{
                    text-align: center;
                    .btn {
                        ${btnAll}
                        
                        &:nth-child(2n){
                            margin-left: 30px;
                        }
                        &:hover{
                            background: ${FontColor};
                        }
                    }

                }
        }
}
`

export const WarningWrap = styled.div`
    .inner{
        ${inner}
        padding:100px 0px;
        div{
            ${formbd}
            h2{
                ${h2}
                
            }
            strong{
                font-size: 30px;
                font-weight: 600;
                margin:30px 0px 70px;
                display: block;
            }
            p{
                button{
                    ${btnAll}
                    a{color:#fff;}
                    &:nth-child(2n){
                        margin-left: 30px;
                    }
                    &:hover{
                        background: ${FontColor};
                    }
                }
            }
        }
    }
    `