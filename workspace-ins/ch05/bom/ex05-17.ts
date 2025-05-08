// Geolocation API

// 전역으로 사용하는 타입 선언
declare global {
  interface Window {
    kakao: any
  }
}

interface Position {
  lat: number;
  lng: number;
  accuracy: number;
}

const btn = document.querySelector('button');

btn?.addEventListener('click', find);

function find(){
  navigator.geolocation.getCurrentPosition((currentPosition) => {
    console.log(currentPosition);
    const position: Position = {
      lat: currentPosition.coords.latitude, // 위도
      lng: currentPosition.coords.longitude, // 경도
      accuracy: currentPosition.coords.accuracy // 위경도 오차(m)
    };
    showPosition(position);
  });
}

const myPosition = document.querySelector('#my-position');
function showPosition(position: Position){
  if(myPosition){
    myPosition.textContent = `${position.lat},${position.lng}(${position.accuracy.toFixed()}m)`;
  }
}


const container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
const options = { //지도를 생성할 때 필요한 기본 옵션
	center: new window.kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
	level: 3 //지도의 레벨(확대, 축소 정도)
};

const map = new window.kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

export {}