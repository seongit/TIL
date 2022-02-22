this라는 연산을 하고 있지만 문자열과 오브젝트를 더하면 자동적으로 그 오브젝트의 toString 메소드가 호출됩니다. 
    따라서 다음 식은 모두 동일하다.
        1. prefix + "/" + this
        2. prefix + "/" + this.toString()
        3. prefix + "/" + toString()