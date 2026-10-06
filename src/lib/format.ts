import { SITE } from '../consts';

const dateFormat = new Intl.DateTimeFormat(SITE.lang, { dateStyle: 'long' });

export const formatDate = (date: Date) => dateFormat.format(date);
