import { useAuth } from '@clerk/clerk-react'
import axios from 'axios'

import type { AxiosRequestConfig, AxiosResponse } from 'axios'

/**
 * Subset of AxiosRequestConfig
 */
export type RequestConfig<TData = unknown> = {
	url?: string
	method: 'GET' | 'PUT' | 'PATCH' | 'POST' | 'DELETE'
	params?: unknown
	data?: TData
	responseType?:
		| 'arraybuffer'
		| 'blob'
		| 'document'
		| 'json'
		| 'text'
		| 'stream'
	signal?: AbortSignal
	headers?: AxiosRequestConfig['headers']
}
/**
 * Subset of AxiosResponse
 */
export type ResponseErrorConfig<TData> = {
	data: TData
	status: number
	statusText: string
	headers?: AxiosResponse['headers']
}

export type Result<TData, TError> = [TError, null] | [null, TData]

export const axiosInstance = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
})

const client = async <TData, _TError, TVariables>(
	config: RequestConfig<TVariables>,
) => {
	const { getToken } = useAuth()
	const token = await getToken()
	const headers = {
		...config.headers,
		Authorization: token ? `Bearer ${token}` : '',
	}

	const response = await axiosInstance.request<
		TVariables,
		ResponseErrorConfig<TData>
	>({ ...config, headers })

	return response
}

export default client
