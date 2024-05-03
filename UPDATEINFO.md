---------------------------------------------------------
ONETOP KOREA SITE PUBLISHING
---------------------------------------------------------
# UPDATE INFORMATION

## v20181015_1

### update info
고객센터, 자동차 정비, 이벤트 카테고리 페이지 작업



## v20181008_1

### update info
카테고리 정리 : https://docs.google.com/spreadsheets/d/1EAxE-B__xZePKddlKWH5H7LZQI_-jDi5SHJp4XF-MBs/edit#gid=1334092343

include파일 내용 조금씩 변경, member, mypage 카테고리 페이지 제작
datepicker사용을 위해 jquery-ui.css 파일이 추가되고 jquery파일 버전업으로 변경했습니다!

이미지파일, vendor폴더에 변경사항 있습니다.
contents폴더는 기존폴더는 삭제후 다시 덮어씌우시면 깔끔해집니다.

* 이전버전과의 변경내역은 git페이지의 file changed 내용을 확인부탁드립니다.
파일변경 내용 : https://github.com/wisterra/onetopkorea/pull/17/files
(scss쪽 변경내역은 확인하지않으셔도 됩니다. site.min.css파일만 덧씌어주세요~)

html안에서 변경된 부분은 '수정'이라는 키워드로 검색하여 주석부분 코멘트 확인해주세요~



## v20180920_1

### update info
메인페이지, 로그인페이지

### memo
html로 전달드리는 파일은 index를 기준점으로하여 header, footer, quick과 각 페이지를 jquery load로 include하는 방식으로 작업했습니다.\
\
때문에 서버에서 돌리지않고 로컬로 열면 페이지가 보이지 않습니다.\
(Cross origin requests are only supported for protocol schemes: http, data, chrome, chrome-extension, https.)\
\
vscode의 live server 등으로 로컬서버를 돌려 확인해주세요.\
[http://127.0.0.1:5500/pages/#main](http://127.0.0.1:5500/pages/#main) \
\
바로가기를 실행시킨후 index.html을 끌어다 넣고 로고버튼을 한번 클릭하시면 url뒤에 #main로 새로고침되어 메인페이지를 확인할 수 있습니다. \
\
[생성방법 >>](http://goni9071.tistory.com/entry/크롬-로컬에서-ajax-테스트하기)\
열려있는 모든 크롬창을 닫은 후 바로가기를 생성합니다.\
바로가기에서 우클릭하여 속성창에서 대상 부분의 "ㅇㅇㅇ.exe" 뒤에 \
--disable-web-security --user-data-dir 명령어를 넣고 확인버튼을 누릅니다.\
\
(예시) "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" \ --disable-web-security --user-data-dir \
\
바로가기를 실행시킨후 index.html을 끌어다 넣고 주소 뒤에 #main을 붙여 새로고침하여 메인페이지를 확인할 수 있습니다. \
\
(예시) file:///E:/Projects/wisterra/onetopkorea/pages/index.html#main
\
페이지간 링크 이동은 a태그에 걸려있는 hash태그 이름의 페이지로 로드하게끔 세팅되어져있으며 개발작업시 이 부분은 작업환경에 적합한 방식으로 변경하여 사용해주시면 됩니다.\
\
html class명은 추후에 조금씩 바뀔 수 있습니다. 참고부탁드립니다.\
\
css는 scss로 작성하여 컴파일되었습니다. (css파일 수정 금지)

### slider
slick slider 사용합니다. (http://kenwheeler.github.io/slick/)
