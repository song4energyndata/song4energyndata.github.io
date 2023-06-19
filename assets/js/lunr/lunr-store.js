var store = [{
        "title": "First test",
        "excerpt":"Learning github page   First time for github page  ","categories": ["etc"],
        "tags": [],
        "url": "/2023/04/first.html",
        "teaser": "/assets/images/logo.png"
      },{
        "title": "A new example",
        "excerpt":"A trivial file created in and pushed from my PC         This is an eigenface       This is an example of Fisher's linear discriminant analysis        Two dimensional data       Three classes     $y = X \\beta + \\epsilon$ 일 때, OLS estimator는 $\\hat{\\beta} = (X’X)^{-1}X’y$ 로 주어짐   추천교재   정리본다운               ","categories": ["etc"],
        "tags": [],
        "url": "/2023/04/frompc.html",
        "teaser": "/assets/images/logo.png"
      },{
        "title": "회귀분석 관련 정리",
        "excerpt":"Ordinary least squares 선형회귀모델 $y=X \\beta + \\epsilon$ 에는 아래의 다섯가지 가정이 들어감. A1: $X$는 full rank임 (즉 특정 설명변수를 다른 설명변수들의 선형결합으로 완전하게 나타낼 수 없으며, $X’X$의 역행렬이 존재). 이 조건이 깨지면 estimator를 구할 수 없음. A2: 설명변수와 반응변수 간에 선형관계가 성립하고, 오차항의 편향이 없음 (즉 $\\text{E}[\\epsilon] = 0$)....","categories": ["Theory"],
        "tags": [],
        "url": "/2023/04/regression.html",
        "teaser": "/assets/images/logo.png"
      },{
        "title": "Web scrapper example",
        "excerpt":"소개 아래는 PubMed 사이트에서 원하는 논문 정보들을 수집하는 Web scrapping 코드입니다. 친구한테 만들어줬었습니다. 코드 from urllib.request import urlopen from urllib.parse import quote from bs4 import BeautifulSoup import pandas as pd import time from datetime import datetime # Each tuple in list variable \"searchwordlist\" contains searchword as the first element, #...","categories": ["Code"],
        "tags": ["python","BeautifulSoup"],
        "url": "/2023/04/scrapper.html",
        "teaser": "/assets/images/logo.png"
      },{
        "title": "Example of MD file",
        "excerpt":"Term project for COM506-Data Management An automated data pipeline for scraping book information from an online bookseller and storing it to SQL/ NoSQL databases Jeonghun Song (20212210010), submitted in 6th September 2022 Project Charter Problem statement Most of online booksellers do not provide a convenient way to get bulk data...","categories": ["Projects"],
        "tags": [],
        "url": "/2023/04/termproject.html",
        "teaser": "/assets/images/logo.png"
      },{
        "title": "건물의 시간별 전기부하 학습 후 예측하기 - 딥러닝 대신 회귀분석으로",
        "excerpt":"건물의 시간별 전기부하 다음 그림은, 어떤 건물이 특정 1주일 간 각 시간별로 얼마만큼의 전기를 썼는지 보여주는 그래프들이다. (그림) 파란 곡선은 K년도의 특정 1주일이고 (K는 2010~2022 사이의 어떤 자연수), 빨간 곡선은 K+1년도에서의 같은 특정 1주일이다. 두 곡선이 꽤나 비슷한 것을 보면, 해당 건물의 사용 행태나 규모 또는 전기 요금체계 등에 특별히...","categories": ["Energy"],
        "tags": ["python","BeautifulSoup"],
        "url": "/2023/04/predictionone.html",
        "teaser": "/assets/images/logo.png"
      },{
        "title": "건물의 시간별 전기부하 학습 후 예측하기 - 딥러닝을 쓴다면?",
        "excerpt":"Dense NN 지난 포스팅에서는 건물의 시간별 전기부하 추정 모델을 딥러닝이 아닌 선형회귀로 구성하는 과정을 설명했다. 또한, 간단한 선형회귀로도 나름 괜찮은 예측 성능의 모델을 얻을 수 있음을 보였다. 이번 포스팅에서는, 딥러닝을 써서 모델을 만들어 본다. 전기부하 데이터는 시계열 데이터이므로 Recurrent Neural Network (RNN) 을 쓸 수 있으나, 먼저 단순한 Dense Neural...","categories": ["Energy"],
        "tags": ["python","BeautifulSoup"],
        "url": "/2023/04/predictiontwo.html",
        "teaser": "/assets/images/logo.png"
      },{
        "title": "내 Applied Energy 논문의 수학 설명 - '가짜' curtailment 문제",
        "excerpt":"논문 배경 필자는 박사과정 동안 수행했던 연구들로, 국제학술지 Applied Energy에 제1저자 논문 2편을 게재하였다. (조금 자기PR 하자면, Applied Energy의 Impact Factor는 2020년 이전에도 7~8이었고 지금은 10이 넘으며, SJR에서 Energy(Miscellaneous) 부문에 속하는 100개 이상의 저널들 중 한 자리 등수를 유지해오고 있다. 필자의 논문들도 지금까지 각각 10번 이상 인용되었다.) 그 중 첫...","categories": ["Energy"],
        "tags": ["python","BeautifulSoup"],
        "url": "/2023/04/mypaperone.html",
        "teaser": "/assets/images/logo.png"
      },{
        "title": "내 Applied Energy 논문의 수학 설명 - 도심지 건축물 신재생 설치 확대 영향을 '빨리' 분석하기",
        "excerpt":"논문 배경 필자는 박사과정 동안 수행했던 연구들로, 국제학술지 Applied Energy에 제1저자 논문 2편을 게재하였다. (조금 자기PR 하자면, Applied Energy의 Impact Factor는 2020년 이전에도 7~8이었고 지금은 10이 넘으며, SJR에서 Energy(Miscellaneous) 부문에 속하는 100개 이상의 저널들 중 한 자리 등수를 유지해오고 있다. 필자의 논문들도 지금까지 각각 10번 이상 인용되었다.) 그 중 두...","categories": ["Energy"],
        "tags": ["python","BeautifulSoup"],
        "url": "/2023/04/mypapertwo.html",
        "teaser": "/assets/images/logo.png"
      },{
        "title": "데이터 전처리 예시 - 주택의 분 단위 전기부하 자료",
        "excerpt":"데이터 소개 스마트그리드 분야에 머신러닝/ 딥러닝/ 강화학습 기법이 어떻게 적용되는지에 대해 자세한 정보를 제공해주는 책으로 ‘스마트그리드 빅데이터 분석의 활용’ 이 있다. (링크) 이 책의 7장 ‘딥러닝을 이용한 스마트그리드 데이터 분석’ 에서는, 널리 알려진 backpropagation 기반 ANN 모델 뿐 아니라 (Factored Conditional) Restricted Boltzmann Machine 기반 모델을 이용해 전력 부하를 예측하는...","categories": ["Energy"],
        "tags": ["python","BeautifulSoup"],
        "url": "/2023/04/preprocessmocanu.html",
        "teaser": "/assets/images/logo.png"
      },{
        "title": "로지스틱 회귀에서의 over-confidence에 대한 이해",
        "excerpt":"Over-confidence란 Logistic regression에서는 각 point 별로 response $y$가 0과 1 중 1일 확률 추정값 $\\hat{y}$를 제공한다 (물론 실제 $y$값들은 알려져 있다). 한편, feature space에서 response가 1인 point들과 0인 point들이 완전히 linearly separable하면 (즉 $\\hat{y}=0.5$를 기준으로 misclassified point가 하나도 없으면), logistic regression 추정이 되지 않음이 잘 알려져 있다. Feature space에서 response가...","categories": ["Theory"],
        "tags": [],
        "url": "/2023/04/overconfidence.html",
        "teaser": "/assets/images/logo.png"
      },{
        "title": "정수선형계획법 기반 분산에너지시스템 최적화 설명 - 1) 최소비용 시스템과 시간별 자료의 중요성",
        "excerpt":"우리의 일상 생활에서 전기와 냉/난방 `에너지’는 떼어 놓을 수 없는 요소가 되었다. 또한 산업 현장에서도 전기와 고온의 열 에너지는 제품을 만드는 데 필요하다. 버스/ 지하철/ 비행기 등 운송 수단도 연료 혹은 전기 에너지를 주입해야 움직인다. 이렇듯 에너지는 다양한 방식으로 우리 삶을 윤택하게 해 준다. (에너지 사용 관련 그림) 대신, 에너지를...","categories": ["Energy"],
        "tags": ["python","BeautifulSoup"],
        "url": "/2023/04/linprogone.html",
        "teaser": "/assets/images/logo.png"
      },{
        "title": "정수선형계획법 기반 분산에너지시스템 최적화 설명 - 2) 배터리의 충/방전 스케줄 정하기: 수식",
        "excerpt":"이제 본격적으로, 분산형 에너지시스템 도입의 경제적 안 도출을 위한 수학적 최적화 문제 구성을 알아보기로 한다. 이 글에서 설명할 예시 문제는, 일반용 요금제를 적용받는 건물에 100 kWh급 배터리가 설치되어 있을 경우, 평일 내 24시간 동안 각 시간별 배터리의 최적 충/방전 스케줄을 도출하는 문제이다. 최적이라 함은, 24시간 동안의 전기요금의 합을 최소화함을 의미한다....","categories": ["Energy"],
        "tags": ["python","BeautifulSoup"],
        "url": "/2023/04/linprogtwo.html",
        "teaser": "/assets/images/logo.png"
      },{
        "title": "정수선형계획법 기반 분산에너지시스템 최적화 설명 - 3) 배터리의 충/방전 스케줄 정하기: Python 코드",
        "excerpt":"이전 포스팅에서 봤던 문제에서는 목적함수와 제약조건식들이 모두 선형이었다. 제곱항, 로그항 등은 없었다. 이 경우, 선형계획법 (Linear Programming) 을 이용해서 풀 수 있다. 선형계획법을 `무료로’ 수행하기 위해서는, Python에서 cvxopt 패키지 설치 후 glpk 모듈을 쓸 수 있다 (설치 방법 링크). 무료인 만큼 계산 시간이 많이 필요하지만, 그래도 적절한 가정들 하에 간소화된...","categories": ["Energy"],
        "tags": ["python","BeautifulSoup"],
        "url": "/2023/04/linprogthree.html",
        "teaser": "/assets/images/logo.png"
      },{
        "title": "정수선형계획법 기반 분산에너지시스템 최적화 설명 - 4) 태양광과 배터리의 용량 정하기",
        "excerpt":"지난 포스팅에서는 `주어진 용량의’ 배터리가 건물에 설치된 경우의 시간별 최소비용 충/방전 스케줄을 구하기 위한 선형계획법 문제 수식 구성 및 코딩을 설명했다. 그런데, 실제로는 그 용량도 결정해야 한다. 그래서 이번 포스팅에서는 용량까지 결정하는 문제를 설명한다. 더불어, 건물에 배터리 뿐 아니라 태양광 패널도 설치해서 태양광+배터리 연계 시스템을 구축 시 각각의 용량을 결정하는...","categories": ["Energy"],
        "tags": ["python","BeautifulSoup"],
        "url": "/2023/04/linprogfour.html",
        "teaser": "/assets/images/logo.png"
      },{
        "title": "강화학습 기반 마이크로그리드 내 배터리 스케줄링 - 1) 문제의식 및 케이스 소개",
        "excerpt":"에너지 시스템에서 재생에너지의 비중이 높아질수록, 당장 몇 시간 뒤의 발전량이 얼마일지도 모르고 그 불확실성도 큰 상황에서 지금 얼마만큼의 에너지를 저장하고 얼마만큼의 에너지를 계통으로부터 받을지 등을 `잘’ 결정하는 것이 어려워진다. 그렇지만 이를 ‘잘’ 결정해야, 장기적인 에너지 공급 비용 및 화석연료 사용량 등을 줄일 수 있다. 그런데 선형계획법 등 전통적인 최적화 기반...","categories": ["Energy"],
        "tags": ["python","BeautifulSoup"],
        "url": "/2023/04/reinforceone.html",
        "teaser": "/assets/images/logo.png"
      },{
        "title": "강화학습 기반 마이크로그리드 내 배터리 스케줄링 - 2) Q-learning 개념",
        "excerpt":"지난 포스팅에서 태양광 기반 마이크로그리드의 누적 비용을 최소화하는 최적 control 문제를 소개했다. 이번 포스팅에서는 ‘매 시점별로 과거의 자료만을 갖고’ control하는 데 필요한 강화학습의 이론적 내용을 최대한 간단히 소개한다 (강화학습에 대한 상세 내용은 Sutton의 Introduction 참고 바람) 먼저 Q-learning을 간단히 되짚고 넘어가자. 어떤 환경에서 시점 t에 상태 $s_{t}$에 있고, 이 때...","categories": ["Energy"],
        "tags": ["python","BeautifulSoup"],
        "url": "/2023/04/reinforcetwo.html",
        "teaser": "/assets/images/logo.png"
      },{
        "title": "강화학습 기반 마이크로그리드 내 배터리 스케줄링 - 3) Deep Q-learning을 통한 discrete control 도출",
        "excerpt":"이전 포스팅에서도 언급했듯, 이 문제에서 state는 직전 24시간 동안의 태양광 발전량과 부하 및 직전 1시간의 배터리 내 에너지양이고, action은 1.1kW 수전/ 1.1kW 송전/ idle 3가지이다. (action 인덱스는 0,1,2라 하자). 이 때 심층신경망은 state를 입력받아 3개 action 각각의 Q-value의 추정치 $\\hat{Q}(s_{t},0), \\hat{Q} (s_{t},1), \\hat{Q} (s_{t},2)$ 를 출력으로 계산한다. 이 심층신경망은 매...","categories": ["Energy"],
        "tags": ["python","BeautifulSoup"],
        "url": "/2023/04/reinforcethree.html",
        "teaser": "/assets/images/logo.png"
      },{
        "title": "강화학습 기반 마이크로그리드 내 배터리 스케줄링 - 4) DDPG를 통한 continuous control 도출",
        "excerpt":"저번 포스팅에서는 마이크로그리드에 discrete action 기반의 심층강화학습을 적용해 과거 시점의데이터 기반으로 control을 결정하는 방법을 알아보았다. 그러나 실제로는 continuous action이므로, continuous action을 다루는 심층강화학습 기법을 적용해본다. 이번에는 continuous control의 기본적인 방법인 Deep Deterministic Policy Gradient (DDPG)를 적용한다. Continuous action인 경우 가능한 action의 수가 사실상 무한대이므로, Deep Q-learning에서처럼 state를 입력받아 각 action...","categories": ["Energy"],
        "tags": ["python","BeautifulSoup"],
        "url": "/2023/04/reinforcefour.html",
        "teaser": "/assets/images/logo.png"
      },{
        "title": "강화학습 기반 마이크로그리드 내 배터리 스케줄링 - 5) TD3, SAC를 통한 continuous control 도출",
        "excerpt":"저번 포스팅에서는 continuous control을 위한 기본적인 심층강화학습 방법, Deep Deterministic Policy Gradient (DDPG) 를 적용해 보았다. 놀랍게도(?) 이 시리즈에서 다루는 마이크로그리드 문제에서는, DDPG가 Deep Q-learning (discrete action 3개) 대비 더 나은 결과를 보이지 못했다. Continuous control 학습에 대해 더 진보된 방법을 쓴다면 어떨까? 진보된 방법들의 대표 사례들로, Twin Delayed Deep...","categories": ["Energy"],
        "tags": ["python","BeautifulSoup"],
        "url": "/2023/04/reinforcefive.html",
        "teaser": "/assets/images/logo.png"
      },{
        "title": "건축물 별 월별 에너지 사용량 데이터셋 - 1) 모든 월에 대한 통합 및 표제부와의 결합 후 SQLite DB화",
        "excerpt":"필자에게 있어 각별한 데이터셋이 있다. (비주거용) 건축물 별 월별 에너지 사용량 데이터셋이다. 각지번 주소 단위의 개별 비주거용 건물별로 특정 월에 소비한 전기와 가스의 양을 kWh 단위로 기록한 데이터셋이다. 어떤 건물의 1년 12개월 간 월별 전기 사용량과 가스 사용량은, 대부분 아래 그림과 같은 형태를 띤다. (그림) 전기 사용량은 7월/ 8월 즉...","categories": ["Energy"],
        "tags": ["python","BeautifulSoup"],
        "url": "/2023/04/monthlyenergyone.html",
        "teaser": "/assets/images/logo.png"
      },{
        "title": "WSL2 Ubuntu 22.04에 CUDA & cuDNN 설치하기",
        "excerpt":"자신의 NVIDIA 그래픽카드 모델명에 맞는 NVIDIA driver를 다운로드 웹페이지 찾아서 윈도우에서 설치 ubuntu bash에서 $\\texttt{nvidia-smi}$ 실행 시, 드라이버 설치 확인 가능 Tensorflow 웹페이지에서 호환되는 CUDA 버전 확인 (‘소프트웨어 요구사항’ 항목을 보면, Tensorflow의 경우 CUDA 11.2 지원) CUDA Toolkit Downloads 웹페이지에서 Linux - x86_64 - WSL-Ubuntu - 2.0 - runtime (local)...","categories": ["etc"],
        "tags": ["python","BeautifulSoup"],
        "url": "/2023/04/cudadudnn.html",
        "teaser": "/assets/images/logo.png"
      },{
        "title": "건축물 별 월별 에너지 사용량 데이터셋 - 2) 월별 사용 추이가 이상한 data point 제거",
        "excerpt":"이전 포스팅에서, 각 건물의 지번별/월별 전기와 도시가스 사용량 데이터를 소개하였다. 또한 이를 표제부와 결합해 건물 에너지 분석에 활용할 수 있으며, 그 결합 방법 또한 소개하였다. 그렇다면 결합된 데이터를 그대로 쓰면 되는가? 그렇지 않다. 분명히 ‘이상한’ data point들이 존재할 것이기 때문이다. 데이터 기반의 연구개발을 한다면, 이러한 ‘이상한’ data point들을 제거하거나 수정하는...","categories": ["Energy"],
        "tags": ["python","BeautifulSoup"],
        "url": "/2023/04/monthlyenergytwo.html",
        "teaser": "/assets/images/logo.png"
      },{
        "title": "건축물 별 월별 에너지 사용량 데이터셋 - 3) 월별 사용량 크기가 이상한 data point 제거",
        "excerpt":"저번 포스팅에서는 건물 월별 에너지 사용량의 `추이’가 이상한 data point를 판별하는 방법을 설명했다. 이번 포스팅에서는 월별 에너지 사용량의 ‘크기(magnitude)’가 이상한 data point를 판별하는 방법을 설명한다. 상식적으로, 같은 용도의 건물이라면 크기가 큰 건물일수록 에너지 사용량이 큰 경향이 있을 것이다. 이를테면 서울 내 업무용 건물들의 1월 전기 사용량을 연면적 (모든 층의 바닥면적의...","categories": ["Energy"],
        "tags": ["python","BeautifulSoup"],
        "url": "/2023/04/monthlyenergythree.html",
        "teaser": "/assets/images/logo.png"
      }]
