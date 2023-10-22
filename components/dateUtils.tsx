import { parse, format } from 'date-fns';

export function formatDate(dateString, inputFormat, outputFormat) {
  try {
    const parsedDate = parse(dateString, inputFormat, new Date());
    return format(parsedDate, outputFormat);
  } catch (error) {
    console.error('Error parsing date:', error);
    return 'Invalid Date';
  }
}
