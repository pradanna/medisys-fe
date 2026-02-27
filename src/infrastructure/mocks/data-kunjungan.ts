export interface Kunjungan {
  id: number;
  patient_id: number;
  doctor_id: number;
  poli_id: number;
  date: Date;
  status: 'waiting' | 'consulting' | 'done';
  type: 'outpatient' | 'inpatient' | 'emergency';
}

const randomDate = (start: Date, end: Date): Date => {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
};

const generateVisits = (): Kunjungan[] => {
  const visits: Kunjungan[] = [];
  const today = new Date();
  const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);

  for (let i = 1; i <= 30; i++) {
    visits.push({
      id: i,
      patient_id: (i % 10) + 1,
      doctor_id: (i % 10) + 1,
      poli_id: (i % 6) + 1,
      date: randomDate(sevenDaysAgo, today),
      status: i % 3 === 0 ? 'waiting' : i % 3 === 1 ? 'consulting' : 'done',
      type:
        i % 4 === 0 ? 'emergency' : i % 4 === 1 ? 'inpatient' : 'outpatient',
    });
  }
  return visits;
};

export const mockKunjungan: Kunjungan[] = generateVisits();
