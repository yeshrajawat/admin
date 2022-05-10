import React from 'react'
import './Widget.scss'
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import  ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import   MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import AccountBalanceWalletOutlinedIcon   from '@mui/icons-material/AccountBalanceWalletOutlined';

function Widget({type}) {

  let amount = 200;
  let percentage = 77;
  

  let data = null ;

  switch(type){
    case "user":
    data={
      title:'USERS',
      isMoney:false,
      numbers:1234,
      link:'See All Users',
      icon: <PersonOutlinedIcon
       className='icons'
        style={{color:'crimson',
                backgroundColor:"rgba(255,0,0,0.2"}} />
    };
    break;

    case "earnings":
    data={
      title:'EARNINGS',
      isMoney:true,
      numbers:567834,
      link:'See All Earnings',
      icon: <MonetizationOnOutlinedIcon 
      className='icons'
      style={{color:'green',
      backgroundColor:"rgba(0,128,0,0.2"}}
      />
    };
    break;

    case "order":
    data={
      title:'ORDERS',
      isMoney:false,
      numbers:126,
      link:'View All Orders',
      icon: <ShoppingCartOutlinedIcon 
      className='icons'
      style={{color:'goldenrod',
      backgroundColor:"rgba(218,165,32,0.2"}} />
    };
    break;

    case "balance":
    data={
      title:'BALANCE',
      isMoney:true,
      numbers:6535465,
      link:'See Details',
      icon: <AccountBalanceWalletOutlinedIcon 
      className='icons'
      style={{color:'purple',
      backgroundColor:"rgba(128,0,128,0.2"}} />
    };
    break;
    default:
      break;
  }


  return (
    <div className='widget'>
        <div className="left">
          <span className='title'>{data.title}</span>
          <span className='counter'>{data.isMoney && "₹"}{data.numbers}</span>
          <span className='link'> {data.link} </span>
        </div>
        <div className="right">
          <div className="percentage positive">
            <KeyboardArrowUpOutlinedIcon />
            {percentage}%
          </div>
          {data.icon}
        </div>
    </div>
  )
}

export default Widget