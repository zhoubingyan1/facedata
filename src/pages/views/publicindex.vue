<template>
  <div>
    <vxe-grid
      border="none"
      align="center"
      stripe
      highlight-hover-row
      highlight-current-row
      highlight-hover-column
      highlight-current-column
      height="600"
      ref="xGrid"
      class="my-grid66"
      :columns="tableColumn"
      :data="tableData"
      :edit-config="{trigger: 'click', mode: 'cell', icon: 'fa fa-pencil-square-o'}"
      >

      <template v-slot:img1_default="{ row }">
        <span style="width: 100px; color:#f00;">{{row.FACTOR_1_STEP2}}</span>
        <!-- <span v-else>无</span> -->
      </template>


    </vxe-grid>
  </div>
</template>

<script>
import XEUtils from 'xe-utils'
export default {
  name: 'MyTable',
  data () {
    return {
      searchVal1: '',
      searchVal2: '',
      showDetails: false,
      selectRow: null,
      isAllChecked: false,
      isIndeterminate: false,
      selectRecords: [],
      tableData: [
        { id: 10001, name: 'Test1', nickname: 'T1', role: 'Develop', num1: '222', sex: 'Man', age: 28, address: 'Shenzhen', img1: '/vxe-table/static/other/img1.gif' },
        { id: 10002, name: 'Test2', nickname: 'T2', role: 'Test', num1: '536', sex: 'Women', age: 22, address: 'Guangzhou', img1: '/vxe-table/static/other/img2.gif' },
        { id: 10003, name: 'Test3', nickname: 'T3', role: 'PM', num1: '1000', sex: 'Man', age: 32, address: 'Shanghai', img1: '/vxe-table/static/other/img1.gif' },
        { id: 10004, name: 'Test4', nickname: 'T4', role: 'Designer', num1: '424323', sex: 'Women ', age: 23, address: 'Shenzhen', img1: '' },
        { id: 10005, name: 'Test5', nickname: 'T5', role: 'Develop', num1: '253', sex: 'Women ', age: 30, address: 'Shanghai', img1: '/vxe-table/static/other/img1.gif' },
        { id: 10006, name: 'Test6', nickname: 'T6', role: 'Designer', num1: '555', sex: 'Women ', age: 21, address: 'Shenzhen', img1: '/vxe-table/static/other/img2.gif' },
        { id: 10007, name: 'Test7', nickname: 'T7', role: 'Test', num1: '11', sex: 'Man ', age: 29, address: 'Shenzhen', img1: '' },
        { id: 10008, name: 'Test8', nickname: 'T8', role: 'Develop', num1: '998', sex: 'Man ', age: 35, address: 'Shenzhen', img1: '/vxe-table/static/other/img1.gif' }
      ],
      tableColumn: [
        { field: 'name', title: 'Name' },
        { field: 'age', title: 'Age'},
        {
          field: 'address',
          title: 'Address',
          showOverflow: true,
          slots: {
            // 使用渲染函数
            default: ({ row }, h) => {
              return [
                h('span', {
                  style: {
                    color: 'blue'
                  },
                  on: {
                    click: () => this.addressClickEvent(row)
                  }
                }, row.address)
              ]
            }
          }
        },
        { field: 'img1', title: '图片路径', slots: { default: 'img1_default' } }
      ]
    }
  },
  methods: {
    searchEvent () {
      this.$XModal.alert('查询')
    },
    showDetailEvent (row) {
      this.selectRow = row
      this.showDetails = true
    },
    headerClickEvent (evnt) {
      this.$XModal.alert('头部点击事件')
    },
    addressClickEvent (row) {
      console.log(111)
    },
    changeFilterEvent (evnt, option, $panel) {
      $panel.changeOption(evnt, !!option.data, option)
    },
  }
}
</script>
<style lang="scss">
.my-grid66 .alert-message {
  height: 40px;
  display: flex;
  align-items: center;
  margin: 10px 0;
  border-radius: 4px;
  background-color: #e6f7ff;
  border: 1px solid #91d5ff;
}
.my-grid66 .alert-message-icon {
  width: 30px;
  text-align: center;
  color: #409eff;
  margin-right: 8px;
}
.my-grid66 .alert-message-content {
  flex-grow: 1;
  padding-right: 20px;
}
.my-grid66 .page-left {
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
}
.my-grid66 .select-count {
  display: inline-block;
  vertical-align: middle;
}
.my-grid66 .my-input {
  width: 100%;
}
.my-grid66 .first-col {
  position: relative;
  height: 20px;
}
.my-grid66 .first-col:before {
  content: "";
  position: absolute;
  left: -15px;
  top: 10px;
  width: 110px;
  height: 1px;
  transform: rotate(28deg);
  background-color: #e8eaec;
}
.my-grid66 .first-col .first-col-top {
  position: absolute;
  right: 4px;
  top: -10px;
}
.my-grid66 .first-col .first-col-bottom {
  position: absolute;
  left: 4px;
  bottom: -10px;
}
.row--current{
  background: #FFFFFF !important;
  box-shadow: 0 5px 30px 0 rgba(0,0,0,0.10) !important;
}
</style>
