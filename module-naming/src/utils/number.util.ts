export const numberWithCommas = (targetNum: number) => {
    return targetNum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };