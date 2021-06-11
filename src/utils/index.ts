export const formatDate = (str: string): string => {
  return new Date(str)
    .toLocaleDateString('en-GB', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    })
    .split('/')
    .join('.');
};