import { useEffect, useState } from 'react'

type StatusType = 'idle' | 'loading' | 'success' | 'error'
const useAsync = <T>(asyncFunction: () => Promise<T>) => {
  const [data, setData] = useState<T | null>(null)
  const [status, setStatus] = useState<StatusType>('idle')
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    setStatus('loading')
    setData(null)
    setError(null)
    asyncFunction()
      .then(res => {
        setData(res)
        setStatus('success')
        setError(null)
      })
      .catch(err => {
        setError(err)
        setStatus('error')
        setData(null)
      })
  }, [asyncFunction])

  return {
    data,
    error,
    isLoading: status === 'loading',
    isSuccess: status === 'success',
    isError: status === 'error',
  }
}

export default useAsync
