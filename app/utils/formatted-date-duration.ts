import { differenceInMonths, differenceInYears, format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

export const formattedDateDuration = (
  startedDate: string,
  endedDate: string | null,
) => {
  const startDate = new Date(startedDate);

  const formattedStartDate = format(startDate, 'MMM yyyy', { locale: ptBR });
  const formattedEndDate = endedDate
    ? format(new Date(endedDate), 'MMM yyyy', { locale: ptBR })
    : 'O momento';

  const end = endedDate ? new Date(endedDate) : new Date();

  const months = differenceInMonths(end, startDate);
  const years = differenceInYears(end, startDate);
  const monthsRemaining = months % 12;

  const formattedDuration =
    years > 0
      ? `${years} ano${years > 1 ? 's' : ''}${
          monthsRemaining > 0
            ? ` e ${monthsRemaining} mes${monthsRemaining > 1 ? 'es' : ''}`
            : ''
        }`
      : `${months} mes${months > 1 ? 'es' : ''}`;

  return `${formattedStartDate} • ${formattedEndDate} • (${formattedDuration})`;
};
