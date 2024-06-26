import { PLACEMENTS } from '../ModalArrow/ModalArrow.constants';
import { COLORS } from '../ModalContainer/ModalContainer.constants';
import { BOUNDARIES } from '../Popover/Popover.constants';
import { BoundaryType } from '../Popover/Popover.types';

export const DEFAULTS = {
  BOUNDARY: BOUNDARIES.PARENT as BoundaryType,
  COLOR: COLORS.PRIMARY,
  IS_DESCRIPTION: false,
  OFFSET_DISTANCE: 5,
  OFFSET_SKIDDING: 0,
  PLACEMENT: PLACEMENTS.AUTO as string,
  STRATEGY: 'absolute' as const,
  VARIANT: 'small',
} as const;
