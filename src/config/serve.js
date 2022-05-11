/** request return code */
const serve = {
    /** 
     * 请求成功
     */
    SUCCESS_CODE: 1,
    SUCCESS_CODE_MSG: '请求成功',
    /**
     * 请求失败
     */
    FAIL_CODE: 0,
    FAIL_CODE_MSG: '请求失败',
    /**
     * 请求出现语法错误
     */
    PREDICTABLE_CODE: 400,
    PREDICTABLE_CODE_MSG: '请求出现语法错误,请重试',
    /**
     * 禁用
     */
    DISABLED_CODE: 401,
    DISABLED_CODE_MSG: '账户禁用，请联系管理员',
    /**
     * 未授权
     */
    UNAUTHORIZED_CODE: 403,
    UNAUTHORIZED_CODE_MSG: '未授权，请联系管理员',
    /**
     * 未找到
     */
    NOT_FOUND_CODE: 404,
    NOT_FOUND_CODE_MSG: '未找到该账户，请联管理人员',
    /**
     * Token已过期
     */
    TOKEN_TIME_OUT_CODE: 405,
    TOKEN_TIME_OUT_CODE_MSG: '身份已过期，请重新登录',
    /**
     * 系统异常
     */
    ERROR_CODE: 500,
    ERROR_CODE_MSG: '系统异常，请稍后重试',
}
  
  
export default serve