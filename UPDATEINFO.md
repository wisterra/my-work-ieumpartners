# UPDATE INFORMATION

## v20180920_1

### update info
메인페이지, 로그인페이지

### memo
page확인을 하려면 로컬서버를 시작해야합니다. vscode의 live server를 돌려 확인가능합니다.\
[http://127.0.0.1:5500/pages/#main](http://127.0.0.1:5500/pages/#main) \
[미리보기](https://wisterra.github.io/onetopkorea/pages/index.html#main) \
html로 전달드리는 파일은 index를 기준점으로하여 header, footer, quick, page를 jquery load로 include하는 방식으로 작업했습니다.\
\
링크 이동은 a태그에 걸려있는 hash태그 이름의 페이지로 로드하게끔 세팅되어져있으며 개발작업시 이 부분은 작업환경에 적합한 방식으로 변경하여 사용해주시면 됩니다.\
\
html class명은 추후에 조금씩 바뀔 수 있습니다. 참고부탁드립니다.\
\
css는 scss로 작성하여 컴파일되었습니다. (css파일 수정 금지)

### slider
slick slider 사용합니다. (http://kenwheeler.github.io/slick/)