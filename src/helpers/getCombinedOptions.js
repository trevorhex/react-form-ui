import { getCssMediaObject } from '../helpers';

export const getCombinedOptions = (globalOptions, userOptions) => {
  const media = userOptions.media
    ? getCssMediaObject(userOptions.media)
    : globalOptions.media;

  return { ...globalOptions, ...userOptions, media };
};
