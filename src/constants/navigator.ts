export type ModelOfPixScreens = {
  list: string;
  detail: string;
}
export type ModelOfPixNavigator = {
  stack: string;
  title: string;
  screens: ModelOfPixScreens;
}
export const PIX_NAVIGATORS:ModelOfPixNavigator = {
  stack: 'PixStack',
  title: 'Pix',
  screens: {
    list: 'PixList',
    detail: 'PixDetail'
  }
}