export interface BookingStore {
  date: string | null;
  zoneId: string | null;
  tableId: string | null;
  time: string | null;
  setDate: (date: string | null) => void;
  setZoneId: (zoneId: string | null) => void;
  setTableId: (tableId: string | null) => void;
  setTime: (time: string | null) => void;
}

export interface BookingFormData {
  date: string;
  time: string;
  zoneId: string;
  tableId: string;
  customerName?: string;
  customerPhone?: string;
  customerEmail?: string;
  comment?: string;
} 