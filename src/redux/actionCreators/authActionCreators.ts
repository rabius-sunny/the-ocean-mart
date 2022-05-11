import { AuthAction } from './../actions/authAction'
import { Dispatch } from 'react'
import { ActionType } from 'redux/actionTypes'
import Auth from 'services/Auth'

export const login = (payload: { email: string; password: string }) => {
  return (dispatch: Dispatch<AuthAction>) => {
    dispatch({
      type: ActionType.LOGIN_PENDING,
    })
    Auth.login(payload)
      .then((data: any) => {
        dispatch({
          type: ActionType.LOGIN_SUCCESS,
          payload: data,
        })
      })
      .catch((err: any) => {
        dispatch({
          type: ActionType.LOGIN_ERROR,
          payload: err?.response?.data?.message,
        })
      })
  }
  // return ;
}

export const logout = (): AuthAction => {
  return {
    type: ActionType.LOGOUT,
  }
}
