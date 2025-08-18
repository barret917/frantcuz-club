import { Request, Response } from 'express';
export declare const zonesController: {
    getZones(req: Request, res: Response): Promise<void>;
    getZoneById(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
    getZoneItemsByType(req: Request, res: Response): Promise<void>;
    getZoneItems(req: Request, res: Response): Promise<void>;
    updateZoneItem(req: Request, res: Response): Promise<void>;
    deleteZoneItem(req: Request, res: Response): Promise<void>;
    createReservation(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
    getZoneItemReservations(req: Request, res: Response): Promise<void>;
    validateZoneItem(type: string, data: any): string[];
    getReservationConfig(zoneItem: any, data: any): any;
    calculatePrice(zoneItem: any, config: any): number;
};
//# sourceMappingURL=zones.controller.d.ts.map