import http from './http';

export function getList(path = ''): Promise<DataType[]> {
    return http.get('oss', { p: path });
}

export function login(data: {username: string; password: string}) {
    return http.post('auth/login', data);
}

export interface DataType {
    id: number;
	uuid: string;
	name: string;
	size: string;
	path: string;
	type: string;
	filePath: string;
	md5: string;
	sha1: string;
	isDelete: number;
	createDate: string;
	modifyDate: string;
}
