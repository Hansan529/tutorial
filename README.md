# Git 사용

## branch

master (default) 브랜치에서 기본적으로 작업을 진행하는데,  
다른 시나리오를 구성 할 때 branch를 새로 만들어서 마지막 commit 한 상태에서  
별도의 공간에서 작업을 진행한다.

이때 master branch가 아닌 타 branch에서 내용을 추가를 한다 해도, 기존 master branch에 적용이 되지 않는다.  
별도로 master brnach 에서 새롭에 추가한 branch를 병합을 해주어야 적용이 된다. <br><br>

## 목록 확인하기

    git log

현재 저장소에서 진행된 상태를 알려준다.

commit을 어떤 사람이 했는지, 해당 날짜 및 시간은 어떻게 되는지, 커밋 제목을 볼 수 있다.
<br><br>

## 스테이징 공간으로 이동

    git add 파일-이름.확장자
    git add . (전체)

git으로 감지한 파일들을 스테이징 하기 위해 사용한다.

이름.확장자 모두 타이핑을 해주어야 한다. 변경된 모든 사항을 스테이징 하려면 '.' 을 사용하면 된다.
<br><br>

## 커밋

    git commit -m "작성 하고자 하는 제목"

스테이징 공간으로 이동한 파일들을 커밋하는 작업이다.  
<br><br>

## 푸쉬

    git push origin master

커밋을 하고 난 뒤 `git lot` 를 입력하면 HEAD -> master 와 orgin/master 의 위치가 다른 것을 확인 할 수 있다.

해당 차이를 없애 주기 위해서 push를 진행한다.

## 되돌리기

    git checkout 5b73403aada4a0ee434ad527430cbb0f7dd03ce8

checkout 뒤에 텍스트들은 git log에서 commit 한 이름을 풀어놓은 것이다. 시간 앞 뒤로 이동 할 수 있다.

커밋을 변경한 건 아니기에 다시 현재로 돌아올 수 있다. `git checkout master`를 하면 기존에 마지막으로 commit 한 공간으로 돌아오게 된다.

완전히 해당 커밋을 삭제하고자 한다면 이와 같은 명령어를 사용하자.

    git reset --hard HEAD^

HEAD의 위치를 변경한다. ^를 입력하면 1단계 이전의 커밋으로 돌아가고, ^^는 2개 ^의 개수마다 증가한다.

이렇게 해당 커밋을 삭제하게 되면 orgin이 보이지 않게 되는데, HEAD의 위치를 옮겨서 그렇다.

    git push origin master --force

강제로 푸시를 해야한다.

reset에는 여러가지 리셋 방법들이 있다.

```CSS
/* 기본값: commit을 취소하고 파일을 untracked 파일로 unstated 영역에 보존한다. */
    git reset HEAD^

/* commit을 취소하고 파일을 state 영역으로 보존한다. */
    git reset --soft HEAD^

/* commit을 취소하고 파일을 stage 영역으로 옮기지 않고 삭제한다. */
    git reset --hard HEAD^
```
