interface FormatNumberStringArgs {
  num: string | number;
}

export const formatNumberString = ({ num }: FormatNumberStringArgs) => {
  let formattedNumber = typeof num === 'number' ? num.toString() : num;

  formattedNumber = formattedNumber.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return formattedNumber;
};
export const cleanNumberString = (value: string): string => {
  value = value.replace(/[^\d.]/g, ''); 
  const parts = value.split('.'); 
  return parts.shift() + (parts.length ? '.' + parts.join('') : '');
};
