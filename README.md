# 이웃끼리 거래하자 - 위치 기반 거래 플랫폼 :: 이웃사촌

![good1](https://user-images.githubusercontent.com/71423455/199411357-bb809a41-be6f-4cc7-a327-13c0621736a9.png)

## 프로젝트 소개
* K-Digital Training 웹 풀스택 과정 2차 팀 프로젝트
* 야채,과일을 나눔,교환하는 사이트를 제작했다. 
* 참여인원은 총 4명으로 기간은 2022.08.15 ~ 2022.08.29 로 약 2주가 소요 됐다.
* HTML, CSS, JavaScript, Node.js, Express, Etc...

## 페이지 설계

* 로그인부터 구매하기 까지의 다이어그램
<img width="1867" alt="login" src="https://user-images.githubusercontent.com/71423455/199628030-22a2c39b-4891-41b5-bb9c-b57e6918ad9d.png">


* 상품 상세페이지 기능에 대한 표
<img width="581" alt="diagram" src="https://user-images.githubusercontent.com/71423455/199430939-0977f760-8812-455c-897f-428374074dc1.png">

* 전체적인 UI/UX, 메인 컬러 디자인과 모든 페이지에 반응형 페이지를 적용했다.

## Front - end
> 메인 화면

![main](https://user-images.githubusercontent.com/71423455/199431884-d976e2a8-a923-451c-8c18-4467a0a0688e.gif)

* 메인화면 디자인을 맡은 팀원이 초기 디자인에 대해 편집과 도움을 요청해서 figma를 통해 함께 작업했다.
* 이 과정에서 어떤식으로 이미지들을 연결 할 것인지가 관건이였는데, 이웃사촌의 홈페이지 이미지에 맞고 유순하고 따뜻한 곡선을 주로 사용했다.  
* 화면을 아래로 스크롤 하면 하나의 선으로 각각의 이미지를 연결하도록 디자인했고 SVG 형식으로 export했다. 

> 상품 목록 UI
* 기본 UI가 되는 창들을 맡아 빌드했고 이를 기본 삼아 이후에 해당 페이지를 맡은 팀원이 UI의 디자인을 변경했다.

![productUI](https://user-images.githubusercontent.com/71423455/199432574-a23683ef-c104-4c8d-ba20-0dadea2af0e4.png)

> 상품 상세 페이지

![product_detail](https://user-images.githubusercontent.com/71423455/199432515-6b3e0049-e245-4fc4-a007-907f656b8456.png)


* 등록된 상품 이미지 개수에 따라 캐러셀과 인디케이터 생성할 수 있도록 설계했고, 업로드한 제품의 사진 개수가 1개 이상이거나 없을 경우도 고려했다.
* DB에 저장된 상품 데이터는 유저가 등록한 상품의 이미지(데이터) 이름에 따라 배열로 저장하고 반환하도록 설계 했기 때문에 배열의 개수 확인을 통해서 등록된 상품의 개수 확인이 가능했다.
* 제품의 상세 정보 표기되는 구역은 display grid와 flex, position을 사용했다.
* 캐러셀 하단의 6개로 나뉜 구역은 추천 상품을 위와 같은 방식으로 불러와서 순서대로 파일이 노출되도록 구현했다.
* 찜을 하는 경우, 찜(하트 이미지)가 돌아가도록 addEventlistner를 생성했다.

> 내 정보 보기 페이지

![my_info_UI](https://user-images.githubusercontent.com/71423455/199433296-4fd075a2-22a8-4146-af38-b00853c06b30.png)

* 내 정보 페이지의 색상과 기본 UI 설계 했는데 이 역시 display Grid, Flex, position을 사용했다.
* 내가 찜한 목록 확인이 가능하다.

## Back - end

![erd](https://user-images.githubusercontent.com/71423455/199441124-3a7d9519-a97c-441e-9af7-297c23ca1dff.png)
> 데이터 베이스 설계 (ERD)
* MySQL로 DB 생성하고 ORM은 sequelize를 사용해 CRUD를 구현했다.
* 회원 가입 데이터와 주소 데이터를 분리하여 저장할 수 있도록 각각의 테이블을 `member`와 `address` 테이블로 지정해서 분리했다
* 유저가 상품을 업로드할 떄의 시간을 확인헤서 상세 페이지에서 확인이 가능하도록 `product` 테이블에 timestamp를 설정헸다.

> FK Constraints - Referential Actions
* `address_id`를 FK로 설정하며 on update cascade를 설정했다. 
* `product` 테이블에 `member` 테이블의 `member_id`를 FK 설정하고 on update cascade
* 찜테이블( wish_list )과 구매 목록 테이블( order_list )에 회원 `member` 테이블을 FK로 연결해 on update cascade 헸다.
* 유저가 업로드 할 상품의 이미지와 상품 이름을 저장할 수 있는 `image`테이블을 만들어 on update cascade on delete cascade
* `image`테이블에 `product`의 `product_id`를 FK 설정

    
> 클라우드 서버 구축

* 네이버 클라우드 플랫폼을 이용해 웹 서버를 구축
