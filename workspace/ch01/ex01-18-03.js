const isLogin = true;
const isUser = true;
const isSeller = false;
const isAdmin = false;

// 로그인 상태
if (isLogin) {
  console.log("로그인 상태");
} else {
  console.log("로그아웃 상태");
}

// 역할 출력
if (isUser) {
  console.log("사용자");
} else {
  if (isSeller) {
    console.log("판매자");
  } else {
    if (isAdmin) {
      console.log("관리자");
    }
  }
}

// 역할별 로그인 상태 출력
if (isUser) {
  if (isLogin) {
    console.log("사용자 로그인 상태");
  } else {
    console.log("사용자 로그아웃 상태");
  }
} else {
  if (isSeller) {
    if (isLogin) {
      console.log("판매자 로그인 상태");
    } else {
      console.log("판매자 로그아웃 상태");
    }
  } else {
    if (isAdmin) {
      if (isLogin) {
        console.log("관리자 로그인 상태");
      } else {
        console.log("관리자 로그아웃 상태");
      }
    }
  }
}
