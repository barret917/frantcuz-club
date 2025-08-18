import { Request, Response } from 'express';
export declare const tablesController: {
    getAllZoneItems(req: Request, res: Response): Promise<void>;
    getAvailableTables(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
    createTableBooking(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
    getTableBookings(req: Request, res: Response): Promise<void>;
    updateBookingStatus(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
    cancelBooking(req: Request, res: Response): Promise<void>;
    getTablesStats(req: Request, res: Response): Promise<void>;
};
//# sourceMappingURL=tables.controller.d.ts.map