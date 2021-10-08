<template>
    <view class="co-sub-title" :class="{mymargin: marginFlag}">
        <view :style="{fontSize: titleFontSize + 'px', fontWeight: titleFontWeight}">
            <slot name="mainTitle"></slot>
        </view>
        <view></view>
        <view :style="{fontSize: operaFontSize + 'px', color: operaColor}">
            <slot name="operation"></slot>
        </view>
    </view>
</template>

<script lang="ts">
export default {
    name: "subTitle",
    props: {
        titleFontSize: {
            type: Number,
            default:  20,
        },
        titleFontWeight: {
            type: Number,
            default:  600,
        },
        operaFontSize: {
            type: Number,
            default: 14,
        },
        operaColor: {
            type: String,
            default: '#365899',
        },
        marginFlag: {
            type: Boolean,
            default: true,
        }
    }
}
</script>

<style lang="less">
.co-sub-title {
    font-size: 30px;
    height: 60px;
    line-height: 60px;
    padding: 0 20px;
    :nth-child(1) {
        float: left;
    }
    :nth-child(2) {
        float: right;
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAixJREFUWAntl8lKw0AYx+1yU+r+Cp7EXVwQEbFq1TcQvXR7pm43X0HEqhV3cTnoayiKWj21qb+vNFICLTGZ6UEzMHyTTDLzy/9bkrS1ec1TwFPAU+B/K+BT+fjpdDrHenN+v38rFovdqFjbr2KRujXmKpXKQLlczqdSqam6846HSgEDgcAmJK/0Tno+k8lMOyar3agUMBqN3uHeMGsLZMgwjP1cLjfjBlIpoIDE4/F7zJLP53vBhnD3PrE5K3NOmtIkqQfIZrOjKHhITPYA+4GyERLnov4aO2NtgLI5yo0AeMiwl16kR5LJ5DnWdtMKKBTE4HCpVDpiWIVEyTXC4MwuofIYtG5M4jwAtcj5Z3oHiu7h/nnrdY2OtStobkzJGSImRck+YvITu55IJE7M+UZWu4Lmxrj1kfEicE+o2M54F+gFc76RbZmCJgDuHUTJApD9nPuib5A4x+a81QatJ3QfUxdFlKowqFlhbDTbM9BsUvWcxCHKFVi3Goe1jD5ttk/LYlDKjbhW4OhF1JPC3RROwFuioBTsWgb/FGwy2FbB1h6D5isPMRy98rQqyDfhGGA/72PGq5SbS6ztpq3MkBDjuPUAkm76ezAYXOWtcmWbrHahFhdb4cjWFeCufwsn1yvPYrJ1glIiXzBV5bDLuNURnAAqdTHZOsmaeQC7sG/8Aiy7/XlS7eIdE446FwbuVlRw01QDngBjALdNnXMN5+bBvHs9BTwFPAX+igLfYyjKWDQm9w0AAAAASUVORK5CYII=) no-repeat 50%;
        width: 55px;
        height: 55px;
                    background-size: 100%;
    }
    :nth-child(3) {
        float: right;
        color: #9e100e;
    }   
}

.mymargin {
    margin: 30px 0;
}
</style>