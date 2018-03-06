Vue.component('app-list', {
    template: ` <table id="tb">
            <tr>
                <th>编号</th>
                <th>名称</th>
                <th>创建时间</th>
                <th>操作</th>
            </tr>
            <tr v-if="!searchlist">
                <td colspan="4">列表无数据</td>
            </tr>
            <tr v-for="item in searchlist">
                <td>{{item.id}}</td>

                <td>{{item.name}}</td>
                <td>{{item.addTime|dateFilter}}</td>
                <td>
                    <a href="javascript:;" @click="del(item.id)">删除</a>
                </td>
            </tr>

        </table>`,
    props: ['searchlist'],
    data: function() {
        return {}
    },
    methods: {
        del: function(id) {
            this.$emit('del', id)
        }
    }
})