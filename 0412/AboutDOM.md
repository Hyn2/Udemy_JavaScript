# 141. Introduction to the Document Object Model (DOM)

DOM은 사용자와의 상호작용을 위해 필요합니다.
웹 페이지의 객체지향화 표현이며, 페이지의 모든 객체들은 Document 안에 포함되어있으며 트리 구조로 나타낸다.

```<html>
    <head>
        <title>HI</title>
    </head>
    <body>
        <button>Alert</button>
    </body>
</html>```

위 페이지를 풀어 설명하면
document의 자식은 head, body이고 이 둘은 서로 형제이며, head의 자식 태그는 title이다.

`var sel = document.firstElementChild.lastElementChild.firstElementChild;
sel.style.color = "red";`

DOM 안의 개체는, 가지고 있는 속성을 불러오거나 설정할 수 있으며
위와 같은 방식으로 해당하는 태그에 접근하여 내용을 변경할 수 있다.


