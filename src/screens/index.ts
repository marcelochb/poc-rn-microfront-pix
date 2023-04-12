import { IScreen } from '@poc/interfaces';
import { PixDetailScrren } from './detail';
import { PixListScreen } from './list';
import { NAVIGATOR_CONSTANTS } from '../constants';

export const screens:IScreen[] = [
  {
    component: PixListScreen,
    name: NAVIGATOR_CONSTANTS.LIST_SCREEN_NAME,
    title: NAVIGATOR_CONSTANTS.LIST_SCREEN_TITLE
  },
  {
    component: PixDetailScrren,
    name: NAVIGATOR_CONSTANTS.DETAIL_SCREEN_NAME,
    title: NAVIGATOR_CONSTANTS.DETAIL_SCREEN_TITLE
  }
]