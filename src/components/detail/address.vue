<template>
  <view class="co-address">
    <view>{{ data.departure }}送至</view>
    <view>{{ data.dest }}</view>
    <view>快递费{{ data.expressFree }}元</view>
    <view></view>
  </view>
</template>

<script lang="ts">
const data = {
  departure: "上海黄埔",
  dest: "北京东城区",
  expressFree: "15.00",
};

export default {
  name: "address",
  setup() {
    return {
      data,
    };
  },
};
</script>

<style lang="less">
.co-address {
  display: flex;
  font-size: 26px;
  padding: 40px 20px;
  :nth-child(1) {
    width: 27%;
    color: #999;
  }
  :nth-child(2) {
    flex: 1;
  }
  :nth-child(3) {
    width: 35%;
    &:before {
      content: "";
      width: 2%;
      padding-left: 20px;
      border-left: 1px solid rgb(246 236 236);
    }
  }
  :nth-child(4) {
    // width: 10%;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAixJREFUWAntl8lKw0AYx+1yU+r+Cp7EXVwQEbFq1TcQvXR7pm43X0HEqhV3cTnoayiKWj21qb+vNFICLTGZ6UEzMHyTTDLzy/9bkrS1ec1TwFPAU+B/K+BT+fjpdDrHenN+v38rFovdqFjbr2KRujXmKpXKQLlczqdSqam6846HSgEDgcAmJK/0Tno+k8lMOyar3agUMBqN3uHeMGsLZMgwjP1cLjfjBlIpoIDE4/F7zJLP53vBhnD3PrE5K3NOmtIkqQfIZrOjKHhITPYA+4GyERLnov4aO2NtgLI5yo0AeMiwl16kR5LJ5DnWdtMKKBTE4HCpVDpiWIVEyTXC4MwuofIYtG5M4jwAtcj5Z3oHiu7h/nnrdY2OtStobkzJGSImRck+YvITu55IJE7M+UZWu4Lmxrj1kfEicE+o2M54F+gFc76RbZmCJgDuHUTJApD9nPuib5A4x+a81QatJ3QfUxdFlKowqFlhbDTbM9BsUvWcxCHKFVi3Goe1jD5ttk/LYlDKjbhW4OhF1JPC3RROwFuioBTsWgb/FGwy2FbB1h6D5isPMRy98rQqyDfhGGA/72PGq5SbS6ztpq3MkBDjuPUAkm76ezAYXOWtcmWbrHahFhdb4cjWFeCufwsn1yvPYrJ1glIiXzBV5bDLuNURnAAqdTHZOsmaeQC7sG/8Aiy7/XlS7eIdE446FwbuVlRw01QDngBjALdNnXMN5+bBvHs9BTwFPAX+igLfYyjKWDQm9w0AAAAASUVORK5CYII=)
      no-repeat 50%;
    width: 40px;
    background-size: 100%;
  }
}
</style>
