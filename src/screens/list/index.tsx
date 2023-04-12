import React, { useCallback } from 'react'
import { PixListTemplate } from '@poc/templates'
import { PixEntity, usePixListController } from '@poc/core'
import { useSelector } from 'react-redux'
import { IGlobalState } from '@poc/interfaces'
import { useNavigation } from '@react-navigation/native'
import { NAVIGATOR_CONSTANTS } from '../../constants'

export const PixListScreen = () => {
  const theme = useSelector((state:IGlobalState) => state.theme.value);
  const navigation = useNavigation<any>();
  const navigateToDetail = useCallback(
      (item:PixEntity) => {
      navigation.navigate(NAVIGATOR_CONSTANTS.DETAIL_SCREEN_NAME, {id: item.id});
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
