import { useHospitalInstallation } from '@/presentation/hooks/hospital-installation';
import { Button } from '@/presentation/components/ui/button';
import { Textfield } from '@/presentation/components/ui/textfield';
import { FormLabel, ValidatorLabel } from '@/presentation/components/ui/label';

const HospitalInstallationForm = () => {
  const { errors, isPending, onSubmit, register } = useHospitalInstallation();
  return (
    <div>
      <p className="mb-5">Form Instalasi Rumah Sakit</p>
      <div className="mb-3">
        <FormLabel text="Kode" />
        <Textfield type="text" disabled={isPending} {...register('code')} />
        {errors.code && <ValidatorLabel text={errors.code.message} />}
      </div>
      <div className="mb-3">
        <FormLabel text="Nama" />
        <Textfield type="text" disabled={isPending} {...register('name')} />
        {errors.name && <ValidatorLabel text={errors.name.message} />}
      </div>
      <Button text="Login" onClick={onSubmit} loading={isPending} />
    </div>
  );
};

export default HospitalInstallationForm;
