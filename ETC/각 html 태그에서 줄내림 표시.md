# textarea

- xtarea 태그에서 줄내림하고 저장하면 줄내림은 \n 이 입력 된다.
- textarea에서 입력한 값이 DB 저장되고 다시 p 태그로 보여줄때는 <br/> 태그가 먹혀야 하므로 br태그로 replace 해주어야 한다.
- javascript는 replaceAll이 없으므로 정규식으로 모두 치환해 주면 된다.
