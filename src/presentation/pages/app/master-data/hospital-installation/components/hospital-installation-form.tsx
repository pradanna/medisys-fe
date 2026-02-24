import { useHospitalInstallation } from '@/presentation/hooks/hospital-installation';
import { Button } from '@/presentation/components/ui/button';
import { Textfield } from '@/presentation/components/ui/textfield';
const HospitalInstallationForm = () => {
  const { errors, isPending, onSubmit, register } = useHospitalInstallation();
  return (
    <div>
      <p className="mb-5">Form Instalasi Rumah Sakit</p>
      <div className="mb-3">
        <span className="block text-neutral-700">Kode Instalasi</span>
        <Textfield type="text" disabled={isPending} {...register('code')} />
        {errors.code && (
          <span className="block text-red-500">{errors.code.message}</span>
        )}
      </div>
      <div className="mb-3">
        <span className="block text-neutral-700">Nama Instalasi</span>
        <Textfield type="text" disabled={isPending} {...register('name')} />
        {errors.name && (
          <span className="block text-red-500">{errors.name.message}</span>
        )}
      </div>
      <Button text="Login" onClick={onSubmit} loading={isPending} />
    </div>
  );
};

export default HospitalInstallationForm;
