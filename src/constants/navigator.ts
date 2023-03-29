export type IPixScreens = {
  list: string;
  detail: string;
}
export type IPixNavigator = {
  stack: string;
  title: string;
  screens: IPixScreens;
}
export const PIX_NAVIGATORS:IPixNavigator = {
  stack: 'PixStack',
  title: 'Pix',
  screens: {
    list: 'PixList',
    detail: 'PixDetail'
  }
}