import { AntDesign, Feather, MaterialCommunityIcons } from '@expo/vector-icons';

export const icons = {
  index: (props: any) => <AntDesign name="home" size={26} {...props} />,
  discover: (props: any) => <Feather name="compass" size={26} {...props} />,

  saved: (props: any) => (
    <MaterialCommunityIcons
      name="bookmark-multiple-outline"
      size={26}
      {...props}
    />
  ),
  settings: (props: any) => <Feather name="settings" size={26} {...props} />,
};
