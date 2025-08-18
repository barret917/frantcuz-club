import { Request, Response } from 'express';
export declare class BanquetRequestsController {
    create(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
    getAll(req: Request, res: Response): Promise<void>;
    getById(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
    updateStatus(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
    delete(req: Request, res: Response): Promise<void>;
    getStats(req: Request, res: Response): Promise<void>;
}
//# sourceMappingURL=banquet-requests.controller.d.ts.map