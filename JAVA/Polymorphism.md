### UpCasting + DownCasting
기억해둘것 ! 
    '=' 기준으로 왼쪽 오른쪽의 자료형(타입)은 같아야된다 ! 
    상속 구조의 클래스들 간에는 형변환이 가능 ! 

 #### 부모타입 레퍼런스로 자식 객체 다루는 경우 **`(다형성)`**
        
    System.out.println("3.부모타입 레퍼런스로 자식 객체 다루는 경우 (다형성)");
    Parent p2 = new Child1(); 
    
    📌 왼쪽 오른쪽 타입(Parent 와 Child)이 다르지만 가능한 이유는? => 자동형변환! 
    📌 자식 타입 => 부모타입으로 형변환하는 건 자동으로 됨 ! 
    
    p2.printParent(); //p2라는 레퍼런스로 Parent에만 접근가능..
    ((Child1)p2).printChild1(); //단, Child1강제형변환하면 Child1까지도 접근 가능
    