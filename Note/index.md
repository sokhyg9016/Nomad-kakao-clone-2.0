# TIP
1. 항상 컴포넌트 단위로 시작 
1. 반복되는 페이지의 파트로 시작 (헤더, 스테이터스 바, 네비게이션 바) 
1. word를 나누기 위해 `-`를 사용
1. 부모자식을 나누기 위해 `__`를 사용


# Flow
1. 처음 시작 창에 status bar의 구조를 생성
    1. `__column`으로 자식 구조를 생성 (L,R)
     - **L**: `__clock`으로 시계 구조를 생성
     - **R**: 
        1. 그외의 아이콘들에 대한 구조를 생성
        1. 배터리 상태에 대한 구조를 생성

1. header 구조를 생성
    1. `__header-column`으로 자식 구조를 생성 (L,R)
     - **L**: `header__title`으로 제목 설정
     - **R**: 
        1. 그외의 아이콘들에 대한 구조를 생성

1. Navigation 구조를 생성
    1. 리스트를 사용 (`ul`, `li`)
     - `ul` : `nav__list`
     - `li` : `nav__list-item`
    1. 리스트안 각 항목에 아이콘 추가 
     - `a` : `nav__list-link`
     - `i` : [font-awesome](https://fontawesome.com/icons)

1. status bar, header, Naviagation 구조의 내용을 다른 파일들로 복사
    - `find`, `friends`, `more`로 각각 복사 (`.html` 파일들)    


*icon은 font awesome을 이용
    


# Components
> status bar
1. `status-bar`가 전체 상태바, `__column`이 자식 
1. `__` 으로 각 엘리먼트 구분 가능

> header
1. Title, icons(search, plus friend, setting)
1. 각 아이콘 사이에 공백이 있으므로 `span`으로 각 아이콘 마다 각각 박스에 할당

> Navigation Bar
1. List for other sections (chat, friend, find, more)