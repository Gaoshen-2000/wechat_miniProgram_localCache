// pages/todo/todo.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        todoList: [],
        date: "",
        input: ""
    },
    /**
     * 存储到本地缓存
     */
    saveData: function () {
        wx.setStorageSync('todoList', this.data.todoList);
    },
    /**
     * 读取本地缓存
     */
    loadData: function () {
        var todo = wx.getStorageSync('todoList');
        if(todo){
          this.setData({
            todoList: todo
          });
        }
    },

    inputChange: function (e) {
        this.setData({
            input: e.detail.value
        });
    },
    /**
     * 更改任务状态
     * */
    changeCompleted: function (e) {
        var todo = this.data.todoList;
        console.log(todo)
        //获取e传输的id
        var index = e.currentTarget.id;
        console.log(index);
        //改变complete状态
        todo[index].completed = !todo[index].completed;
        //更改数据
        this.setData({
            todoList: todo
        });
        console.log(todo);
        this.saveData();
    },
    /**
     * 增加一条记录
     */
    addSingleRecord: function (e) {
        var input = this.data.input;
        if(input=="") {
            return;
        }
        var that = this;
        var todoList = this.data.todoList;
        todoList.push({ description: input, completed: false })
        //更新数据
        that.setData({ todoList: todoList, input: "" });
        //输出日志信息
        console.log(this.data.todoList)
        //保存记录到本地缓存
        this.saveData();
    },
    /**
     * 清除一条记录
     */
    removeSingleRecord: function (e) {
        var todoList = this.data.todoList;
        var index = e.currentTarget.id;
        //删除数据
        todoList.splice(index, 1);
        console.log(todoList);
        //设置数据
        this.setData({
            todoList: todoList
        });
        this.saveData();
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        //计算日期
        var date1 = new Date;
        var date2 = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
        this.setData({
            date: date1.getFullYear() + '-' + (date1.getMonth() + 1) + '-' + date1.getDate() + '   ' + (date2[date1.getDay()])
        })
        this.loadData();




    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})