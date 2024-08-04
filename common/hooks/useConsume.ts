import { ChangeEvent, useState } from 'react';
import { toast as toastFn } from 'react-hot-toast';
import { toast } from '@/common/helpers/toast';
import { consume } from '@/app/actions';

const useConsume = (paramSecret: string | undefined) => {
  const [secret, setSecret] = useState<string>(paramSecret ? paramSecret : '');
  const [address, setAddress] = useState<string>('');
  const [isConsuming, setIsConsuming] = useState<boolean>(false);

  const onSend = async () => {
    if (!secret || !address) return;

    setIsConsuming(true);
    const toastId = toastFn.loading('Snitching on you...');

    try {
      await consume(secret);

      toast({
        toastId: toastId,
        message: 'Succesfull snitching!',
        success: true,
      });
    } catch (error: any) {
      const errorMessage =
        error?.message || 'Something went wrong while snitching on you';

      toast({ toastId: toastId, message: errorMessage, success: false });
    } finally {
      setSecret('');
      setAddress('');
      setIsConsuming(false);
    }
  };

  const onChangeSecret = (event: ChangeEvent<HTMLInputElement> | undefined) => {
    if (!event) return;

    const value = event.target.value;
    setSecret(value);
  };

  const onChangeAddress = (
    event: ChangeEvent<HTMLInputElement> | undefined
  ) => {
    if (!event) return;

    const value = event.target.value;
    setAddress(value);
  };

  return {
    secret,
    setSecret,
    address,
    setAddress,
    isConsuming,
    setIsConsuming,
    onSend,
    onChangeSecret,
    onChangeAddress,
  };
};

export default useConsume;
