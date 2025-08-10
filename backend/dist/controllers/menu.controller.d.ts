import { Request, Response } from "express";
export declare const getMenuTypes: (req: Request, res: Response) => Promise<void>;
export declare const getMenuTypeById: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const createMenuType: (req: Request, res: Response) => Promise<void>;
export declare const updateMenuType: (req: Request, res: Response) => Promise<void>;
export declare const deleteMenuType: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const getMenuCategories: (req: Request, res: Response) => Promise<void>;
export declare const createMenuCategory: (req: Request, res: Response) => Promise<void>;
export declare const updateMenuCategory: (req: Request, res: Response) => Promise<void>;
export declare const deleteMenuCategory: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const getMenuItems: (req: Request, res: Response) => Promise<void>;
export declare const createMenuItem: (req: Request, res: Response) => Promise<void>;
export declare const updateMenuItem: (req: Request, res: Response) => Promise<void>;
export declare const deleteMenuItem: (req: Request, res: Response) => Promise<void>;
export declare const fixSortOrder: (req: Request, res: Response) => Promise<void>;
//# sourceMappingURL=menu.controller.d.ts.map