export const bridalImages = import.meta.glob('../assets/bridal/*.{png,jpg,jpeg,svg}', { eager: true });
export const partyImages = import.meta.glob('../assets/party/*.{png,jpg,jpeg,svg}', { eager: true });
export const engagementImages = import.meta.glob('../assets/engagement/*.{png,jpg,jpeg,svg}', { eager: true });
export const familyImages = import.meta.glob('../assets/family-bridesmaid/*.{png,jpg,jpeg,svg}', { eager: true });
export const hdAirbrushImages = import.meta.glob('../assets/hd-airbrush/*.{png,jpg,jpeg,svg}', { eager: true });

export function globToArray(globModules) {
  return Object.values(globModules).map(mod => mod.default);
}
