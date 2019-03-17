import { base, dark } from "grommet/themes";
import { deepMerge } from "grommet/utils";
import custom from '../styles/custom';
import customLight from '../styles/customLight';
import customDark from '../styles/customDark';

export default activeTheme => {

  const isDark = activeTheme === 'dark';

  const grommetMerged = deepMerge(base, isDark ? dark : base);
  const customMerged = deepMerge(custom, isDark ? customDark : customLight);
  const merged = deepMerge(grommetMerged, customMerged);

  console.log('theme', merged);

  return merged;
};
