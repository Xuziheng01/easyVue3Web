import axios from 'axios'

axios.interceptors.request.use(config => {
    let token = localStorage.getItem('token');
    if(!!token){
        config.headers.common['token'] = token
        config.headers.common['Authorization'] = "Bearer " + token
        config.headers.common['language'] = token
    }
    return config
}, error => {
    return Promise.error(error)
})

axios.interceptors.response.use(response => {
    console.log('%c请求成功' + '\n'+response,'background:#67C23A;padding: 4px;color:111;font-size:20px')
    if (response.status === 200) {
        if (response.data.code === 401) {
            localStorage.removeItem('token')
            // router.push({
            //     path: '/login',
            //     query: {
            //         redirect: router.fullPath || '/'
            //     }
            // })
            return Promise.resolve(response)
        } else if (response.data.code === 403) {
            setTimeout(()=>{
                router.push('/404')
            },1500)
            return Promise.resolve(response)
        } else if (response.data.code === 404 || response.data.code === 500) {
            setTimeout(()=>{
                router.push('/404')
            },1500)
            return Promise.resolve(response)
        } else if (response.data.code === 503) {
            setTimeout(()=>{
                router.push('/503')
            },1500)
            return Promise.resolve(response)
        } else {
            return Promise.resolve(response)
        }
    } else {
        return Promise.reject(response)
    }
}, error => {
    console.log('%c请求失败' + '\n'+error,'background:#f10;padding: 4px;color:111;font-size:20px')

})

let config = {
    headers: {
		'Content-Type': 'multipart/form-data;boundary = ' + new Date().getTime()
	}
};

export function httpGet(url, params = {}) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params
        }).then((res) => {
            resolve(res.data);
        }).catch(err => {
            reject(err)
        })
    })
}

export function httpPost(url, params={}) {
    return new Promise((resolve, reject) => {
        axios.post(url, JSON.stringify(params))
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err)
            })
    });
}

export function httpPut(url, params={}) {
    let formData = new FormData();
    for (let i in params) {
        formData.append(i, params[i])
    }
    return new Promise((resolve, reject) => {
        axios.put(url, formData, config)
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err)
            })
    });
}