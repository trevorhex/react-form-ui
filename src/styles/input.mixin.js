export const inputStyles = `
  display: block;
  width: 100%;

  &:not([type='button']),
  &:not([type='checkbox']),
  &:not([type='color']),
  &:not([type='file']),
  &:not([type='hidden']),
  &:not([type='image']),
  &:not([type='radio']),
  &:not([type='range']),
  &:not([type='reset']),
  &:not([type='submit']) {
    font-size: 14px;
    padding: 10px 15px 11px;
    border: 1px solid #ccc;
    border-radius: 3px;
    transition: border-color 250ms, box-shadow 250ms;

    &:focus {
      border-color: #8a8a8a;
      box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(0,0,0,.15);
      outline: none;
    }
  }
`;
