import React from 'react';
import Notification from './Notification'; 

const reservedNotifications = [
  {
    message: "hello. 금일 아침 메뉴는 소고기미역국입니다"
  },
  {
    message: "hello. 금일 점심 메뉴는 신라면입니다."
  },
  {
    message: "hello. 금일 저녁 메뉴는 제육쌈밥입니다."
  },
  {
    message: "hello. 내일 아침 메뉴는 혜자주먹밥입니다."
  },
  {
    message: "hello. 내일 점심 메뉴는 데미그라스미트볼덮밥입니다."
  },
  {
    message: "hello. 내일 저녁 메뉴는 구름계란덮밥입니다."
  }
]

var timer;

class NotificationList extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      notifications:[],
    };
  }

  componentDidMount() {
    const {notifications} = this.state; // 분해 연산 과정
    timer = setInterval(() => {
      if(notifications.length < reservedNotifications.length){
        const index = notifications.length // 담을 곳의 인덱스를 담아서 반환하는 것.(길이로서 판단)
        notifications.push(reservedNotifications[index]); // 배열
        this.setState({
          notifications: notifications,
        });
      } else{
        clearInterval(timer); // 1초마다 해야 하는 일의 콜백이 애로우펑션 형태로 들어가게 되는 것.
      }
    }, 1500);
  }

  componnentWillUnmount() {
    if(timer){ // 언마운트를 하는 시점에 타이머의값이 언디파인드가 아니라면~ 즉 한번이라도 디드마운트를 했다면 자원을 해제해라.
      clearInterval(timer);
    }
  }

  render(){
    return (
      <div>
        {this.state.notifications.map((notification, index) => {
          return <Notification key={index} message={notification.message}/>;
        })}
      </div>
    );
  }
}

export default NotificationList;
