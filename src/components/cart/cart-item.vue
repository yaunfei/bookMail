<template>
  <view class="co-cart-item">
    <view class="cart-item">
      <view class="item-icon check-icon"></view>
      <image
        class="item-img"
        src="https://www.kfzimg.com/sw/kfz-cos/kfzimg/abadbcfb/704ca01a6cd94977_n.jpg"
      />
      <view class="item-info">
        <view style="font-size: 16px">他们幸福</view>
        <view class="item-quality quality">九五品</view>
        <view class="item-buttom">
          <text>￥ 12.00</text>
          <view>
            <view class="leftIcon operate">-</view>
            <view class="number">2</view>
            <view class="rightIcon operate">+</view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script lang="ts">
export default {
  name: "cartItem",
};
</script>

<style lang="less">
@import "~@/common/styles/variables.less";

.co-cart-item {
  .cart-item {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    width: 95vw;
    height: 20vh;
    margin: 0 auto;
    border-radius: 10px;
    background-color: #fff;
    .item-icon {
      width: 50px;
      margin: 0 auto;
    }
    .item-img {
      width: 200px;
      height: 200px;
    }
    .item-info {
      width: 50vw;
      height: 200px;
      margin: 0 20px;
      .item-quality {
        margin-top: 50px;
      }
      .item-buttom {
        margin-top: 20px;
        font-size: 30px;
        :first-child {
          float: left;
          color: #9e100e;
        }
        :last-child {
          float: right;
          .number {
            display: inline-block;
            width: 50px;
            height: 35px;
            line-height: 35px;
            text-align: center;
            border-top: 4px solid @backColor;
            border-bottom: 4px solid @backColor;
          }
          .leftIcon {
            border-top-left-radius: 10px;
            border-bottom-left-radius: 10px;
          }
          .rightIcon {
            border-top-right-radius: 10px;
            border-bottom-right-radius: 10px;
          }
        }
      }
    }
  }
  .check-icon {
    width: 50px;
    height: 50px;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAA8NJREFUWAntmE1oE0EUgOftpvVQzE8DIgVLwYuCB8Vbq2CR+n/QQ0WUUtu7J4s3L16EelDxbmqxl4KooKAEtFCbo1e9CKXVWsSYNApam93ne5vOZrs7u0m6m9hD95CZfTPz3pc3P2/eCrH9hPMAbHb4VHciVf6pnTWEMQAI3UJgFwJ0sT5AXKLfJQRc0IWeje00X15ZWClsxlbDgI/SyQuGgdcI6CgZjNVptEzAs7oOD4bzxad1jrG61Q04kUr1oTDGEUVvIwbcfQFEDoR+42qhMOduU71rKqFTNj04qGc64/dMNN6FhWO9rIN1sU7W7bSlqgd6MNOTTIoiTqPAAdXgsDIQkBVJuDgyXyz66fIFZDhcMXMCxX6/wZHIQXyAhNbrB6mcYsv15Lmmw/E/ZAeQLb/pVq6BM8uf79JauRyJh+pTsndt/lPi+e/VV+7uninm3cqL2N2xFe8a6Efcu9szxXyUtAJGZUNlewMgH8JRHCUq4/XI2DYzOPtuAKxECGdztHU6pP9oALc1TRujI0Z5tLgZ7DXIsXW1hN8Iqd7w1RA9wyGI86M/Sq954EQqccdEHFMoKe+Iwy4Zu20P/i3BOercEjiGQiEOKOBYFFtnsZptQAFmc6KFy3NsNdOZvIWIpywC1Y+DpQqIsEfVN4zMPa2sy4IzzZuBeh0sVUC6zwUOqjaa1ap/bdNwlsoqiw0oL5u+JgF+iRgc1vW2btqBz3z7UUM4OFqf6xdftmEDBhnkNtruudHvK++H8/kvPQcPDRLkE9WYsHDrOmkPVR4bsHJNl2JFiXhsMp22bjb9MzNlgrzkhowIjlOGr5LABuQcQgpVJf2ldsNce5NJp/dxuxsyKriK7SpLFRBwUQXmlFEo2i3MtbceSNCmnIcwj6lrtzqVO+qcbMlXO5JkkskhFOakbAgqyVvLQmvrH8nnP6r6hYFjfTroQ8OFwmOu2x5sj+MLeqfsq/bj9qRzRFg40lXmNFXqtAErsQ9mZUOtUgUZARyZhVkZh5lhQ+zlvJVuE/214GS7BWmU5yjwP+TYiqbpH77koBolMzi72GtQCjOp+BwZDpX7Sl2NlrS2cyOFUp9znD3FUshJtay3ulTZ9gByTgCauN9yOLLpzkeYwQPIwo7jJ69TlMhyvRUP22KbKlueNSg7benEnSE50+eMv5meZN1BXxWYQznF3MAPQ3YMnDjdjDXJOlm33yePCoF1i5LV4PJ/fX7zXYN+uFv2A6YbmNNUK/viBMfKIbyfgOlityhQy3Kcd4Yvt67t92Z64B+tMcTaVFVcPAAAAABJRU5ErkJggg==)
      no-repeat;
    background-size: 100%;
  }
  .uncheck-icon {
    width: 50px;
    height: 50px;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAA8dJREFUWAntmE9IG0EUxvPHP2igpLc0tL1b6LFQbIV66KWWgpdcIoKg3kqhBS+CB8FLoQXxpoIQzCWXgrReUrBgGwq9taB3W2xuDZUoamP6feObYZLsaqLZTQ4OzM7s25n3/XZmdmffBgJX6XIjELxo93Q6fX1/f3+oXC4/ho/byHHU4/QXDAZ3UTDvoJ7t7e39kEwm//Bao6lhwMXFxWGAPIfQAHJHnYL/0G4TsAuTk5Pv6uyjmtUNuLy8/ODk5OQ14PrZE2JHKDaQ11Dfgn03Go1y1AKFQiEOG0f0Dk6fIQ+i3sVrsOdCodDU+Pj4F56fl84FzGQyYQi+gcALcZZHORuJRNIjIyN/zxPg9dXV1WvFYjGJ6gxyjDaAzuOGXiUSiRLP3dKZgCsrK9Hj4+MM4LjODpHnenp63o6OjhbdHJ5lT6VSkYODg5doM43cDchsZ2dnYmxsrODWzxVQ4HKA60PnPKZleGJi4qubo0bsS0tL97FcuBZjgNwGZL8bZMjJMadVRq4PDr4D7l6z4KhHX/SJ6g8OALWo6cTiCChrjtOaB+AQHP5y6nwZG30C8gk1uISo6eSvZor5tJZKpc9ofAgHj5o5ck4AMt2fcK07HA4/rH66a0aQrxJxNOc1HHVEY451S5unKlUAykuY77k8n1Zp43khWpzqfjLYghWAaMAdgmn2oq+S0+6NHUVrlr0sBuXEAHJvhWUAD8URX8Lqqo8HalKbDMKi1A0g3vRPYeHeulHvDqE8NOkgmtw6O4RFeTaAOONrhWnttGjJUWtrloANeItIGOatlqBVaisWctiAcRqwSNUXCet+J0tbsVDfAOKiMupPJr/hqKe1NQttBhBTW6Zhb2+vZneh3Y+ktTULNQ0g6r9pwDZ3g2UrkqWtWMhgA6q1B3oz/35DWtrmObABdwiE+ednekuSpa1YCGEDfhQqxhCtSkobI5nVAAYQW817GBl9DTKG0A38KkVzkAwMU7WuAZS4dRPD3CUBjm7jS0lNakNs046hDSApMLQLQjPDAEfqnheixYjPZlC6FYAMqgGZw5WYRF+qkdcH0WIAlasO7CsACYLP/CkBmubnuNdwosEw1NY2sjWAjAlwJ/No0c3QEA5umtZNrtC3hJ+Mkeer4xHK1QDSyIgfHfiox+Bg3QtIgVunBrWoSe3q5AjI3xGM+NFxGx3uAvIbHDZtuumLPumbGtRy+wVy5odBW//60EPd1j+PNCTLtv39ZkOyLrFz+/3ArAZlaCjRFwMcxhBOv4B/wp7lPm9vX9W+rs69HIH/zq7nkEg8hJAAAAAASUVORK5CYII=)
      no-repeat;
    background-size: 100%;
  }
  .operate {
    display: inline-block;
    width: 35px;
    height: 35px;
    line-height: 35px;
    text-align: center;
    border: 4px solid @backColor;
  }
}
</style>
