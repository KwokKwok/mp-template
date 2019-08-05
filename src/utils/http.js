const host = process.env.BASE_URL;

function request(url, method, data, header = {}) {
    return new Promise((resolve, reject) => {
        wx.request({
            url: `${url}`,
            // url: `${host}${url}`,
            method: method,
            data: data,
            headers: {
                'content-type': 'application/json' // 默认值
            },
            success: function (res) {
                wx.stopPullDownRefresh();
                resolve(res.data);
            },
            fail: function (res) {
                wx.stopPullDownRefresh();
                reject(res);
            },
            complete: function () {
                wx.stopPullDownRefresh();
            }
        })
    })
}

function get(url) {
    return request(url, 'GET')
}

function post(url, data) {
    return request(url, 'POST', data)
}

function remove(url) {
    return request(url, 'DELETE');
}

export default {
    request,
    get,
    post,
    host,
    remove
}