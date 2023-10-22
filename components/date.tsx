// Date.js

import React from 'react';
import { formatDate } from './dateUtils';

export default function Date({ dateString, inputFormat, outputFormat }) {
  const formattedDate = formatDate(dateString, inputFormat, outputFormat);

  return <time dateTime={dateString}>{formattedDate}</time>;
}




// import { parseISO, format } from 'date-fns'

// export default function Date({ dateString }) {
//   const date = parseISO(dateString)
//   return <time dateTime={dateString}>{format(date, 'LLLL	d, yyyy')}</time>
// }



