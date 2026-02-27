export class HospitalInstallation {
  readonly id: string;
  readonly name: string;
  readonly code: string;
  readonly isActive: boolean;

  constructor(props: HospitalInstallation) {
    this.id = props.id;
    this.name = props.name;
    this.code = props.name;
    this.isActive = props.isActive;
  }

  // get isActiveText(): string {
  //   return this.isActive ? 'Aktif' : 'Tidak Aktif';
  // }
}
