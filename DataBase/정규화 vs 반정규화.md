# 정규화

## 정규화란?

논리적 설계 단계에서 발생할 수 있는 종속으로 인한 이상 현상의 문제점을 해결하기 위해, 속성들 간의 종속 관계를 분석하여 여러 개의 릴레이션으로 분해하는 과정을 말한다.

        즉 정규화 = 테이블 쪼개기이다.

정규화되는 과정을 **정규형**이라고 한다.

정규형의 종류는 6개가 있다.

1. 제 1 정규형
    
    모든 도메인이 원자값만으로 구성되도록 하는 정규형 

<br>
    
2. 제 2 정규형
    
    모든 속성이 기본키에 완전 함수 종속이 되도록 분해하는 과정
    
    = 부분 함수 종속을 제거한다는 뜻

<br>
    
3. 제 3 정규형
    
    제 2 정규형을 만족하면서 이행적 함수 종속 관계를 분해하여 비이행적 함수 종속이 되도록 하는 과정을 말한다.
    
    (= 이행적 함수 종속은 A→B, B→C, A→C인 경우를 의미한다.)
<br>
    
4. BCNF
    
    제 3 정규형을 만족하면서 모든 결정자가 후보키가 되도록하는 과정
<br>
    
5. 제 4 정규형
    
    다치 종속 관계 제거하는 과정
<br>
    
6. 제 5 정규형
    
    조인 종속 관계를 제거하는 과정

<br>

정규화를 통한 릴레이션의 분해로 인해서 일반적으로 정규화된 릴레이션은 비정규화된 릴레이션에 비해 응답시간이 느리다.


## 비정규화란?

비정규화는 정규화된 엔티티, 속성, 관계에 대해 시스템의 성능 향상과 개발과 운영의 단순화를 위해 중복, 통합, 분리 등을 수행하는 데이터 모델링의 기법이다. 둘 이상의 릴레이션들에 대하여 조인한 결과를 빈번하게 이용하는 경우, 비정규화함으로써 질의응답 시간이 단축될 수 있다.

데이터베이스의 성능 향상을 위해 사용한다

>
💡 비정규화는 하나 이상의 테이블에 데이터를 중복해 배치하는 최적화 기법이다.


        즉 비정규화 = 테이블 합치기 !

 굳이 나눈 데이터를 왜 합칠까? 

그 이유는 바로 **시스템의 성능 향상과 개발 및 운영의 편의성**을 위해서이다. 

>

<br>


### 📝 

정규화를 하는 이유는? 이상 현상을 해결하기 위해!
이상 현상은 하나의 릴레이션에 많은 속성이 있어 문제점이 발생할 수 있는 것을 의미한다.

반정규화를 하는 이유는? 성!능!향!상!


### 작성일
2021.10.14
