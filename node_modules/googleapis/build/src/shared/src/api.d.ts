import { AxiosAdapter, AxiosProxyConfig, AxiosRequestConfig, AxiosResponse, AxiosTransformer, CancelToken } from 'axios';
import { OAuth2Client } from 'google-auth-library';
import { Endpoint } from './endpoint';
export interface APIRequestParams<T = any> {
    options: AxiosRequestConfig;
    params: T;
    requiredParams: string[];
    pathParams: string[];
    context: APIRequestContext;
    mediaUrl?: string | null;
}
export interface GoogleConfigurable {
    _options: GlobalOptions;
}
export interface APIRequestContext {
    google?: GoogleConfigurable;
    _options: GlobalOptions;
}
/**
 * This interface is a mix of the AxiosRequestConfig options
 * and our `auth: OAuth2Client|string` options.  We need to redefine
 * the interface here because the `auth` property already exists
 * on AxiosRequestConfig, and uses an entirely different type.
 */
export interface GlobalOptions {
    url?: string;
    method?: string;
    baseURL?: string;
    transformRequest?: AxiosTransformer | AxiosTransformer[];
    transformResponse?: AxiosTransformer | AxiosTransformer[];
    headers?: any;
    params?: any;
    paramsSerializer?: (params: any) => string;
    data?: any;
    timeout?: number;
    withCredentials?: boolean;
    adapter?: AxiosAdapter;
    auth?: OAuth2Client | string;
    responseType?: string;
    xsrfCookieName?: string;
    xsrfHeaderName?: string;
    onUploadProgress?: (progressEvent: any) => void;
    onDownloadProgress?: (progressEvent: any) => void;
    maxContentLength?: number;
    validateStatus?: (status: number) => boolean;
    maxRedirects?: number;
    httpAgent?: any;
    httpsAgent?: any;
    proxy?: AxiosProxyConfig | false;
    cancelToken?: CancelToken;
}
export interface MethodOptions extends AxiosRequestConfig {
    rootUrl?: string;
}
export interface ServiceOptions extends GlobalOptions {
    version?: string;
}
export declare type BodyResponseCallback<T> = (err: Error | null, res?: AxiosResponse<T> | null) => void;
export declare type APIEndpoint = Readonly<Endpoint & any>;
