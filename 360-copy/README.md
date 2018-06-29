1. [@media](https://www.cnblogs.com/baiyii/p/6973437.html#ganhuo)浏览器宽度大于150则
@media screen and (min-width: 1500px) {
.section {
                padding: 0 200px;
            }
            .third .rocket{
                 right: 330px;
            }
        }





2.水平居中
div{
        display: flex;
        justify-content: space-between;      
        align-items: center;
    }

  垂直居中
  div {
        display: flex;
        flex-direction: column;
        justify-content:center;
    }

    3.Css动画
    animation 和
    @keyframes type{
        from{
            width: 0;
        }
        to{
            width: 100px;
        }
    }

    4. transition用法