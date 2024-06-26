# 클라우드 컴퓨팅 텀프로젝트 최종 보고서
![header](https://capsule-render.vercel.app/api?type=waving&color=DEDEDE&height=250&section=header&text=🗓️Web%20Diary%20Service&fontSize=70&fontAlignY=38&descAlignY=60&descAlign=62)

## A. 프로젝트 명
Docker를 활용한 웹 다이어리 서비스

## B. 프로잭트 멤버 이름 및 멤버 별 담당한 파트 소개
<table>
  <thead>
    <tr>
      <th style="text-align: center;">이름</th>
      <th style="text-align: center;">내용</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align: center;">이다은</td>
      <td>- React와 TypeScript를 활용하여 반응형 UI 구현 <br> - 다이어리 조회 및 작성, 수정 등 이벤트 상호작용 기능 개발</td>
    </tr>
    <tr>
      <td style="text-align: center;">이풍헌</td>
      <td>- Oracle Cloud의 instance, nginx와 Docker를 이용해 웹 서비스 배포환경 구성</td>
    </tr>
    <tr>
      <td style="text-align: center;">고세화</td>
      <td>- PostgreSQL, Node.js를 활용하여 데이터베이스, 서버 구축</td>
    </tr>
    <tr>
      <td style="text-align: center;">김경준</td>
      <td>- PPT, 발표 영상 제작 <br> - 프로젝트 일정 관리 및 테스트</td>
    </tr>
  </tbody>
</table>

## C. 프로젝트 소개
&ensp;본 프로젝트는 사용자가 일상생활에 대한 기록을 간편하게 기록할 수 있도록 웹 다이어리 서비스를 개발하는 것을 목표로 한다. 해당 서비스는 사용자의 일정을 관리하고, 일상적인 내용과 기분을 기록할 수 있도록 한다.



## D. 프로젝트 필요성 소개
&ensp;웹  다이어리 서비스의 필요성은 다음과 같다.
1. 웹 다이어리 서비스는 높은 접근성과 휴대성을 가진다.
2. 아이디와 비밀번호를 통해 사용자를 인증해야 내용을 작성, 수정, 열람할 수 있으므로 보안성이 높다.
3. 다이어리를 기록함으로써 다양한 일정과 할 일을 효율적으로 관리할 수 있다.
4. 특정 날짜의 다이어리 내용을 빠르게 찾고 열람할 수 있다.

## E. 관련 기술/논문/특허 조사 내용 소개
&ensp;현재 개발하고자 하는 웹 다이어리 서비스와 유사한 서비스로는 todomate가 있다. 해당 웹 서비스는 깔끔한 UI/UX 디자인을 기반으로 서로의 일정을 기록, 공유할 수 있는 체크리스트 기반의 일정관리 앱이다.

&ensp;todomate의 핵심 기능으로는 프로필 관리, 할 일 & 일기 작성, 커뮤니티, 연동기능 & 위젯이 있다.

### 프로필 관리

&ensp;앱 내에서 사용할 이름, 자기소개, 프로필 사진을 설정하여 프로필을 통해 자유롭게 자신을 표현할 수 있다.

### 할 일 관리 & 일기 작성

&ensp;카테고리(목표)를 설정한 뒤 카테고리에 할 일을 추가하여 효율적으로 일정을 관리를 할 수 있고, 목표마다 색상 설정이 가능해 시각적으로도 구분이 쉽다. 또한 해당 날짜에 이미지를 추가하고 배경 색상과 대표 이모지를 골라 오늘을 일기 형식으로 표현할 수도 있다.

### 커뮤니티

&ensp;유저가 직접 추가한 친구 외에도 todomate내의 사용자들의 할 일과 일기를 볼 수 있다(공개설정 된 경우). 또한 페이지 내에서 마음에 드는 사용자를 팔로잉 할 수 있다.

### 연동기능 & 위젯

&ensp;더 좋은 접근성을 위해 동기화 기능을 제공하며, 웨어러블 OS에도 연동이 지원되어 편의성과 접근성을 높였다. 또한 사용자의 모바일 기기 홈 화면 내 위젯 추가가 가능해 서비스에 직접 접속하지 않아도 빠르게 작성해둔 일정을 확인할 수 있다.

## F. 프로젝트 개발 결과물 소개 (+ 다이어그램)

&ensp;프로그램의 기능은 다음과 같다.
1. 회원가입
2. 로그인
3. 팔로우
4. 다이어리 작성
    * 오늘의 기분을 이모지로 선택
    * 다이어리 제목 작성
    * 다이어리 내용 작성

&ensp;사용 기술 스택은 다음과 같다.
- 프론트엔드 : React.js
- 백엔드 : Node.js
- 데이터베이스 : PostgreSQL


&ensp;다이어리 서비스의 다이어그램은 다음과 같다.

![img](https://i.ibb.co/HCjtD3L/image.jpg)


## G. 개발 결과물 사용 방법 소개

### 1. Git clone
```
git clone https://github.com/kosh7707/cloud-computing-term-project.git
cd cloud-computing-term-project/src
```
### 2. Docker-compose 실행
```
sudo apt update
sudo apt install docker -y
sudo apt install docker-compose
sudo docker-compose up -d --build
```

### 시연 영상

https://github.com/kosh7707/cloud-computing-term-project/assets/144891051/797a686c-613b-4198-bd7a-2457413bb818


도메인

http://cctermproject.p-e.kr/

## H. 개발 결과물의 활용방안 소개
&ensp;개발한 웹 다이어리 서비스 개발 결과물은 다양한 사용자가 다양한 환경에서 사용 가능하다.

- 개인 사용자

&ensp;개인 사용자가 매일의 생각, 감정, 중요한 사건 등을 기록하고 싶을 때, 사용자는 오늘의 생각, 감정, 사건 등을 다이어리에 기록할 수 있고, 이후에 기록해 두었던 것들을 열람한다.

- 학생 사용자

&ensp;학생 사용자가 학업 일정을 관리하거나 오늘 하루 공부한 내용을 간단하게 요약하여 기록하고 싶을 때, 사용자는 학업 일정이나 공부 내용을 다이어리에 기록함으로써 체계적인 학습 일정을 세우고 더 효율적인 학습을 할 수 있다.

- 직장인 사용자

&ensp;직장인 사용자가 업무에 대한 메모나 중요한 일정을 관리하려고 할 때, 사용자는 업무와 관련한 내용을 기록하여 일정을 체계적으로 관리하고, 차후 있을 중요한 업무들을 미리 기록함으로써 더 효율적인 업무를 수행할 수 있다.
