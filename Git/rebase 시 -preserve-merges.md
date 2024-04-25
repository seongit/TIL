 rebase 시 -preserve-merges was replaced by --rebase-merges 에러 해결

 ```shell
 git rebase -i -r 해쉬코드
 ```

 최초의 커밋 이력부터 확인하고 싶다면
 ```shell
 git rebase -i -r --root
 ```

 ## Ref
 https://crispy-dev.tistory.com/entry/Github-private-%EB%A0%88%ED%8C%8C%EC%A7%80%ED%86%A0%EB%A6%AC-%EC%9E%94%EB%94%94-%EB%B0%98%EC%98%81-%EC%97%90%EB%9F%AC-rebase-%EC%8B%9C-preserve-merges-was-replaced-by-rebase-merges-%EC%97%90%EB%9F%AC-%ED%95%B4%EA%B2%B0