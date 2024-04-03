import { AxiosError } from "axios"
import { useEffect, useState } from "react"
import { IAxiosCall } from "../models/axios.interface"

type ApiResponse<T> = {
  success: true
  data: T
} | {
  success: false
  error: AxiosError<T | unknown>
}

export const useFetchAndLoad = <T>() => {
  const [loading, setLoading] = useState(false)
  let controller: AbortController

  const callEndpoint = async (axiosCall: IAxiosCall<T>): Promise<ApiResponse<T>> => {
    if (axiosCall.controller) controller = axiosCall.controller
    setLoading(true)
    let result: ApiResponse<T>
    try {
      const response = await axiosCall.call
      result = { success: true, data: response.data as T }
    } catch (err: unknown) {
      setLoading(false)
      if (err instanceof Error && 'isAxiosError' in err) {
        result = { success: false, error: err as AxiosError<T> }
      } else {
        throw err
      }
    }
    setLoading(false)
    return result
  }

  const cancelEndpoint = () => {
    setLoading(false)
    controller && controller.abort()
  }

  useEffect(() => {
    return () => {
      cancelEndpoint()
    }
  }, [])

  return { loading, callEndpoint }
}
