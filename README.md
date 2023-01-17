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
<br>

## 푸쉬

    git push origin master

커밋을 하고 난 뒤 `git lot` 를 입력하면 HEAD -> master 와 orgin/master 의 위치가 다른 것을 확인 할 수 있다.

해당 차이를 없애 주기 위해서 push를 진행한다.

## 되돌리기

    git checkout 5b73403aada4a0ee434ad527430cbb0f7dd03ce8

checkout 뒤에 텍스트들은 git log에서 commit 한 이름을 풀어놓은 것이다. 시간 앞 뒤로 이동 할 수 있다.

커밋을 변경한 건 아니기에 다시 현재로 돌아올 수 있다. `git checkout master`를 하면 기존에 마지막으로 commit 한 공간으로 돌아오게 된다.

reset에는 여러가지 리셋 방법들이 있다.

```CSS
/* 기본값: commit을 취소하고 파일을 untracked 파일로 unstated 영역에 보존한다. */
    git reset HEAD^

/* commit을 취소하고 파일을 state 영역으로 보존한다. */
    git reset --soft HEAD^

/* commit을 취소하고 파일을 stage 영역으로 옮기지 않고 삭제한다. */
    git reset --hard HEAD^
```

HEAD의 위치를 변경한다. ^를 입력하면 1단계 이전의 커밋으로 돌아가고, ^^는 2개 ^의 개수마다 증가한다.

이렇게 해당 커밋을 삭제하게 되면 orgin이 보이지 않게 되는데, HEAD의 위치를 옮겨서 그렇다.

    git push origin master --force

강제로 푸시를 해야한다.

<br>

## push 취소

마지막으로 push한 commit을 수정할 일이 생긴다면 `reset HEAD^`를 해서 마지막 commit을 취소하고

내가 원하는 commit에 `git checkout`으로 HEAD를 이동시켜도 되고, 그대로 작업해도 된다.

그 후 내용을 변경하고 `get add filename.txt` 스테이징을 하고 `git commit -m ""` 재 커밋을 해준다.

push를 하는데 기존 `git push origin master` 에서 마지막에 `-f` 를 붙인다. --force의 약어이다.

`git push origin master -f` 끝<br><br>

## 과거로 돌아간 후, branch 생성

```CSS
/* ID를 갖는 commit으로 이동한다. */
git checkout ID

/* 새로운 branch를 생성한다. */
git checkout -b branch
/* 새로운 branch를 생성한다. */
git switch -c branch
```

git checkout은 넓은 범위로 사용되고, switch와 restore라고 나누어져있다.

각각 파일을 변경,복원 시에 사용하는 명령어다.

```CSS
/* commit으로 이동하지 않고도 그 위치에 branch를 생성한다. */
git checkout ID -b Branch-Name
```

해당 커밋 위치에 새로운 Branch를 즉시 생성한다.

`git branch` branch 목록들을 확인 할 수 있다.

생성한 branches 를 업로드하려면 `git push origin branch-name` 를 하면 된다.<br><br>

## 커밋 수정

커밋에 추가하지 못한 파일을 함께 커밋하고자 할 때에는

```CSS
/* 추가하고자 하는 파일 */
git add .

/* commit을 메시지를 수정하지 않음 */
git commit --amend --no-edit
/* commit의 메시지를 변경함 */
git commit --amend -m ""

/* push */
git push origin master -f
```

커밋을 수정해주면 된다.

추가로 `git status`를 입력하면 커밋할 때 파일들의 상태를 볼 수 있다.

이 기능 덕분에 사이드바를 확인하지 않고도 스테이징이 됐는지, 변경 사항에 있는지 알 수 있다.<br><br>

## 원하지 않은 파일 Push 하지 않기

```
touch .gitignore
```

.gitignore 파일이 생성되는데 해당 시스템 파일에서 추가하지 않고자 하는 파일들의 이름과 확장자를 입력하면 된다.

`.DS_Store` `.env` `.psd` `images/` `.txt`

이미 stage되었다면 `git rm -r file.ext` 하면 삭제된다.

캐시되었다면 --cached를 추가한다. `git rm -r file.ext --cached`<br><br>

## 다른 remote 추가하기

github를 제외한 다른 저장소 홈페이지를 사용할 때 remote를 추가할 수 있다.

```CSS
/* remote를 볼 수 있다. */
git remote -v

/* remote를 추가한다. */
git remote add name url

/* 다시 remote를 확인하면 */
git remote -v

/* name url fetch와 push가 생성된다. */
name url (fetch)
name url (push)
origin url (fetch)
origin url (push)

/* remote 삭제 */
git remote remove name

/* 새로운 remote에 push하기 */
git push name branch
```

<br>

## git clone

github descktop을 사용하지 않고 콘솔만으로

fork 한 저장소를 clone 하여 작업하기.

```CSS
/* url을 clone한다. 뒤에 이름을 지정하여 다른 이름으로 저장 가능하다. */
git clone url name

/* 해당 파일로 들어간 뒤 작업을 진행한다. */
git add .
git commit -m ""
git push origin master

/* 그 후 pull request를 하여 저장소 주인에게 merge 요청을 한다. */
```

fork -> pull request 테스트

원본 저장소 주인의 커밋
2개 커밋 추가
