export interface Bed {
  room_name: string;
  class: 'VIP' | '1' | '2';
  is_occupied: boolean;
}

export interface MedicineStock {
  medicine_name: string;
  stock_level: number;
}

export const mockBedOccupancy: Bed[] = [
  { room_name: 'Mawar 101', class: 'VIP', is_occupied: true },
  { room_name: 'Mawar 102', class: 'VIP', is_occupied: false },
  { room_name: 'Melati 201', class: '1', is_occupied: true },
  { room_name: 'Melati 202', class: '1', is_occupied: true },
  { room_name: 'Melati 203', class: '1', is_occupied: false },
  { room_name: 'Anggrek 301', class: '2', is_occupied: true },
  { room_name: 'Anggrek 302', class: '2', is_occupied: true },
  { room_name: 'Anggrek 303', class: '2', is_occupied: true },
  { room_name: 'Anggrek 304', class: '2', is_occupied: false },
];

export const mockPharmacyStock: MedicineStock[] = [
  { medicine_name: 'Paracetamol 500mg', stock_level: 150 },
  { medicine_name: 'Amoxicillin 500mg', stock_level: 80 },
  { medicine_name: 'Omeprazole 20mg', stock_level: 50 },
  { medicine_name: 'Loratadine 10mg', stock_level: 9 }, // Alert
  { medicine_name: 'Amlodipine 5mg', stock_level: 120 },
  { medicine_name: 'Salbutamol Inhaler', stock_level: 8 }, // Alert
  { medicine_name: 'Captopril 25mg', stock_level: 5 }, // Alert
];
