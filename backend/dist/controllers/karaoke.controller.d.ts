import { Request, Response } from 'express';
export declare class KaraokeController {
    getAllServices(req: Request, res: Response): Promise<void>;
    getService(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
    createService(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
    updateService(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
    deleteService(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
    getSettings(req: Request, res: Response): Promise<void>;
    updateSettings(req: Request, res: Response): Promise<void>;
}
//# sourceMappingURL=karaoke.controller.d.ts.map