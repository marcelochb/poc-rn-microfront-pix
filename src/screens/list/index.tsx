import React, { useCallback } from 'react'
import { ThemeBase } from '@poc/theme'
import { PixListTemplate } from '@poc/templates'
import { PixEntity, usePixListController } from '@poc/core'
import { useSelector } from 'react-redux'
import { IGlobalState } from '@poc/interfaces'
import { useNavigation } from '@react-navigation/native'
import { PIX_NAVIGATORS } from '../../constants'

export const PixList = () => {
  const theme = useSelector((state:IGlobalState) => state.theme.value);
  const navigation = useNavigation<any>();
  const navigateToDetail = useCallback(
      (item:PixEntity) => {
      navigation.navigate(PIX_NAVIGATORS.screens.detail, {id: item.id});
    },[]
  )
  const {data,error,loading} = usePixListController();
  return (
    <PixListTemplate 
      theme={theme} 
      listData={data}
      error={error}
      loading={loading}
      callBack={navigateToDetail}
    />
  )
}
