### FLEX 연습
```css
justify-content: center              |   ooo   |       가로
                 flex-start (default)|ooo      |
                 flex-end            |      ooo|
                 space-around        | o  o  o |
                 space-between       |o   o   o|
```

```css
align-items: center          세로
             flex-start
             flex-end
```
```css
align-content: center        여러줄들의 사이간격을 지정해줄때 사용 (한줄만 있을 땐 효과 x)
               flex-start
               flex-end
               space-around
               space-between
```
***
```css
align-self:   이 요소들만 속성따로가지게할때 
```
예를들면,
```css
#pond{
  display:flex                     |빨빨  빨  |
  align-items: flex-start          |          |
                                   |    노  노|
.yellow{
  align-self:flex-end
 }
```
***
```css
flex-direction: row             |123   |
                row-reverse     |   321|
                
                column          |1     |
                                |2     |
                                |3     |
                                |      |
                                |      |
                                |      |
                
                column-reverse  |      |
                                |      |
                                |      |
                                |3     |
                                |2     |
                                |1     |
```
***
```css
order: 1 or 0(default) or -1
```
예를들면,
```css
.yellow{
  order:1      |빨노빨빨노| => |빨빨빨노노|  (오른쪽으로 노란색인것들을 모아라)
}
```
```css
.yellow{
  order:-1      |빨노빨빨노| => |노노빨빨빨|  (왼쪽으로 노란색인것들을 모아라)
}
```
***
```css
  flex-wrap: wrap or nowrap        |000000| => |O O O O|
                                               |O O    |
  flex-wrap이랑 flex-direction이랑 같이 자주쓰니까 flex-flow라는게 나옴. 둘이합친거임.
  ex) flex-wrap : wrap         ===       flex-flow: row wrap
      flex-direction : row

```
