import React from 'react';
import { PixDetailTemplate } from '@poc/templates';
import { usePixDetailController } from '@poc/core';
import { useSelector } from 'react-redux';
import { IGlobalState } from '@poc/interfaces';

export const PixDetailScrren = () => {
  const theme = useSelector((state:IGlobalState) => state.theme.value);
  const {data,loading,error} = usePixDetailController();
  return (
    <PixDetailTemplate theme={theme} 
      data={data}
      error={error}
      loading={loading}
    />
  );
};
