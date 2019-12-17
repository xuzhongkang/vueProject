import HttpRequest from '@/axios/api.request'

export const UserQryAction = () => {
  return HttpRequest.request({
    url: 'getUser',
    method: 'get'
  })
}

export const UserQryByNoAction = () => {
  return HttpRequest.request({
    url: 'getOneUser',
    method: 'get'
  })
}

export const UserAddAction = (parameter) => {
  return HttpRequest.request({
    url: 'addUser',
    method: 'post',
    params: parameter
  })
}

export const UserUpdateAction = (parameter) => {
  return HttpRequest.request({
    url: 'updateUser',
    method: 'post',
    params: parameter
  })
}

export const UserDelAction = (parameter) => {
  return HttpRequest.request({
    url: 'delUser',
    method: 'delete',
    params: {
      no: parameter
    }
  })
}

export const UserLoginAction = (parameter) => {
  return HttpRequest.request({
    url: 'login',
    method: 'post',
    params: parameter
  })
}

