# TIP
1. 항상 컴포넌트 단위로 시작 
1. 반복되는 페이지의 파트로 시작 (헤더, 스테이터스 바, 네비게이션 바) 
1. word를 나누기 위해 '-'를 사용
1. 부모자식을 나누기 위해 '__'를 사용


# Flow - index.html
1. 처음 시작 창에 status bar의 구조를 생성
    1. __column으로 자식 구조를 생성 (L,R)
        L: __clock으로 시계 구조를 생성
        R: 
            1. 그외의 아이콘들에 대한 구조를 생성
            2. 배터리 상태에 대한 구조를 생성
        (+): icon은 font awesome을 이용
    


# Components
## <div class="status-bar">
1. status-bar가 전체 상태바, '__column'이 자식 
1. '__' 으로 각 엘리먼트 구분 가능