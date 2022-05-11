// 开发用接口
const API_DEV = {
    sysUserList: '/data/sys/user/list',
}
// 上线后的接口
const API_PRO = {
    sysUserList: '/data/sys/user/list', 
}

const api = process.env.NODE_ENV === "development" ? API_DEV : API_PRO;

export default api