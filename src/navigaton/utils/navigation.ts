// RootNavigation.ts
import { createNavigationContainerRef, NavigationContainerRef } from '@react-navigation/native';

type RootStackParamList = {
  Landing: undefined;
  Onboarding: { someParam: string };
  // Add other routes here
};

export const navigationRef = createNavigationContainerRef<NavigationContainerRef<RootStackParamList>>();

export function navigate<RouteName extends keyof RootStackParamList>(
  name: RouteName,
  params?: RootStackParamList[RouteName]
) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}
