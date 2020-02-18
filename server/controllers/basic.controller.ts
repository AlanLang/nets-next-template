export class BasicController {
    public success(data: any): ReturnType {
        return {
            status: 0,
            data,
        };
    }

    public error(status = 1, error: any): ReturnType {
        return {
            status,
            error,
        };
    }

    public getClientIp(req) {
        let ipAddress;
        const forwardedIpsStr = req.header('x-forwarded-for');
        if (forwardedIpsStr) {
            const forwardedIps = forwardedIpsStr.split(',');
            ipAddress = forwardedIps[0];
        }
        if (!ipAddress) {
            ipAddress = req.connection.remoteAddress;
        }
        
        return ipAddress;
    }
}

export interface ReturnType {
  status: number;
  data?: any;
  error?: any;
}
