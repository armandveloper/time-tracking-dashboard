import * as React from 'react';

export type TypeTimeframes = 'Daily' | 'Weekly' | 'Monthly';

const DEFAULT_TIMEFRAME: TypeTimeframes = 'Weekly';

export const useTimeframe = (): [
  TypeTimeframes,
  React.Dispatch<React.SetStateAction<TypeTimeframes>>
] => {
  const [timeframe, setTimeframe] =
    React.useState<TypeTimeframes>(DEFAULT_TIMEFRAME);

  return [timeframe, setTimeframe];
};
