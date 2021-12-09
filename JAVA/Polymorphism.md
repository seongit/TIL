### UpCasting + DownCasting
    
    기억해둘것 ! 
    '=' 기준으로 왼쪽 오른쪽의 자료형(타입)은 같아야된다 ! 
    상속 구조의 클래스들 간에는 형변환이 가능 ! 
    
    ```java
    
    1. UpCasting
    자식 타입 --> 부모타입으로 형변환
    생략가능(자동형변환)
    ex) 부모타입 변수 = (부모타입)자식객체;
    
    2. DownCasting
    부모타입 --> 자식타입으로 형변환
    생략불가능(강제형변환 == 명시적형변환)
    ex) (자식타입)부모.자식메소드()
    
    ```
    
    - 1. 부모타입레퍼런스로 부모 객체를 다루는 경우
        
        p1레퍼런스로 Parent에만 접근가능
        
        ```java
        
        		System.out.println("1. 부모타입레퍼런스로 부모 객체를 다루는 경우 ");
        		Parent p1 = new Parent();
        		p1.printParent();
        		
        		1. 부모타입레퍼런스로 부모 객체를 다루는 경우 
        		엄빠다
        ```
        
    - 2. 자식타입 레퍼런스로 자식 객체를 다루는 경우
        
        ```java
        
        		System.out.println("2. 자식타입 레퍼런스로 자식 객체를 다루는 경우");
        		Child1 c1 = new Child1();
        		c1.printChild1();
        		c1.printParent();
        
        		2. 자식타입 레퍼런스로 자식 객체를 다루는 경우
        		나는 첫번째 자식이다
        		엄빠다
        ```
        
    - 3. 부모타입 레퍼런스로 자식 객체 다루는 경우 **`(다형성)`**
        
        ```java
        
        		System.out.println("3.부모타입 레퍼런스로 자식 객체 다루는 경우 (다형성)");
        		Parent p2 = new Child1(); 
        		// 왼쪽 오른쪽 타입(Parent 와 Child)이 다름 왜 가능? => 자동형변환 되서 ! 
        		// 자식 타입 => 부모타입으로 형변환하는 건 자동으로 됨 ! 
        		
        		p2.printParent(); //p2라는 레퍼런스로 Parent에만 접근가능..
        		((Child1)p2).printChild1(); //단, Child1강제형변환하면 Child1까지도 접근 가능
        		
        		3.부모타입 레퍼런스로 자식 객체 다루는 경우 (다형성)
        		엄빠다
        		나는 첫번째 자식이다
        ```
        
    - 다형성(부모타입레퍼런스로 자식 객체 다루는)을 적용해서 부모타입 배열 만든 후 담기
        
        ```java
        
        		//Parent
        		Parent [] arr = new Parent[4];
        		arr[0] = new Child1(1,2,4);
        		arr[1] = new Child2(2,1,5);
        		arr[2] = new Child2(5,7,2);
        		//arr[3] = new Child1(2,3,5);
        		//arr[3] = new Parent(); // 엄빠다
        		
        	
        }
        }
        ```