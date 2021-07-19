import * as axios from "axios";

const instance = axios.create({
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    withCredentials:true,
    headers: {
        "API-KEY": "99b92852-12a3-4e30-8f17-f5dd26672b7a"
    }
})
export const usersAPI = {
    getUsers(currentPage=1, pageSize=10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    followUser(userId) {
        return instance.post(`/follow/${userId}`)
            .then(response => response.data)
    },
    unfollowUser(userId) {
        return instance.delete(`/follow/${userId}`)
            .then(response => response.data)
    }
}
export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
            .then(response => response.data)
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status) {
        return instance.put(`profile/status`,{status: status})
    },
    savePhoto(photoFile) {
        const formData = new FormData
        formData.append('image', photoFile)
        return instance.put('profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    saveProfile(profile) {
        return instance.put(`profile`,profile)
    }
}
export const authAPI = {
    authUser() {
        return instance.get(`auth/me`)
            .then(response => response.data)
    },
    login(email, password, rememberMe=false, captcha = null) {
        return instance.post(`auth/login`, {email, password, rememberMe})
            .then(response => response.data)
    },
    logout() {
        return instance.delete(`auth/login`)
            .then(response => response.data)
    }
}
export const securityAPI = {
    getCaptchaUrl() {
        return instance.get(`security/get-captcha-url`)
    }
}